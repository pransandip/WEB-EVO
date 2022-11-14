import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EvoLogo from '../ImageAssests/Logo/evo.png';
import appLogo from '../ImageAssests/Logo/Logo.png';
import HomeIcon from '../ImageAssests/ButtonImages/Home.png';
import backIcon from '../ImageAssests/ButtonImages/BackArrow.png';
import nextIcon from '../ImageAssests/ButtonImages/NextArrow.png';
import SignatureCanvas from 'react-signature-canvas'
import '../StyleSheets/HomePage.css';
import localLangData from '../LanguageAsset/evo_lang.json';
import Select from 'react-select'
import '../StyleSheets/Vehicletype.css';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { ToastContainer, toast } from 'react-toastify';
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import environment from '../Environment/Environment';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';
var tempintervalid = '';
class Wastetype extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: true,
            scanImage1: '',
            isSecondImage: false
        }

    }

    notify = () => toast.info(localLangData[localStorage.getItem('lang')].call_operator_text, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    componentDidMount() {
        if (tempintervalid) {
            clearInterval(tempintervalid);
        }
        // tempintervalid = setInterval(() => { this.props.history.push('Home') }, 3000)
        var scale_value = localStorage.getItem('scale_value');
        let socket = new WebSocket(environment.DEVICE_MANAGER_IP);
        socket.onopen = function (e) {
            if (scale_value === '0') {
                socket.send("GET IMAGE0");
            } else {
                socket.send("GET IMAGE1");
            }
        };
        var tempData = ''
        socket.onmessage = function (event) {
            if(event.data != 'Connected'){
            var tempData = JSON.parse(event.data);
            if (tempData.msg_type === 'image') {
                this.setState({
                    scanImage1: tempData
                })
            } else{
                this.setState({
                    scanImage1: tempData
                })
            }
        }
        }.bind(this);

        socket.onerror = function (event) {
            this.setState({
                socketError: true,
                licencePlateNumber: ' '
            })
        }.bind(this);
    }

    componentWillUnmount() {
        clearInterval(tempintervalid);
    }

    gotoHome() {
        this.props.history.push('Home');
    }
    gotoBack() {
        this.props.history.goBack();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.order_detail_data) {
            console.log(nextProps.order_detail_data);
            localStorage.setItem('yard_ticket', nextProps.order_detail_data.data);
            localStorage.setItem('yard_pdf', nextProps.order_detail_data.pdf);
            // this.props.history.push('StartProcessTimer',{
            //     process :  nextProps.order_detail_data.data.data,
            //     pdf : nextProps.order_detail_data.data.pdf
            // })
           // window.open('OverLayout');
           let tempPdf = nextProps.order_detail_data.data.pdf;
           console.log(tempPdf);
           tempPdf = tempPdf.replace(/"/ig, '');
           console.log(tempPdf);
           let pdfWindow = window.open("")
           pdfWindow.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(tempPdf) + "'></iframe>")
           this.gotoHome();
        }
      }

    gotoNext(data) {
        // this.props.history.push('StartProcessWaittoDrive',{
        //     oderDetailsData : data
        // });
        this.props.save_order_details(data);
    }

    clearCanvas() {
        this.sigCanvas.clear();
    }

    sendOrderDetailToServerDatabase(){
        const orderData = this.props.location.state.state.auftragData;
        var tempTruckType = localStorage.getItem('truckType');
        const currentDate = moment(new Date()).format('yyyy-MM-DDTHH:mm:ss.SSSSSSZ');
        var dataTosend = {
            "authToken" : this.props.location.state.state.authToken,
            "avv_number": orderData.AVV_Nr,
            "order_number": orderData.Auftragsnummer,
            "bef_ansp": orderData.BEF_Ansp,
            "bef_name": orderData.BEF_Name,
            "bef_number": orderData.BEF_Nr,
            "erz_ansp": orderData.ERZ_Ansp,
            "erz_name": orderData.ERZ_Name,
            "erz_number": orderData.ERZ_Nr,
            "import_export": orderData.EinfuhrAusfuhr,
            "disposal_facility": orderData.Entsorgungsanlage,
            "kunde_ansp": orderData.KUNDE_Ansp,
            "kunde_name": orderData.KNDE_Name,
            "kunde_number": orderData.KUNDE_Nr,
            "order_validity": orderData.Auftragsgueltigkeit,
            "process_code": orderData.Prozesscode,
            "variety_denomination": orderData.Sortenbezeichnung,
            "variety_number": orderData.Sortennummer,
            "gross_image_1": "",
            "gross_image_2": "",
            "gross_datetime": "",
            "gross_to": "",
            "gross_cradel_number": "",
            "yard_ticket": "",
            "kfg_number": "",
            "tara_image_1": this.props.location.state.state.before_weighing_img,
            "tara_image_2": this.state.scanImage1.image_data,
            "tara_datetime": this.props.location.state.state.firstWeightDate,
            "tara_to": this.props.location.state.state.first_weight,
            "tara_cradel_number": this.props.location.state.state.alibiNumber,
            "driver_name": this.props.location.state.state.nameInputValue,
            "license_plate": this.props.location.state.state.licensePlateNumber.replace('-', ' '),
            "check_yard_list": true,
            "created_on": currentDate,
            "store_number": 0,
            "vehicle_type": tempTruckType
        }

        console.log('all day', dataTosend);
        this.gotoNext(dataTosend);
    }



    render() {
        const override = css`
        display: block;
         margin: 0 auto;
         marginTop: 100;
        border-color: red;
        `;
        const barcodeValue = this.props.location.state.state.auftragData.Auftragsnummer;
        const licenseValue = this.props.location.state.state.licensePlateNumber;
        const nameValue = this.props.location.state.state.nameInputValue;
        const firstWeight = this.props.location.state.state.first_weight;
        const processValue = this.props.location.state.state.auftragData.Sortenbezeichnung;

        return (
            <div style={{
                overflow: 'hidden',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                KhtmlUserSelect: 'none',
                MozUserSelect: 'nonoe',
                msUserSelect: 'none',
                userSelect: 'none'
            }}>
                <Row style={{ marginTop: '30px' }}>
                    <Col >
                        <div style={{ marginLeft: '30px' }} onClick={() => this.gotoHome()}>
                            <img width={80} height={80} src={HomeIcon} />
                        </div>
                    </Col>
                    <Col xs={7}>
                        <div style={{
                            width: '250px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            textAlign: 'center'
                        }}>
                            <img width={150} height={70} src={EvoLogo} />
                            <label style={{ fontSize: '10px', fontWeight: 'bold', alignSelf: 'center' }} >{localLangData.de.logo_under_line}</label>
                        </div>
                    </Col>
                    <Col >
                        <div style={{ marginRight: '42px' }}>
                            <img width={150} height={70} src={appLogo} />
                        </div>
                    </Col>
                </Row>

                <Container style={{ background: '', height: '435px' }} >
                    {(this.state.scanImage1 !== '' && this.state.scanImage1 !== undefined) && !this.props.isOrderDetailDataLoading ?
                        <Row style={{ marginTop: '50px' }}>
                            <Col>
                                <div>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '162px' }} >{localLangData[localStorage.getItem('lang')].signature_label}</label>
                                </div>
                                <Row style={{ marginTop: '20px', marginLeft: '200px' }}>
                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_name}</label>
                                    </Col>

                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '0px' }} >{nameValue}</label>
                                    </Col>

                                </Row>
                                <Row style={{ marginTop: '20px', marginLeft: '200px' }}>
                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_barcode}</label>
                                    </Col>

                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '0px' }} >{barcodeValue}</label>
                                    </Col>

                                </Row>
                                <Row style={{ marginTop: '20px', marginLeft: '200px' }}>
                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_license}</label>
                                    </Col>

                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '0px' }} >{licenseValue}</label>
                                    </Col>

                                </Row>
                                <Row style={{ marginTop: '20px', marginLeft: '200px' }}>
                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_process}</label>
                                    </Col>

                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '0px' }} >{processValue}</label>
                                    </Col>

                                </Row>

                                <Row style={{ marginTop: '20px', marginLeft: '200px' }}>
                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_first}</label>
                                    </Col>

                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '0px' }} >{firstWeight}</label>
                                    </Col>

                                </Row>
                            </Col>
                        </Row> :
                        this.state.socketError ?
                            <div style={{ marginTop: '150px' }}>
                                <label style={{ fontSize: '25px', fontWeight: 'bold', color: 'red', marginLeft: '65px', marginTop: '25px' }} >{localLangData[localStorage.getItem('lang')].socket_Error}</label>
                            </div>
                            :
                            <div style={{ marginTop: '110px' }}>
                                <ClockLoader color={'#000947'} loading={true} css={override} size={150} id='loaderone' />
                                <label style={{ fontSize: '30px', fontWeight: 'bold', color: '#000947', marginLeft: '100px', marginTop: '20px' }} >{localLangData[localStorage.getItem('lang')].after_weighing_img_wait + '...'}</label>
                            </div>}

                </Container>
                <Row>
                    <Col xs={4}>
                        <div style={{ marginLeft: '30px' }} >
                            <img width={80} height={80} src={backIcon} onClick={() => this.gotoBack()} />
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div style={{ marginLeft: '145px' }}>
                            <img width={64} height={64} src={`${process.env.PUBLIC_URL}/assets/phone-call.png`} onClick={() => this.notify()} />
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div style={{ marginRight: '30px', float: 'right', borderRadius: '5px', border: '1px solid #000947', width: '200px', height: '50px', marginTop: '10px' }} onClick={() => this.sendOrderDetailToServerDatabase()}>
                            <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: localStorage.getItem('lang') === 'de' ? '25px' : '50px', marginTop: '4px' }} >{localLangData[localStorage.getItem('lang')].approve_btn_txt}</label>
                        </div>
                    </Col>

                </Row>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isOrderDetailDataLoading: state.HomeProcessReducers.isOrderDetailDataLoading,
    order_detail_data: state.HomeProcessReducers.order_detail_data
});

const mapDispatchToProps = (dispatch) => ({
    save_order_details: (orderDetailData) => dispatch(actions.saveOrderDetailDataRequest(orderDetailData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Wastetype);

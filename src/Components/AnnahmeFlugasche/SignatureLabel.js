import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EvoLogo from '../../ImageAssests/Logo/evo.png';
import appLogo from '../../ImageAssests/Logo/Logo.png';
import HomeIcon from '../../ImageAssests/ButtonImages/Home.png';
import backIcon from '../../ImageAssests/ButtonImages/BackArrow.png';
import nextIcon from '../../ImageAssests/ButtonImages/NextArrow.png';
import '../../StyleSheets/HomePage.css';
import { connect } from 'react-redux';
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import environment from '../../Environment/Environment';
import * as actions from '../../actions/index';
import localLangData from '../../LanguageAsset/evo_lang.json';
import SignatureCanvas from 'react-signature-canvas'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
class SignatureLableAnnahmeFlugasche extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showHomeIcon: false,
            shownCancelScreen: false,
            firstWeightData: this.props.location.state.state.first_weight_data[0],
            second_weight: '',
            second_image1: '',
            second_image2: '',
            second_weight_datetime: '',
            second_alibinr: ''
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
        let socket = new WebSocket(environment.DEVICE_MANAGER_IP);
        socket.onopen = function (e) {
            socket.send("GET WEIGHTNM");
            socket.send("GET IMAGE0");
            socket.send("GET IMAGE1");
        };
        var tempData = ''
        socket.onmessage = function (event) {
            var tempData = JSON.parse(event.data);
            if (tempData.msg_type === 'weightnm') {
                this.setState({
                    second_weight: tempData.weight,
                    second_weight_datetime: tempData.date + ' ' + tempData.time,
                    second_alibinr: tempData.alibi_nr
                })
            } else if (tempData.msg_type === 'image') {
                if (this.state.second_image1) {
                    this.setState({
                        second_image2: tempData
                    })
                } else {
                    this.setState({
                        second_image1: tempData
                    })
                }

            }
        }.bind(this);

        socket.onerror = function (event) {
            this.setState({
                socketError: true,
                firstVehicleWait: ' '
            })
        }.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.order_second_detail_data) {
            console.log('second order data is here', nextProps.order_second_detail_data);
            localStorage.setItem('yard_ticket', nextProps.order_second_detail_data.data.Lieferschein_Base64);
            var tempComingFrom = this.props.location.state.comingFrom;
            this.props.history.push('ThanksLayoutAnnahmeFlugasche', {
                pdf: nextProps.order_second_detail_data.data.Lieferschein_Base64,
                // oderSecondDetailData: nextProps.order_second_detail_data,
                comingFrom: tempComingFrom
            });
        }
    }

    gotoBack() {
        this.props.history.goBack();
    }

    gotoNext() {
        this.props.history.push('OverLayoutAnnahmeFlugasche');
    }

    gotoHome() {
        this.props.history.push('AnnahmeFlugascheHome');
    }

    clearCanvas() {
        this.sigCanvas.clear();
    }

    sendOrderDetailToServerDatabase() {
        var tempTaraDT = new Date(new Date(this.state.second_weight_datetime).toString().split('GMT')[0] + ' UTC');
        var dataTosend = {
            "id": this.state.firstWeightData.id,
            "client_id": environment.client_id,
            "password": environment.password,
            "user_id": environment.user_id,
            "order_number": this.state.firstWeightData.order_number,
            "gross_datetime": tempTaraDT,
            "gross_to": this.state.second_weight,
            "gross_cradel_number": this.state.second_alibinr,
            "yard_ticket": this.state.firstWeightData.yard_ticket,
            "license_plate": this.state.firstWeightData.license_plate,
            "tara_datetime": this.state.firstWeightData.tara_datetime,
            "tara_to": this.state.firstWeightData.tara_to,
            "tara_cradel_number": this.state.firstWeightData.tara_cradel_number,
            "signature": '',
            "gross_image_1": this.state.second_image1.image_data,
            "gross_image_2": this.state.second_image2.image_data,
            "check_yard_list": false,
        }

        console.log('all day', dataTosend);

        this.props.save_second_order_details(dataTosend);
    }


    render() {
        const override = css`
        display: block;
         margin: 0 auto;
         marginTop: 100;
        border-color: red;
        `;
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
                        <div style={{ marginRight: '42px', display: 'flex', flexDirection: 'column' }}>
                            <img width={150} height={70} src={appLogo} />
                            <label style={{ fontSize: '13px', fontWeight: 'normal', color: '#000947', alignSelf: 'center' }} >{""}</label>
                        </div>
                    </Col>
                </Row>

                <Container style={{ background: '', height: '435px' }} >
                    {(this.state.second_weight !== '' && this.state.second_image1 !== undefined) && this.state.second_image2 !== undefined &&
                        !this.props.isSecondOrderDetailDataLoading
                        ?
                        <Row style={{ marginTop: '100px' }}>
                            <Col>
                                <div>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].signature_label}</label>
                                </div>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_name}</label>
                                    </Col>

                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '90px' }} >{this.state.firstWeightData && this.state.firstWeightData.driver_name}</label>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_license}</label>
                                    </Col>

                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '90px' }} >{this.state.firstWeightData && this.state.firstWeightData.license_plate}</label>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_first}</label>
                                    </Col>

                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '90px' }} >{this.state.firstWeightData && this.state.firstWeightData.tara_to}</label>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_second}</label>
                                    </Col>

                                    <Col>
                                        <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '90px' }} >{this.state.second_weight}</label>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <div style={{ border: '1px solid black' }}>
                                    <SignatureCanvas penColor='black'
                                        ref={(ref) => { this.sigCanvas = ref }}
                                        canvasProps={{ width: 500, height: 300, className: 'sigCanvas' }} />
                                </div>
                                <div style={{
                                    border: '1px solid black',
                                    fontSize: '25px',
                                    fontWeight: 'bold',
                                    color: '#000947',
                                    textAlign: 'center',
                                    width: '150px', marginTop: '20px'
                                }} onClick={() => this.clearCanvas()}>
                                    {localLangData[localStorage.getItem('lang')].sign_reset}
                                </div>
                            </Col>
                        </Row>
                        :
                        this.state.socketError ?
                            <div style={{ marginTop: '150px' }}>
                                <label style={{ fontSize: '25px', fontWeight: 'bold', color: 'red', marginLeft: '65px', marginTop: '25px' }} >{localLangData[localStorage.getItem('lang')].socket_Error}</label>
                            </div>
                            :
                            <div style={{ marginTop: '130px' }}>
                                <ClockLoader color={'#000947'} loading={true} css={override} size={150} id='loaderone' />
                                <label style={{ fontSize: '40px', fontWeight: 'bold', color: '#000947', marginLeft: '120px', marginTop: '25px' }} >{localLangData[localStorage.getItem('lang')].first_image_loading}</label>
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
                        <div style={{ marginRight: '30px', float: 'right' }}>
                            <img width={80} height={80} src={nextIcon} onClick={() => this.sendOrderDetailToServerDatabase()} />
                        </div>
                    </Col>

                </Row>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    order_second_detail_data: state.HomeProcessReducers.order_second_detail_data,
    isSecondOrderDetailDataLoading: state.HomeProcessReducers.isSecondOrderDetailDataLoading
});

const mapDispatchToProps = (dispatch) => ({
    save_second_order_details: (orderDetailData) => dispatch(actions.saveSecondOrderDetailDataRequest(orderDetailData))
});

export default connect(mapStateToProps, mapDispatchToProps) (SignatureLableAnnahmeFlugasche);

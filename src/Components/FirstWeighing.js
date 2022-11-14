import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EvoLogo from '../ImageAssests/Logo/evo.png';
import appLogo from '../ImageAssests/Logo/Logo.png';
import HomeIcon from '../ImageAssests/ButtonImages/Home.png';
import backIcon from '../ImageAssests/ButtonImages/BackArrow.png';
import nextIcon from '../ImageAssests/ButtonImages/NextArrow.png';
import imageReader from '../ImageAssests/ButtonImages/reader.jpeg';
import '../StyleSheets/HomePage.css';
import localLangData from '../LanguageAsset/evo_lang.json';
import 'react-touch-screen-keyboard/lib/Keyboard.css';
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import environment from '../Environment/Environment';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';

import 'react-toastify/dist/ReactToastify.css';

class FirstWeighing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showHomeIcon: false,
            shownCancelScreen: false,
            scanImage: '',
            firstVehicleWait: '',
            dateTime: '',
            alibiNumber: '',
            socketError: false
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
        var scale_value = localStorage.getItem('scale_value');
        socket.onopen = function (e) {
            if (scale_value === '0') {
                socket.send("GET WEIGHTNM0");
            } else {
                socket.send("GET WEIGHTNM1");
            }

        };
        var tempData = ''
        socket.onmessage = function (event) {
            if(event.data != 'Connected'){
            var tempData = JSON.parse(event.data);
            console.log(tempData)
            try{
            if (tempData.msg_type === 'weightnm') {
                console.log('date time is here ', tempData.weight);
                if (tempData.weight !== "0") {
                    if (scale_value === '0') {
                        socket.send("GET WEIGHTNM0");
                    } else {
                        socket.send("GET WEIGHTNM1");
                    }
                } else {
                    this.setState({
                        firstVehicleWait: tempData.weight,
                        dateTime: tempData.date + ' ' + tempData.time,
                        alibiNumber: tempData.alibi_nr
                    })
                }

            }
        }
        catch{
            console.log("error is here")
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

    gotoHome() {
        this.props.history.push('Home');
    }

    gotoBack() {
        this.props.history.goBack();
    }

    reverseString(str) {
        // Step 1. Use the split() method to return a new array
        var splitString = str.split("-"); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]

        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]

        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join("-"); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"

        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    }

    gotoNext() {
        localStorage.setItem('firstWeight', this.state.firstVehicleWait);
        if (this.state.licencePlateNumber === '') {
            document.getElementById('barcodeinput').style.border = '1px solid red'
        } else {
            try{
            let tempDateTime = this.state.dateTime.split(' ');
            let tempDate = tempDateTime[0].replaceAll('.', '-');
            tempDate = this.reverseString(tempDate);
            let compDt = '20' + tempDate + ' ' + tempDateTime[1] + ':' + '00';
            let tempTaraDT = new Date(compDt).toISOString();
            console.log('date time is here ', compDt.toString(), tempTaraDT);
            }
            catch{
                console.log("error is here")
            }
            this.props.history.push('Wastetype', {
                state: {
                    authToken: this.props.location.state.state.authToken,
                    auftragData: this.props.location.state.state.auftragData,
                    licensePlateNumber: this.props.location.state.state.licensePlateNumber,
                    nameInputValue: this.props.location.state.state.nameInputValue,
                    before_weighing_img: this.props.location.state.state.before_weighing_img,
                    first_weight: this.state.firstVehicleWait,
                    //firstWeightDate: compDt,
                    alibiNumber: this.state.alibiNumber
                }
            });
        }
    }

    keyboardTapInputMethod(e) {
        var tempBarcodeValue = this.state.licencePlateNumber;
        if (e === '<-') {
            tempBarcodeValue = tempBarcodeValue.slice(0, -1)
        } else if (e === 'SPACE') {
            tempBarcodeValue = tempBarcodeValue + ' ';

        } else {
            tempBarcodeValue = tempBarcodeValue + e;
        }
        document.getElementById('barcodeinput').style.border = '1px solid #000947'
        this.setState({
            licencePlateNumber: tempBarcodeValue
        })
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
                <Container style={{ height: '660px' }}>
                    <Row style={{ marginTop: '10px' }}>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div onClick={() => this.gotoHome()}>
                                <img width={80} height={80} src={HomeIcon} />
                            </div>
                            <div style={{
                                width: '280px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                textAlign: 'center'
                            }}>
                                <img width={150} height={70} src={EvoLogo} style={{ marginLeft: '40px' }} />
                                <label style={{ fontSize: '10px', fontWeight: 'bold', marginLeft: '48px', textAlign: 'center' }} >{localLangData.de.logo_under_line}</label>
                            </div>
                            <div>
                                <img width={150} height={70} src={appLogo} />
                            </div>
                        </div>
                    </Row>
                    {(this.state.firstVehicleWait !== '' && this.state.firstVehicleWait !== undefined) ?
                        <div>
                            <Row style={{ marginTop: '20px' }}>
                                <Col xs={2}></Col>
                                <Col xs={7}>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: localStorage.getItem('lang') === 'en' ? '210px' : '164px', marginTop: '150px' }} >{localLangData[localStorage.getItem('lang')].weight_wait_text}</label>
                                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '0px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0px' }}>
                                            <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '270px', marginTop: '50px' }} >{this.state.firstVehicleWait + ' ' + 'KG'}</label>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div> :
                        this.state.socketError ?
                            <div style={{ marginTop: '150px' }}>
                                <label style={{ fontSize: '25px', fontWeight: 'bold', color: 'red', marginLeft: '65px', marginTop: '25px' }} >{localLangData[localStorage.getItem('lang')].socket_Error}</label>
                            </div>
                            :
                            <div style={{ marginTop: '150px' }}>
                                <ClockLoader color={'#000947'} loading={true} css={override} size={150} id='loaderone' />
                                <label style={{ fontSize: '40px', fontWeight: 'bold', color: '#000947', marginLeft: '320px', marginTop: '25px' }} >{localLangData[localStorage.getItem('lang')].waitclockmsg}</label>
                            </div>}
                </Container>
                {(this.state.firstVehicleWait !== '' && this.state.firstVehicleWait !== undefined) ? <Row>
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
                            <img width={80} height={80} src={nextIcon} onClick={() => this.gotoNext()} />
                        </div>
                    </Col>

                </Row> : null}

            </div>
        )
    }
}

export default FirstWeighing;

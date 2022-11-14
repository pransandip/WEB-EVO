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
import localLangData from '../../LanguageAsset/evo_lang.json';
import SignatureCanvas from 'react-signature-canvas'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
class SignatureLableAnnahmeKlärschlammascheTerminal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showHomeIcon: false,
            shownCancelScreen: false
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

    }

    gotoBack() {
        this.props.history.goBack();
    }

    gotoNext() {
        this.props.history.push('PointInstructionAnnahmeKlärschlammascheTerminal');
    }

    gotoHome() {
        this.props.history.push('AnnahmeKlärschlammascheTerminalHome');
    }

    clearCanvas() {
        this.sigCanvas.clear();
    }

    render() {
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
                            <label style={{ fontSize: '10px', fontWeight: 'bold',  alignSelf: 'center' }} >{localLangData.de.logo_under_line}</label>
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
                    <Row style={{ marginTop: '100px' }}>
                        {/* <Col>
                            <div>
                                <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].signature_label}</label>
                            </div>
                            <Row style={{ marginTop: '20px' }}>
                                <Col>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_name}</label>
                                </Col>

                                <Col>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '90px' }} >*name*</label>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '20px' }}>
                                <Col>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_license}</label>
                                </Col>

                                <Col>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '90px' }} >*licene*</label>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '20px' }}>
                                <Col>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_first}</label>
                                </Col>

                                <Col>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '90px' }} >*weight1*</label>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '20px' }}>
                                <Col>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].sign_second}</label>
                                </Col>

                                <Col>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '90px' }} >*weight2*</label>
                                </Col>
                            </Row>
                        </Col> */}
                        <div style={{marginLeft:'auto', marginRight:'auto', width:'750px'}}>
                            <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '210px' }} >{localLangData[localStorage.getItem('lang')].signature_label_4}</label>
                        </div>
                        <Col>
                            <div style={{ border: '1px solid black', marginTop:'20px' }}>
                                <SignatureCanvas penColor='black'
                                    ref={(ref) => { this.sigCanvas = ref }}
                                    canvasProps={{ width: 1000, height: 300, className: 'sigCanvas' }} />
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
                </Container>
                <Row>
                    <Col xs={4}>
                        <div style={{ marginLeft: '30px' }} >
                            <img width={80} height={80} src={backIcon} onClick={() => this.gotoBack()} />
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div style={{marginLeft:'145px'}}>
                            <img width={64} height={64} src={`${process.env.PUBLIC_URL}/assets/phone-call.png`} onClick={() => this.notify()}/>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div style={{ marginRight: '30px', float:'right' }}>
                            <img width={80} height={80} src={nextIcon} onClick={() => this.gotoNext()} />
                        </div>
                    </Col>

                </Row>
                 
            </div>
        )
    }
}

export default SignatureLableAnnahmeKlärschlammascheTerminal;

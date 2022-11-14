import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EvoLogo from '../../ImageAssests/Logo/evo.png';
import appLogo from '../../ImageAssests/Logo/Logo.png';
import HomeIcon from '../../ImageAssests/ButtonImages/Home.png';
import safetyIcons from '../../ImageAssests/ButtonImages/Screenshot.png';
import twentyzone from '../../ImageAssests/ButtonImages/20zone.png';
import nozone from '../../ImageAssests/ButtonImages/nozone.png';
import tricross from '../../ImageAssests/ButtonImages/tri_cross.png';
import cancelIcon from '../../ImageAssests/ButtonImages/cancel.png';
import checkedIcon from '../../ImageAssests/ButtonImages/checked.png';
import backIcon from '../../ImageAssests/ButtonImages/BackArrow.png';
import '../../StyleSheets/HomePage.css';
import localLangData from '../../LanguageAsset/evo_lang.json'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Gallery from "react-photo-gallery";

class SafetyInstructionAnnahmeKlärschlammascheTerminal extends Component {

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


    gotoHome() {
        this.props.history.push('AnnahmeKlärschlammascheTerminalHome');
    }

    cancelButtonMethod() {
        this.props.history.push('SafetynegationAnnahmeKlärschlammascheTerminal');
    }

    checkedButtonMethod() {
        this.props.history.push('SignatureLableAnnahmeKlärschlammascheTerminal');
    }
    gotoBack() {
        this.props.history.goBack();
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

                <Container >
                    <Row style={{ marginTop: '20px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947' }} >{localLangData[localStorage.getItem('lang')].safety_instr}</label>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{
                                width: '550px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: '30px'
                            }}>
                                <img width={650} height={150} style={{ marginLeft: '-60px' }} src={safetyIcons} />
                            </div>
                            <div style={{
                                width: '750px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: '30px'
                            }}>
                                <img width={150} height={150} style={{ marginLeft: '60px' }} src={twentyzone} />
                                <img width={150} height={150} style={{ marginLeft: '80px' }} src={nozone} />
                                <img width={150} height={150} style={{ marginLeft: '95px' }} src={tricross} />
                            </div>

                            <div style={{
                                width: '250px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: '50px'
                            }}>
                                <img width={75} height={75} style={{ marginLeft: '0px' }} src={cancelIcon} onClick={() => this.cancelButtonMethod()} />
                                <img width={75} height={75} style={{ marginLeft: '80px' }} src={checkedIcon} onClick={() => this.checkedButtonMethod()} />
                            </div>
                        </div>
                    </Row>

                </Container>
                <Row>
                    <Col >
                        <div style={{ marginLeft: '30px' }} >
                            <img width={80} height={80} src={backIcon} onClick={() => this.gotoBack()} />
                        </div>
                    </Col>

                    <Col xs={4}>
                        <div style={{marginLeft:'217px'}}>
                            <img width={64} height={64} src={`${process.env.PUBLIC_URL}/assets/phone-call.png`} onClick={() => this.notify()}/>
                        </div>
                    </Col>
                </Row>
                 
            </div>
        )
    }

}

export default SafetyInstructionAnnahmeKlärschlammascheTerminal;

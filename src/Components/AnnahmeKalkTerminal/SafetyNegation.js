import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EvoLogo from '../../ImageAssests/Logo/evo.png';
import appLogo from '../../ImageAssests/Logo/Logo.png';
import HomeIcon from '../../ImageAssests/ButtonImages/Home.png';
import '../../StyleSheets/HomePage.css';
import localLangData from '../../LanguageAsset/evo_lang.json'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class SafetynegationAnnahmeKalkTerminal extends Component {

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
        this.props.history.push('AnnahmeKalkTerminalHome');
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
                <Container style={{
                overflow: 'hidden',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                KhtmlUserSelect: 'none',
                MozUserSelect: 'nonoe',
                msUserSelect: 'none',
                userSelect: 'none'
            }}>
                    <Row style={{ marginTop: '150px' }}>
                        <div style={{ textAlign: 'center', marginTop:'100px' }}>
                            <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', alignContent: 'justify' }} >{localLangData[localStorage.getItem('lang')].negation}</label>
                        </div>
                    </Row>
                </Container>
                <Row>
                    <Col >
                        <div style={{ marginLeft: '52px', marginTop:'420px' }} >
                        <img width={64} height={64} src={`${process.env.PUBLIC_URL}/assets/phone-call.png`} onClick={() => this.notify()}/>
                        </div>
                    </Col>
                </Row>
                 
            </div>
        )
    }
}

export default SafetynegationAnnahmeKalkTerminal;

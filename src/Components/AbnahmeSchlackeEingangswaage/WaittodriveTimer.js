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


class WaittodriveTimerAbnahmeSchlackeEingangswaage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showHomeIcon: false,
            shownCancelScreen: false,
            timerValue : '5'
        }

    }

    componentDidMount() {
        this.timerComponetValue();
    }

    gotoBack() {
        this.props.history.goBack();
    }


    gotoHome() {
        this.props.history.push('AbnahmeSchlackeEingangswaageHome');
    }

    timerComponetValue(){
        
        var timeIntervalId = setInterval(() => { 
            this.setState({
                timerValue: this.state.timerValue - 1
            })
            if(this.state.timerValue === 0){
                clearInterval(timeIntervalId);
                this.gotoHome();
             }
         }, 1500)
         
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
                        {/* <div style={{ marginLeft: '30px' }} onClick={() => this.gotoHome()}>
                            <img width={80} height={80} src={HomeIcon} />
                        </div> */}
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
                    <Row style={{ marginTop: '40px' }}>
                        <div style={{ marginTop: '80px', marginLeft: 'auto', marginRight: 'auto', width: '603px', textAlign: 'center' }}>
                            <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '20px', marginTop: '14px' }} >{localLangData[localStorage.getItem('lang')].waitToDrivelbl_Abnahme_Schlacke}</label>
                            {/* <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '20px', marginTop: '14px' }} >{localLangData[localStorage.getItem('lang')].waitToDrivelbl3}</label> */}
                            <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '20px', marginTop: '14px' }} >{localLangData[localStorage.getItem('lang')].waitToDrivelbl4}</label>
                        </div>
                        <div style={{ marginTop: '10px', marginLeft: 'auto', marginRight: 'auto', width: '603px', textAlign: 'center' }}>
                            <label style={{ fontSize: '35px', fontWeight: 'bold', color: '#000947', marginLeft: '20px', marginTop: '14px' }} >{this.state.timerValue + " " + 's'}</label>
                        </div>
                    </Row>
                </Container>
                {/* <Row>
                    <Col >
                        <div style={{ marginLeft: '30px' }} >
                            <img width={80} height={80} src={backIcon} onClick={() => this.gotoBack()} />
                        </div>
                    </Col>
                    <Col xs={8}></Col>
                    <Col>
                        <div style={{ marginLeft: '20px' }}>
                            <img width={80} height={80} src={nextIcon} onClick={() => this.gotoNext()} />
                        </div>
                    </Col>

                </Row> */}
            </div>
        )
    }
}

export default WaittodriveTimerAbnahmeSchlackeEingangswaage;

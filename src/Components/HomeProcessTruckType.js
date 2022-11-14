import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EvoLogo from '../ImageAssests/Logo/evo.png';
import appLogo from '../ImageAssests/Logo/Logo.png';
import HomeIcon from '../ImageAssests/ButtonImages/Home.png';
import backIcon from '../ImageAssests/ButtonImages/BackArrow.png';
import nextIcon from '../ImageAssests/ButtonImages/NextArrow.png';
import truckI from '../ImageAssests/Trucks/Truck1.jpg';
import truckII from '../ImageAssests/Trucks/Truck2.jpg';
import truckIII from '../ImageAssests/Trucks/Truck3.jpg';
import truckIV from '../ImageAssests/Trucks/Truck4.jpg';
import truckV from '../ImageAssests/Trucks/Truck5.jpg';
import '../StyleSheets/HomePage.css';
import localLangData from '../LanguageAsset/evo_lang.json';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class TruckTypeHome extends Component {

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
        this.props.history.push('LicensePlate', {
            state: {
                authToken: this.props.location.state.state.authToken,
                auftragData: this.props.location.state.state.auftragData
            }
        });
    }

    gotoHome() {
        this.props.history.push('Home');
    }

    truckImageSelected(e) {
        var tempTruckType = '';
        switch (e) {
            case 'img1':
                tempTruckType= 'type1';
                document.getElementById('img2').style.border = '1px solid gray';
                document.getElementById('img3').style.border = '1px solid gray';
                document.getElementById('img4').style.border = '1px solid gray';
                document.getElementById('img5').style.border = '1px solid gray';
                break;
            case 'img2':
                tempTruckType= 'type2';
                document.getElementById('img1').style.border = '1px solid gray';
                document.getElementById('img3').style.border = '1px solid gray';
                document.getElementById('img4').style.border = '1px solid gray';
                document.getElementById('img5').style.border = '1px solid gray';
                break;
            case 'img3':
                tempTruckType= 'type3';
                document.getElementById('img1').style.border = '1px solid gray';
                document.getElementById('img2').style.border = '1px solid gray';
                document.getElementById('img4').style.border = '1px solid gray';
                document.getElementById('img5').style.border = '1px solid gray';
                break;
            case 'img4':
                tempTruckType= 'type4';
                document.getElementById('img1').style.border = '1px solid gray';
                document.getElementById('img2').style.border = '1px solid gray';
                document.getElementById('img3').style.border = '1px solid gray';
                document.getElementById('img5').style.border = '1px solid gray';
                break;

            case 'img5':
                tempTruckType= 'type5';
                document.getElementById('img1').style.border = '1px solid gray';
                document.getElementById('img2').style.border = '1px solid gray';
                document.getElementById('img3').style.border = '1px solid gray';
                document.getElementById('img4').style.border = '1px solid gray';
                break;

        }
        document.getElementById(e).style.border = '1px solid blue';
        localStorage.setItem('truckType', tempTruckType);
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
                    <Row style={{ marginTop: '80px' }}>
                        <div style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                            <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px' }} >{localLangData[localStorage.getItem('lang')].vehicletype}</label>
                        </div>
                    </Row>
                    <Row>
                        <div style={{
                            border: '1px solid gray',
                            overflow: 'hidden',
                            width: '270px',
                            height: '130px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: '30px',
                            borderRadius: '8px'
                        }} id="img1" onClick={() => this.truckImageSelected('img1')}>
                            <img style={{ marginLeft: '18px', width: '200px', marginTop: '-10px' }} src={truckI} />
                            <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#000947', marginLeft: '38px' }} >{'Müllsammelfahrzeug'}</label>
                        </div>
                        <div style={{
                            border: '1px solid gray',
                            overflow: 'hidden',
                            width: '370px',
                            height: '130px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: '30px',
                            borderRadius: '8px'
                        }} id="img2" onClick={() => this.truckImageSelected('img2')}>
                            <img style={{ marginTop: '0px', width: '200px', marginLeft: '60px', marginTop: '-10px' }} src={truckII} />
                            <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#000947', marginLeft: '78px' }} >{'Mulde mit/ohne Anhänger'}</label>
                        </div>

                        <div style={{
                            border: '1px solid gray',
                            overflow: 'hidden',
                            width: '270px',
                            height: '130px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: '30px',
                            borderRadius: '8px'
                        }} id="img3" onClick={() => this.truckImageSelected('img3')}>
                            <img style={{ width: '200px', marginLeft: '18px', marginTop: '16px' }} src={truckIII} />
                            <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#000947', marginLeft: '78px' }} >{'Walking-Floor'}</label>
                        </div>
                    </Row>
                    <Row>
                        <div style={{
                            border: '1px solid gray',
                            overflow: 'hidden',
                            width: '270px',
                            height: '130px',
                            marginLeft: 'auto',
                            //marginRight: '0px',
                            marginTop: '30px',
                            borderRadius: '8px'
                        }} id="img4" onClick={() => this.truckImageSelected('img4')}>
                            <img style={{ marginLeft: '18px', width: '200px', marginTop: '18px' }} src={truckIV} />
                            <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#000947', marginLeft: '55px', marginTop: '7px' }} >{'Rundmuldenkipper'}</label>
                        </div>

                        <div style={{
                            border: '1px solid gray',
                            overflow: 'hidden',
                            width: '270px',
                            height: '130px',
                            marginLeft: '20px',
                            marginRight: 'auto',
                            marginTop: '30px',
                            borderRadius: '8px'
                        }} id="img5" onClick={() => this.truckImageSelected('img5')}>
                            <img style={{ width: '200px', marginLeft: '18px', marginTop: '16px' }} src={truckV} />
                            <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#000947', marginTop: '11px', textAlign: 'left' }} >{'Abrollcontainer mit/ohne Anhänger'}</label>
                        </div>
                    </Row>
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
                            <img width={80} height={80} src={nextIcon} onClick={() => this.gotoNext()} />
                        </div>
                    </Col>

                </Row>

            </div>
        )
    }
}

export default TruckTypeHome;

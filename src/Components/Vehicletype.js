import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EvoLogo from '../ImageAssests/Logo/evo.png';
import appLogo from '../ImageAssests/Logo/Logo.png';
import HomeIcon from '../ImageAssests/ButtonImages/Home.png';
import backIcon from '../ImageAssests/ButtonImages/BackArrow.png';
import nextIcon from '../ImageAssests/ButtonImages/NextArrow.png';
import '../StyleSheets/HomePage.css';
import localLangData from '../LanguageAsset/evo_lang.json';
import Select from 'react-select'
import '../StyleSheets/Vehicletype.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class Vehicaltype extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showHomeIcon: false,
            shownCancelScreen: false,
            menuIsOpen: true,
            selectedValue: ''
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
        this.props.history.push('Home');
    }

    gotoNext() {
        localStorage.setItem('Wastetype', this.state.selectedValue);
        this.props.history.push('Wastetype', { sectedValueprops: this.state.selectedValue });
    }

    gotoBack() {
        this.props.history.goBack();
    }

    onInputChange = (e, value) => {
        console.log('targe vla', e)
        var tempSelectedValue = value;
        switch (e) {
            case 'img1':
                document.getElementById('img2').style.backgroundColor = '#FFFFFF';
                document.getElementById('img3').style.backgroundColor = '#FFFFFF';
                document.getElementById('img4').style.backgroundColor = '#FFFFFF';
                document.getElementById('img5').style.backgroundColor = '#FFFFFF';
                document.getElementById('img6').style.backgroundColor = '#FFFFFF';
                document.getElementById('img7').style.backgroundColor = '#FFFFFF';
                document.getElementById('img8').style.backgroundColor = '#FFFFFF';
                document.getElementById('img2Lbl').style.color = '#000947';
                document.getElementById('img3Lbl').style.color = '#000947';
                document.getElementById('img4Lbl').style.color = '#000947';
                document.getElementById('img5Lbl').style.color = '#000947';
                document.getElementById('img6Lbl').style.color = '#000947';
                document.getElementById('img7Lbl').style.color = '#000947';
                document.getElementById('img8Lbl').style.color = '#000947';
                break;
            case 'img2':
                document.getElementById('img1').style.backgroundColor = '#FFFFFF';
                document.getElementById('img3').style.backgroundColor = '#FFFFFF';
                document.getElementById('img4').style.backgroundColor = '#FFFFFF';
                document.getElementById('img5').style.backgroundColor = '#FFFFFF';
                document.getElementById('img6').style.backgroundColor = '#FFFFFF';
                document.getElementById('img7').style.backgroundColor = '#FFFFFF';
                document.getElementById('img8').style.backgroundColor = '#FFFFFF';
                document.getElementById('img1Lbl').style.color = '#000947';
                document.getElementById('img3Lbl').style.color = '#000947';
                document.getElementById('img4Lbl').style.color = '#000947';
                document.getElementById('img5Lbl').style.color = '#000947';
                document.getElementById('img6Lbl').style.color = '#000947';
                document.getElementById('img7Lbl').style.color = '#000947';
                document.getElementById('img8Lbl').style.color = '#000947';
                break;
            case 'img3':
                document.getElementById('img1').style.backgroundColor = '#FFFFFF';
                document.getElementById('img2').style.backgroundColor = '#FFFFFF';
                document.getElementById('img4').style.backgroundColor = '#FFFFFF';
                document.getElementById('img5').style.backgroundColor = '#FFFFFF';
                document.getElementById('img6').style.backgroundColor = '#FFFFFF';
                document.getElementById('img7').style.backgroundColor = '#FFFFFF';
                document.getElementById('img8').style.backgroundColor = '#FFFFFF';
                document.getElementById('img1Lbl').style.color = '#000947';
                document.getElementById('img2Lbl').style.color = '#000947';
                document.getElementById('img4Lbl').style.color = '#000947';
                document.getElementById('img5Lbl').style.color = '#000947';
                document.getElementById('img6Lbl').style.color = '#000947';
                document.getElementById('img7Lbl').style.color = '#000947';
                document.getElementById('img8Lbl').style.color = '#000947';
                break;
            case 'img4':
                document.getElementById('img1').style.backgroundColor = '#FFFFFF';
                document.getElementById('img2').style.backgroundColor = '#FFFFFF';
                document.getElementById('img3').style.backgroundColor = '#FFFFFF';
                document.getElementById('img5').style.backgroundColor = '#FFFFFF';
                document.getElementById('img6').style.backgroundColor = '#FFFFFF';
                document.getElementById('img7').style.backgroundColor = '#FFFFFF';
                document.getElementById('img8').style.backgroundColor = '#FFFFFF';
                document.getElementById('img1Lbl').style.color = '#000947';
                document.getElementById('img2Lbl').style.color = '#000947';
                document.getElementById('img3Lbl').style.color = '#000947';
                document.getElementById('img5Lbl').style.color = '#000947';
                document.getElementById('img6Lbl').style.color = '#000947';
                document.getElementById('img7Lbl').style.color = '#000947';
                document.getElementById('img8Lbl').style.color = '#000947';
                break;

            case 'img5':
                document.getElementById('img1').style.backgroundColor = '#FFFFFF';
                document.getElementById('img2').style.backgroundColor = '#FFFFFF';
                document.getElementById('img3').style.backgroundColor = '#FFFFFF';
                document.getElementById('img4').style.backgroundColor = '#FFFFFF';
                document.getElementById('img6').style.backgroundColor = '#FFFFFF';
                document.getElementById('img7').style.backgroundColor = '#FFFFFF';
                document.getElementById('img8').style.backgroundColor = '#FFFFFF';
                document.getElementById('img1Lbl').style.color = '#000947';
                document.getElementById('img2Lbl').style.color = '#000947';
                document.getElementById('img3Lbl').style.color = '#000947';
                document.getElementById('img4Lbl').style.color = '#000947';
                document.getElementById('img6Lbl').style.color = '#000947';
                document.getElementById('img7Lbl').style.color = '#000947';
                document.getElementById('img8Lbl').style.color = '#000947';
                break;

            case 'img6':
                document.getElementById('img1').style.backgroundColor = '#FFFFFF';
                document.getElementById('img2').style.backgroundColor = '#FFFFFF';
                document.getElementById('img3').style.backgroundColor = '#FFFFFF';
                document.getElementById('img4').style.backgroundColor = '#FFFFFF';
                document.getElementById('img5').style.backgroundColor = '#FFFFFF';
                document.getElementById('img7').style.backgroundColor = '#FFFFFF';
                document.getElementById('img8').style.backgroundColor = '#FFFFFF';
                document.getElementById('img1Lbl').style.color = '#000947';
                document.getElementById('img2Lbl').style.color = '#000947';
                document.getElementById('img3Lbl').style.color = '#000947';
                document.getElementById('img4Lbl').style.color = '#000947';
                document.getElementById('img5Lbl').style.color = '#000947';
                document.getElementById('img7Lbl').style.color = '#000947';
                document.getElementById('img8Lbl').style.color = '#000947';
                break;

            case 'img7':
                document.getElementById('img1').style.backgroundColor = '#FFFFFF';
                document.getElementById('img2').style.backgroundColor = '#FFFFFF';
                document.getElementById('img3').style.backgroundColor = '#FFFFFF';
                document.getElementById('img4').style.backgroundColor = '#FFFFFF';
                document.getElementById('img5').style.backgroundColor = '#FFFFFF';
                document.getElementById('img6').style.backgroundColor = '#FFFFFF';
                document.getElementById('img8').style.backgroundColor = '#FFFFFF';
                document.getElementById('img1Lbl').style.color = '#000947';
                document.getElementById('img2Lbl').style.color = '#000947';
                document.getElementById('img3Lbl').style.color = '#000947';
                document.getElementById('img4Lbl').style.color = '#000947';
                document.getElementById('img5Lbl').style.color = '#000947';
                document.getElementById('img6Lbl').style.color = '#000947';
                document.getElementById('img8Lbl').style.color = '#000947';
                break;

            case 'img8':
                document.getElementById('img1').style.backgroundColor = '#FFFFFF';
                document.getElementById('img2').style.backgroundColor = '#FFFFFF';
                document.getElementById('img3').style.backgroundColor = '#FFFFFF';
                document.getElementById('img4').style.backgroundColor = '#FFFFFF';
                document.getElementById('img5').style.backgroundColor = '#FFFFFF';
                document.getElementById('img6').style.backgroundColor = '#FFFFFF';
                document.getElementById('img7').style.backgroundColor = '#FFFFFF';
                document.getElementById('img1Lbl').style.color = '#000947';
                document.getElementById('img2Lbl').style.color = '#000947';
                document.getElementById('img3Lbl').style.color = '#000947';
                document.getElementById('img4Lbl').style.color = '#000947';
                document.getElementById('img5Lbl').style.color = '#000947';
                document.getElementById('img6Lbl').style.color = '#000947';
                document.getElementById('img7Lbl').style.color = '#000947';
                break;

        }
        document.getElementById(e).style.backgroundColor = '#000947';
        document.getElementById(e + 'Lbl').style.color = '#FFFFFF';

        this.setState({
            selectedValue: tempSelectedValue
        })

    };

    openMenu = () => {
        this.refs.focus();
        //this.setState({ menuIsOpen: true });
    };

    render() {
        var tempval1 = 'StartProzess';
        var tempval2 = 'Annahme Abfall';
        var tempval3 = 'Annahme Ammoniakwasser';
        var tempval4 = 'Annahme Flugasche';
        var tempval5 = 'Annahme Kalk';
        var tempval6 = 'Annahme Klarschlamm';
        var tempval7 = 'Annahme Nabi';
        var tempval8 = 'Abnahme Schlacke';

        const options = [
            { value: tempval1, label: tempval1 },
            { value: tempval2, label: tempval2 },
            { value: tempval3, label: tempval3 },
            { value: tempval4, label: tempval4 },
            { value: tempval5, label: tempval5 },
        ]

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
                            textAlign: 'center',
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

                <Container style={{ height: '435px' }}>
                    <Row style={{ marginTop: '0px' }}>
                        <div style={{ textAlign: 'center', marginTop: '0px' }}>
                            <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', width: '80%', flexWrap: 'wrap' }} >{localLangData[localStorage.getItem('lang')].processvalue}</label>
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
                        }} id="img1" onClick={() => this.onInputChange('img1', tempval1)}>
                            <label id="img1Lbl" style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '45px', marginTop: '45px', flexWrap: 'wrap', textAlign: 'center' }} >{tempval1}</label>
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
                        }} id="img2" onClick={() => this.onInputChange('img2', tempval2)}>
                            <label id="img2Lbl" style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '25px', marginTop: '45px', flexWrap: 'wrap', textAlign: 'center' }} >{tempval2}</label>
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
                        }} id="img3" onClick={() => this.onInputChange('img3', tempval3)}>
                            <label id="img3Lbl" style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '0px', marginTop: '24px', flexWrap: 'wrap', textAlign: 'center' }} >{tempval3}</label>
                        </div>
                    </Row>
                    <Row style={{ marginTop: '0px' }}>
                        <div style={{
                            border: '1px solid gray',
                            overflow: 'hidden',
                            width: '270px',
                            height: '130px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: '30px',
                            borderRadius: '8px'
                        }} id="img4" onClick={() => this.onInputChange('img4', tempval4)}>
                            <label id="img4Lbl" style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '0px', marginTop: '45px', flexWrap: 'wrap', textAlign: 'center' }} >{tempval4}</label>
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
                        }} id="img5" onClick={() => this.onInputChange('img5', tempval5)}>
                            <label id="img5Lbl" style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '32px', marginTop: '45px', flexWrap: 'wrap', textAlign: 'center' }} >{tempval5}</label>
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
                        }} id="img6" onClick={() => this.onInputChange('img6', tempval6)}>
                            <label id="img6Lbl" style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '5px', marginTop: '25px', flexWrap: 'wrap', textAlign: 'center' }} >{tempval6}</label>
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
                        }} id="img7" onClick={() => this.onInputChange('img7', tempval7)}>
                            <label id="img7Lbl" style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '32px', marginTop: '45px', flexWrap: 'wrap', textAlign: 'center' }} >{tempval7}</label>
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
                        }} id="img8" onClick={() => this.onInputChange('img8', tempval8)}>
                            <label id="img8Lbl" style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '10px', marginTop: '45px', flexWrap: 'wrap', textAlign: 'center' }} >{tempval8}</label>
                        </div>
                    </Row>
                </Container>
                <Row style={{ marginTop: '105px' }}>
                    <Col xs={4}>
                        <div style={{ marginLeft: '30px' }} >
                            <img width={80} height={80} src={backIcon} onClick={() => this.gotoBack()} />
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div style={{ marginLeft: '145px' }}>
                            <img width={64} height={64} src={`${process.env.PUBLIC_URL}/assets/phone-call.png`} onClick={() => this.notify()}/>
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

export default Vehicaltype;

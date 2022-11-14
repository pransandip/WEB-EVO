import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import EvoLogo from '../ImageAssests/Logo/evo.png';
import appLogo from '../ImageAssests/Logo/Logo.png';
import HomeIcon from '../ImageAssests/ButtonImages/Home.png';
import Col from 'react-bootstrap/Col';
import safetyIcons from '../ImageAssests/ButtonImages/Screenshot.png';
import twentyzone from '../ImageAssests/ButtonImages/20zone.png';
import nozone from '../ImageAssests/ButtonImages/nozone.png';
import tricross from '../ImageAssests/ButtonImages/tri_cross.png';
import cancelIcon from '../ImageAssests/ButtonImages/cancel.png';
import checkedIcon from '../ImageAssests/ButtonImages/checked.png';
import backIcon from '../ImageAssests/ButtonImages/BackArrow.png';
import '../StyleSheets/HomePage.css';
import localLangData from '../LanguageAsset/evo_lang.json'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Gallery from "react-photo-gallery";

const IMAGES1 =
    [
        {
            src: `${process.env.PUBLIC_URL}/assets/DE.png`,
            width: 1,
            height: 1
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/GB.png`,
            width: 1,
            height: 1
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/FR.png`,
            width: 1,
            height: 1
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/Netherlands.png`,
            width: 1,
            height: 1
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/RO.png`,
            width: 1,
            height: 1
        },
    ]

const IMAGES2 = [

    {
        src: `${process.env.PUBLIC_URL}/assets/TR.png`,
        width: 1,
        height: 1
    },

    {
        src: `${process.env.PUBLIC_URL}/assets/Bulgaria.png`,
        width: 1,
        height: 1
    },

    {
        src: `${process.env.PUBLIC_URL}/assets/Russia.png`,
        width: 1,
        height: 1

    },

    {
        src: `${process.env.PUBLIC_URL}/assets/Serbia.png`,
        width: 1,
        height: 1

    },

    {
        src: `${process.env.PUBLIC_URL}/assets/Poland.png`,
        width: 1,
        height: 1
    },


]


const IMAGES3 = [
    {
        src: `${process.env.PUBLIC_URL}/assets/Czech_Republic.png`,
        width: 1,
        height: 1
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/Hungary.png`,
        width: 1,
        height: 1

    },

    {
        src: `${process.env.PUBLIC_URL}/assets/Croatia.png`,
        width: 1,
        height: 1

    },
]



class AnnahmeAbfallEingangswaageHome extends Component {

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

    imageClicked(params) {
        var tempurl = window.location.href;
        tempurl = tempurl.split('/')

        this.props.history.push('WaittodriveAnnahmeAbfallEingangswaage', {
            comingFrom: tempurl[tempurl.length - 1]
        });


    }

    gotoHome() {
        this.setState({
            showHomeIcon: false,
            shownCancelScreen: false
        })
    }

    cancelButtonMethod() {
        this.setState({
            shownCancelScreen: true
        })
    }

    checkedButtonMethod() {
        this.props.history.push('License');
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
                        <div style={{ marginLeft: '30px' }} >
                            <img width={64} height={64} src={`${process.env.PUBLIC_URL}/assets/phone-call.png`} onClick={() => this.notify()}/>
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
                <Container >
                    <Row style={{ marginTop: '20px', alignItems: 'center', marginLeft: '45px' }}>
                        {IMAGES1.map((value) => {
                            return (
                                <div style={{
                                    width: '150px',
                                    height: '150px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    marginLeft: '10px',
                                    marginTop: '10px',
                                }}>
                                    <img style={{
                                        width: '150px', height: '150px', border: '1px solid black',
                                        borderRadius: '4px',
                                    }} src={value.src} onClick={(e) => this.imageClicked(e)} />
                                </div>

                            )
                        })}
                    </Row>
                    <Row style={{ marginTop: '0px', alignItems: 'center', marginLeft: '45px' }}>
                        {IMAGES2.map((value) => {
                            return (
                                <div style={{
                                    width: '150px',
                                    height: '150px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    marginLeft: '10px',
                                    marginTop: '10px'
                                }}>
                                    <img style={{
                                        width: '150px', height: '150px', border: '1px solid black',
                                        borderRadius: '4px',
                                    }} src={value.src} onClick={(e) => this.imageClicked(e)} />
                                </div>

                            )
                        })}
                    </Row>
                    <Row style={{ marginTop: '0px', alignItems: 'center', marginLeft: '205px' }}>
                        {IMAGES3.map((value) => {
                            return (
                                <div style={{
                                    width: '150px',
                                    height: '150px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    marginLeft: '10px',
                                    marginTop: '10px'
                                }}>
                                    <img style={{
                                        width: '150px', height: '150px', border: '1px solid black',
                                        borderRadius: '4px',
                                    }} src={value.src} onClick={(e) => this.imageClicked(e)} />
                                </div>

                            )
                        })}
                    </Row>
                </Container>
                 
            </div>

        )
    }
}

export default AnnahmeAbfallEingangswaageHome;
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import EvoLogo from '../ImageAssests/Logo/evo.png';
import appLogo from '../ImageAssests/Logo/Logo.png';
import HomeIcon from '../ImageAssests/ButtonImages/Home.png';
import safetyIcons from '../ImageAssests/ButtonImages/Screenshot.png';
import twentyzone from '../ImageAssests/ButtonImages/20zone.png';
import nozone from '../ImageAssests/ButtonImages/nozone.png';
import tricross from '../ImageAssests/ButtonImages/tri_cross.png';
import cancelIcon from '../ImageAssests/ButtonImages/cancel.png';
import checkedIcon from '../ImageAssests/ButtonImages/checked.png';
import backIcon from '../ImageAssests/ButtonImages/BackArrow.png';
import '../StyleSheets/HomePage.css';
import environment from '../Environment/Environment';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import localLangData from '../LanguageAsset/evo_lang.json'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Gallery from "react-photo-gallery";

const IMAGES1 =
    [
        {
            src: `${process.env.PUBLIC_URL}/assets/DE.png`,
            width: 1,
            height: 1,
            language: 'de'
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/GB.png`,
            width: 1,
            height: 1,
            language: 'en'
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



class AnnahmeKlarschlammHome extends Component {

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
        var tempAuthData = {
            username: environment.adminusername,
            password: environment.adminpassword
        }
        this.props.get_auth_code(tempAuthData);
    }

    imageClicked(params) {
        var tempurl = window.location.href;
        tempurl = tempurl.split('/')
        localStorage.setItem('auth_token', this.props.user_auth_token.data.token);
        if (tempurl[tempurl.length - 1] === 'AnnahmeKlarschlammHome') {
            this.props.history.push('BarcodeScanKlarschlamm', {
                comingFrom: tempurl[tempurl.length - 1],
                state: { authToken: this.props.user_auth_token.data.token }
            });
        } else {
            this.props.history.push('Barcodescan', {
                comingFrom: tempurl[tempurl.length - 1]
            });
        }

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
            <Container style={{
                overflow: 'hidden',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                KhtmlUserSelect: 'none',
                MozUserSelect: 'nonoe',
                msUserSelect: 'none',
                userSelect: 'none'
            }}>
                <Row style={{ marginTop: '10px' }}>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div>
                            <img width={64} height={64} src={`${process.env.PUBLIC_URL}/assets/phone-call.png`} onClick={() => this.notify()} />
                        </div>
                        <div style={{
                            width: '250px',
                            marginLeft: '255px',
                            marginRight: 'auto',
                            textAlign: 'center'
                        }}>
                            <img width={150} height={70} src={EvoLogo} />
                            <label style={{ fontSize: '10px', fontWeight: 'bold' }} >{localLangData.de.logo_under_line}</label>

                        </div>
                        <div>
                            <img width={150} height={70} src={appLogo} />
                        </div>
                    </div>

                </Row>
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
                                }} src={value.src} onClick={(e) => this.imageClicked(e, value.language)} />
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

        )
    }
}

const mapStateToProps = (state) => ({
    user_auth_token: state.HomeProcessReducers.user_auth_token,
});

const mapDispatchToProps = (dispatch) => ({
    get_auth_code: (authData) => dispatch(actions.getAuthTokenRequest(authData))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnahmeKlarschlammHome);;

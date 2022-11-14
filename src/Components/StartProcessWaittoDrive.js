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
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import environment from '../Environment/Environment';
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import localLangData from '../LanguageAsset/evo_lang.json';
import { ToastContainer, toast } from 'react-toastify';
import Alert from 'react-popup-alert'

import 'react-toastify/dist/ReactToastify.css';
var tempintervalid = '';
class StartProcessWaittoDrive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showHomeIcon: false,
            shownCancelScreen: false,
            alert: {
                type: 'success',
                text: '',
                show: false
            }
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

    onCloseAlert() {
        this.setState({
            alert: {
                type: '',
                text: '',
                show: false
            }
        })
    }

    onShowAlert(data) {
        this.setState({
            alert: {
                type: 'success',
                text: 'Demo alert',
                show: true
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.order_detail_data) {
            localStorage.setItem('yard_ticket', nextProps.order_detail_data.data.yard_ticket);
            localStorage.setItem('yard_pdf', nextProps.order_detail_data.data.pdf);
            tempintervalid = setInterval(() => { this.props.history.push('StartProcessTimer') }, 3000)
        }
      }

    componentDidMount() {
        if (tempintervalid) {
            clearInterval(tempintervalid);
        }
        // tempintervalid = setInterval(() => { this.props.history.push('StartProcessTimer') }, 3000)

        this.props.save_order_details(this.props.location.state.oderDetailsData);
    }

    componentWillUnmount() {
        clearInterval(tempintervalid);
    }

    gotoBack() {
        this.props.history.goBack();
    }

    gotoNext() {
        this.props.history.push('StartProcessTimer');
    }

    gotoHome() {
        this.props.history.goBack();
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
                        <div style={{ marginLeft: '30px' }} >
                            <img width={64} height={64} src={`${process.env.PUBLIC_URL}/assets/phone-call.png`} onClick={() => this.notify()} />
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
                    {this.props.isOrderDetailDataLoading ?
                        <div style={{ marginTop: '30px' }}>
                            <ClockLoader color={'#000947'} loading={true} css={override} size={50} id='loaderone' />
                            <label style={{ fontSize: '40px', fontWeight: 'bold', color: '#000947', marginLeft: '280px', marginTop: '25px' }} >{localLangData[localStorage.getItem('lang')].saving_data + '...'}</label>
                        </div> :
                        <div>
                            <Row style={{ marginTop: '100px' }}>
                                <div style={{ marginTop: '130px', marginLeft: 'auto', marginRight: 'auto', width: '603px', textAlign: 'center' }}>
                                    <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '20px', marginTop: '14px' }} >{localLangData[localStorage.getItem('lang')].waittodrivelbl1}</label>
                                </div>
                            </Row>
                           
                        </div>}
                        <Alert
                                header={'Success!!'}
                                btnText={'Ok'}
                                text={alert.text}
                                type={alert.type}
                                show={false}
                                onClosePress={() => this.onCloseAlert()}
                                pressCloseOnOutsideClick={true}
                                showBorderBottom={true}
                                alertStyles={{}}
                                headerStyles={{}}
                                textStyles={{}}
                                buttonStyles={{}}
                            />
                </Container>
                <Row>
                    <Col >
                        {/* <div style={{ marginLeft: '30px' }} >
                            <img width={80} height={80} src={backIcon} onClick={() => this.gotoBack()} />
                        </div> */}
                    </Col>
                    <Col xs={8}></Col>
                    <Col>
                        {/* <div style={{ marginLeft: '20px' }}>
                            <img width={80} height={80} src={nextIcon} onClick={() => this.gotoNext()} />
                        </div> */}
                    </Col>

                </Row>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isOrderDetailDataLoading: state.HomeProcessReducers.isOrderDetailDataLoading,
    order_detail_data: state.HomeProcessReducers.order_detail_data
});

const mapDispatchToProps = (dispatch) => ({
    save_order_details: (orderDetailData) => dispatch(actions.saveOrderDetailDataRequest(orderDetailData))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartProcessWaittoDrive);
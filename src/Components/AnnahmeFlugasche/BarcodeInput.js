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
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import imageReader from '../../ImageAssests/ButtonImages/reader.jpeg';
import localLangData from '../../LanguageAsset/evo_lang.json';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class BarcodeInputAnnahmeFlugasche extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showHomeIcon: false,
      shownCancelScreen: false,
      barcodeInputValue: '',
      alert: {
        type: 'error',
        text: '',
        show: false
      }
    }

  }

  notify = () => toast.info(localLangData[localStorage.getItem('lang')].call_operator_text, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    var tempComingFrom = this.props.location.state.comingFrom;
    if (nextProps.first_weight_data && nextProps.first_weight_data.data.length > 0) {
      console.log('values of data is here', nextProps.first_weight_data)
      this.props.history.push('SignatureLableAnnahmeFlugasche', {
        state: {
          authToken: this.props.location.state.state.authToken,
          first_weight_data: nextProps.first_weight_data.data,
          comingFrom: tempComingFrom
        }
      });
    } else {
      if(!nextProps.isFirstWeightDataLoading)
      this.setState({
        alert: {
          type: 'error',
          text: 'Yard ticket is not valid',
          show: true
        }
      })
    }
  }

  gotoHome() {
    this.props.history.push('AnnahmeFlugascheHome')
  }

  gotoBack() {
    this.props.history.goBack();
  }

  gotoNext() {
    if (this.state.barcodeInputValue === '') {
      document.getElementById('barcodeinput').style.border = '1px solid red'
    } else {
      this.props.get_firstweight_data(this.state.barcodeInputValue, this.props.location.state.state.authToken);
      //this.props.history.push('SignatureLableAnnahmeFlugasche')
    }
  }

  keyboardTapInputMethod(e) {
    var tempBarcodeValue = this.state.barcodeInputValue;
    if (e === '<-') {
      tempBarcodeValue = tempBarcodeValue.slice(0, -1)
    } else if (e === 'SPACE') {
      tempBarcodeValue = tempBarcodeValue + ' ';

    } else {
      tempBarcodeValue = tempBarcodeValue + e;
    }
    document.getElementById('barcodeinput').style.border = '1px solid #000947'
    this.setState({
      barcodeInputValue: tempBarcodeValue
    })

    this.setState({
      alert: {
        type: '',
        text: '',
        show: false
      }
    })
  }


  render() {
    const keyOneLine = ['1', '2', '3', '-'];
    const keyTwoLine = ['4', '5', '6', '<-'];
    const keyThreeLine = ['7', '8', '9', '0'];
    // const keyFourLine = ['Y', 'X', 'C', 'V', 'B', 'N', 'M', 'Ü', '.', 'SPACE'];
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
                width: '250px',
                marginLeft: 'auto',
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
          <Row style={{ marginTop: '20px' }}>
            <Col xs={1}></Col>
            <Col xs={8}>
              {this.state.alert.show ? <label style={{ fontSize: '25px', fontWeight: 'bold', color: 'red', marginLeft: '220px' }} >{'Yard ticket is not valid. Please check and re-write again.'}</label> :
                <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '20px' }} >{localLangData[localStorage.getItem('lang')].enterbarcode_label1}</label>}
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <label style={{ fontSize: '20px', fontWeight: 'bold', color: '#000947', marginLeft: '20px', marginTop: '14px' }} >{localLangData[localStorage.getItem('lang')].enterbarcode_barcode}</label>
                <input autoFocus id='barcodeinput' style={{ textAlign: 'center', marginLeft: '10px', width: '85%', height: '60px', border: '1px solid #000947', fontSize: '40px' }} value={this.state.barcodeInputValue} />
              </div>
            </Col>
            <Col>
            </Col>
            <Col>
              <img width={150} height={150} style={{ border: '5px solid black' }} src={imageReader} />
            </Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            {/* <Col xs={5}>
            <label style={{ fontSize: '14px', fontWeight: 'regular', color: '#000947', marginLeft: '20px' }} >{localLangData[localStorage.getItem('lang')].enterbarcode_barcode}</label>
          </Col> */}
            <Col></Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            {keyOneLine.map((value, index) => {
              return (
                <Col style={{ marginLeft: index > 0 ? '-300px' : '245px' }} onClick={(e) => this.keyboardTapInputMethod(value)}>
                  <div style={{
                    border: '1px solid black',
                    borderRadius: '4px',
                    width: '80px',
                    height: '80px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '50px',
                    color: '#000947',
                  }}>{value}</div>
                </Col>
              )
            })}
          </Row>
          <Row style={{ marginTop: '10px' }}>
            {keyTwoLine.map((value, index) => {
              return (
                <Col style={{ marginLeft: index > 0 ? '-300px' : '245px' }} onClick={(e) => this.keyboardTapInputMethod(value)}>
                  <div style={{
                    border: '1px solid black',
                    borderRadius: '4px',
                    width: '80px',
                    height: '80px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    fontSize: '50px',
                    alignItems: 'center',
                    color: '#000947',
                  }}>{value}</div>
                </Col>
              )
            })}
          </Row>
          <Row style={{ marginTop: '10px' }}>
            {keyThreeLine.map((value, index) => {
              return (
                <Col style={{ marginLeft: index > 0 ? '-300px' : '245px' }} onClick={(e) => this.keyboardTapInputMethod(value)}>
                  <div style={{
                    border: '1px solid black',
                    borderRadius: '4px',
                    width: '80px',
                    height: '80px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    fontSize: '50px',
                    alignItems: 'center',
                    color: '#000947',
                  }}>{value}</div>
                </Col>
              )
            })}
          </Row>
          {/* <Row style={{ marginTop: '10px' }}>
            {keyFourLine.map((value, index) => {
              return (
                <Col style={{ marginLeft: index > 0 ? '-20px' : '0' }} onClick={(e) => this.keyboardTapInputMethod(value)}>
                  <div style={{
                    border: '1px solid black',
                    borderRadius: '4px',
                    width: '80px',
                    minWidth: value === 'SPACE' ? '160px' : 0,
                    height: '80px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#000947',
                  }}>{value}</div>
                </Col>
              )
            })}
          </Row> */}
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

const mapStateToProps = (state) => ({
  auftrag_data: state.HomeProcessReducers.auftrag_data,
  isAuftragDataLoading: state.HomeProcessReducers.isAuftragDataLoading,
  first_weight_data: state.HomeProcessReducers.first_weight_data,
  isFirstWeightDataLoading: state.HomeProcessReducers.isFirstWeightDataLoading
});

const mapDispatchToProps = (dispatch) => ({
  get_Auftrag_data: (auftrag) => dispatch(actions.getAuftragDataRequest(auftrag)),
  get_firstweight_data: (yardTicket, auth_token) => dispatch(actions.getFirstWeightDataRequest(yardTicket, auth_token))
});

export default connect(mapStateToProps, mapDispatchToProps)( BarcodeInputAnnahmeFlugasche);

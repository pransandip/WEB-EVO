import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from './Containers/Home';
import License from './Components/License';
import BarcodeScan from './Components/BarcodeScan';
import BarcodeInput from './Components/BarcodeInput'
import BarcodeScanKlarschlamm from './Components/AnnahmeKlarschlamm/BarcodeScan';
import BarcodeInputKlarschlamm from './Components/AnnahmeKlarschlamm/BarcodeInput'
import NameInputComponent from './Components/Namecomponent';
import SafetyInstruction from './Components/SafetyInstruction';
import LicensePlate from './Components/LicensePlate';
import Safetynegation from './Components/SafetyNegation';
import Vehicaltype from './Components/Vehicletype';
import Wastetype from './Components/Wastetype';
import VehicalImages from './Components/VehicalImages';
import AnnahmeAbfallAcceptanceHome from './Containers/Annahme-abfall-acceptance-waste-Home';
import AnnahmeKlarschlammHome from './Containers/AnnahmeKlarschlammHome';
import TruckType from './Components/AnnahmeAbfallAcceptance/TruckType';
import SignatureLable from './Components/SignatureLabel';
import OverLayout from './Components/OverLayout';
import ThanksLayout from './Components/ThanksLayout';
import FirstWeighing from './Components/FirstWeighing';
import StartProcessWaittoDrive from './Components/StartProcessWaittoDrive';
import StartProcessTimer from './Components/StartProcessTimer';
import TruckTypeHome from './Components/HomeProcessTruckType';

/*  All Homes links page */
import AllHomeLinks from './Containers/AllHomeLinks';

/* Process 2.1 */
import AnnahmeAbfallEingangswaageHome from './Containers/AnnahmeAbfallEingangswaageHome'
import WaittodriveAnnahmeAbfallEingangswaage from './Components/AnnahmeAbfallEingangswaage/Waittodrive';
import WaittodriveTimerAnnahmeAbfallEingangswaage from './Components/AnnahmeAbfallEingangswaage/WaittodriveTimer';


/* Process 3 */
import OverLayoutKlarschlamm from './Components/AnnahmeKlarschlamm/OverLayout';
import SignatureLableKlarschlamm from './Components/AnnahmeKlarschlamm/SignatureLabel';
import ThanksLayoutKlarschlamm from './Components/AnnahmeKlarschlamm/ThanksLayout';

/* Process 3.1 */
import AnnahmeKlärschlammEingangswaageHome from './Containers/AnnahmeKlärschlammEingangswaageHome'
import WaittodriveAnnahmeKlärschlammEingangswaage from './Components/AnnahmeKlärschlammEingangswaage/Waittodrive';
import WaittodriveTimerAnnahmeKlärschlammEingangswaage from './Components/AnnahmeKlärschlammEingangswaage/WaittodriveTimer';


/* Process 4 */
import AnnahmeklarschlammascheHome from './Containers/Annahme-klarschlammascheHome';
import BarcodeScanklarschlammasche from './Components/Annahmeklarschlammasche/BarcodeScan';
import BarcodeInputklarschlammasche from './Components/Annahmeklarschlammasche/BarcodeInput';
import SignatureLableklarschlammasche from './Components/Annahmeklarschlammasche/SignatureLabel';
import OverLayoutklarschlammasche from './Components/Annahmeklarschlammasche/OverLayout';
import ThanksLayoutklarschlammasche from './Components/Annahmeklarschlammasche/ThanksLayout';

/* Process 4.1 */
import AnnahmeKlärschlammascheEingangswaageHome from './Containers/AnnahmeKlärschlammascheEingangswaageHome'
import WaittodriveAnnahmeKlärschlammascheEingangswaage from './Components/AnnahmeKlärschlammascheEingangswaage/Waittodrive';
import WaittodriveTimerAnnahmeKlärschlammascheEingangswaage from './Components/AnnahmeKlärschlammascheEingangswaage/WaittodriveTimer';

/* Process 4 Terminal */
import AnnahmeKlärschlammascheTerminalHome from './Containers/AnnahmeKlärschlammascheTerminalHome'
import BarcodeInputAnnahmeKlärschlammascheTerminal from './Components/AnnahmeKlärschlammascheTerminal/BarcodeInput';
import BarcodeScanAnnahmeKlärschlammascheTerminal from './Components/AnnahmeKlärschlammascheTerminal/BarcodeScan';
import SafetyInstructionAnnahmeKlärschlammascheTerminal from './Components/AnnahmeKlärschlammascheTerminal/SafetyInstruction';
import SafetynegationAnnahmeKlärschlammascheTerminal from './Components/AnnahmeKlärschlammascheTerminal/SafetyNegation';
import PointInstructionAnnahmeKlärschlammascheTerminal from './Components/AnnahmeKlärschlammascheTerminal/PointInstruction';
import SignatureLableAnnahmeKlärschlammascheTerminal from './Components/AnnahmeKlärschlammascheTerminal/SignatureLabel';
import ThanksLayoutAnnahmeKlärschlammascheTerminal from './Components/AnnahmeKlärschlammascheTerminal/ThanksLayout';


/* Process 5 */
import AbnahmeSchlackeAcceptanceHome from './Containers/AbnahmeSchlackeAcceptanceHome';
import BarcodeScanSchlackeAcceptance from './Components/AbnahmeSchlackeAcceptance/BarcodeScan';
import BarcodeInputSchlackeAcceptance from './Components/AbnahmeSchlackeAcceptance/BarcodeInput';
import SignatureLableSchlackeAcceptance from './Components/AbnahmeSchlackeAcceptance/SignatureLabel';
import OverLayoutSchlackeAcceptance from './Components/AbnahmeSchlackeAcceptance/OverLayout';
import ThanksLayoutSchlackeAcceptance from './Components/AbnahmeSchlackeAcceptance/ThanksLayout';

/* Process 5.1 */
import AbnahmeSchlackeEingangswaageHome from './Containers/AbnahmeSchlackeEingangswaageHome'
import WaittodriveAbnahmeSchlackeEingangswaage from './Components/AbnahmeSchlackeEingangswaage/Waittodrive';
import WaittodriveTimerAbnahmeSchlackeEingangswaage from './Components/AbnahmeSchlackeEingangswaage/WaittodriveTimer';

/* Process 6 */
import AnnahmeAmmoniakwasserHome from './Containers/AnnahmeAmmoniakwasserHome';
import BarcodeScanAnnahmeAmmoniakwasser from './Components/AnnahmeAmmoniakwasser/BarcodeScan';
import BarcodeInputAnnahmeAmmoniakwasser from './Components/AnnahmeAmmoniakwasser/BarcodeInput';
import SignatureLableAnnahmeAmmoniakwasser from './Components/AnnahmeAmmoniakwasser/SignatureLabel';
import OverLayoutAnnahmeAmmoniakwasser from './Components/AnnahmeAmmoniakwasser/OverLayout';
import ThanksLayoutAnnahmeAmmoniakwasser from './Components/AnnahmeAmmoniakwasser/ThanksLayout';

/* Process 6.1 */
import AnnahmeAmmoniakwasserEingangswaageHome from './Containers/AnnahmeAmmoniakwasserEingangswaageHome'
import WaittodriveAnnahmeAmmoniakwasserEingangswaage from './Components/AnnahmeAmmoniakwasserEingangswaage/Waittodrive';
import WaittodriveTimerAnnahmeAmmoniakwasserEingangswaage from './Components/AnnahmeAmmoniakwasserEingangswaage/WaittodriveTimer';

/* Process 7 */
import AnnahmeFlugascheHome from './Containers/AnnahmeFlugascheHome';
import BarcodeScanAnnahmeFlugasche from './Components/AnnahmeFlugasche/BarcodeScan';
import BarcodeInputAnnahmeFlugasche from './Components/AnnahmeFlugasche/BarcodeInput';
import SignatureLableAnnahmeFlugasche from './Components/AnnahmeFlugasche/SignatureLabel';
import OverLayoutAnnahmeFlugasche from './Components/AnnahmeFlugasche/OverLayout';
import ThanksLayoutAnnahmeFlugasche from './Components/AnnahmeFlugasche/ThanksLayout';

/* Process 7.1 */
import AnnahmeFlugascheEingangswaageHome from './Containers/AnnahmeFlugascheEingangswaageHome'
import WaittodriveAnnahmeFlugascheEingangswaage from './Components/AnnahmeFlugascheEingangswaage/Waittodrive';
import WaittodriveTimerAnnahmeFlugascheEingangswaage from './Components/AnnahmeFlugascheEingangswaage/WaittodriveTimer';

/* Process 7 Terminal */
import AnnahmeFlugascheTerminalHome from './Containers/AnnahmeFlugascheTerminalHome'
import BarcodeInputAnnahmeFlugascheTerminal from './Components/AnnahmeFlugascheTerminal/BarcodeInput';
import BarcodeScanAnnahmeFlugascheTerminal from './Components/AnnahmeFlugascheTerminal/BarcodeScan';
import SafetyInstructionAnnahmeFlugascheTerminal from './Components/AnnahmeFlugascheTerminal/SafetyInstruction';
import SafetynegationAnnahmeFlugascheTerminal from './Components/AnnahmeFlugascheTerminal/SafetyNegation';
import PointInstructionAnnahmeFlugascheTerminal from './Components/AnnahmeFlugascheTerminal/PointInstruction';
import SignatureLableAnnahmeFlugascheTerminal from './Components/AnnahmeFlugascheTerminal/SignatureLabel';
import ThanksLayoutAnnahmeFlugascheTerminal from './Components/AnnahmeFlugascheTerminal/ThanksLayout';

/* Process 8 */
import AnnahmeKalkHome from './Containers/AnnahmeKalkHome';
import BarcodeScanAnnahmeKalk from './Components/AnnahmeKalk/BarcodeScan';
import BarcodeInputAnnahmeKalk from './Components/AnnahmeKalk/BarcodeInput';
import SignatureLableAnnahmeKalk from './Components/AnnahmeKalk/SignatureLabel';
import OverLayoutAnnahmeKalk from './Components/AnnahmeKalk/OverLayout';
import ThanksLayoutAnnahmeKalk from './Components/AnnahmeKalk/ThanksLayout';

/* Process 8.1 */
import AnnahmeKalkEingangswaageHome from './Containers/AnnahmeKalkEingangswaageHome'
import WaittodriveAnnahmeKalkEingangswaage from './Components/AnnahmeKalkEingangswaage/Waittodrive';
import WaittodriveTimerAnnahmeKalkEingangswaage from './Components/AnnahmeKalkEingangswaage/WaittodriveTimer';

/* Process 8 Terminal */
import AnnahmeKalkTerminalHome from './Containers/AnnahmeKalkTerminalHome'
import BarcodeScanAnnahmeKalkTerminal from './Components/AnnahmeKalkTerminal/BarcodeScan';
import SafetyInstructionAnnahmeKalkTerminal from './Components/AnnahmeKalkTerminal/SafetyInstruction';
import PointInstructionAnnahmeKalkTerminal from './Components/AnnahmeKalkTerminal/PointInstruction';
import SignatureLableAnnahmeKalkTerminal from './Components/AnnahmeKalkTerminal/SignatureLabel';
import ThanksLayoutAnnahmeKalkTerminal from './Components/AnnahmeKalkTerminal/ThanksLayout';
import BarcodeInputAnnahmeKalkTerminal from './Components/AnnahmeKalkTerminal/BarcodeInput';
import SafetynegationAnnahmeKalkTerminal from './Components/AnnahmeKalkTerminal/SafetyNegation';

/* Process 9 */
import AnnahmeNabiHome from './Containers/AnnahmeNabiHome';
import BarcodeScanAnnahmeNabi from './Components/AnnahmeNabi/BarcodeScan';
import BarcodeInputAnnahmeNabi from './Components/AnnahmeNabi/BarcodeInput';
import SignatureLableAnnahmeNabi from './Components/AnnahmeNabi/SignatureLabel';
import OverLayoutAnnahmeNabi from './Components/AnnahmeNabi/OverLayout';
import ThanksLayoutAnnahmeNabi from './Components/AnnahmeNabi/ThanksLayout';

/* Process 9.1 */
import AnnahmeNabiEingangswaagehome from './Containers/AnnahmeNabiEingangswaageHome'
import Waittodrive from './Components/AnnahmeNabiEingangswaage/Waittodrive';
import WaittodriveTimer from './Components/AnnahmeNabiEingangswaage/WaittodriveTimer';

/* Process 9 Terminal */
import AnnahmeNabiTerminalHome from './Containers/AnnahmeNabiTerminalHome'
import BarcodeScanAnnahmeNabiTerminal from './Components/AnnahmeNabiTerminal/BarcodeScan';
import SafetyInstructionAnnahmeNabiTerminal from './Components/AnnahmeNabiTerminal/SafetyInstruction';
import PointInstructionAnnahmeNabiTerminal from './Components/AnnahmeNabiTerminal/PointInstruction';
import SignatureLableAnnahmeNabiTerminal from './Components/AnnahmeNabiTerminal/SignatureLabel';
import ThanksLayoutAnnahmeNabiTerminal from './Components/AnnahmeNabiTerminal/ThanksLayout';
import BarcodeInputAnnahmeNabiTerminal from './Components/AnnahmeNabiTerminal/BarcodeInput';
import SafetynegationAnnahmeNabiTerminal from './Components/AnnahmeNabiTerminal/SafetyNegation';

/* Dashboard */
import Dashboardhome from './Containers/DashboardHome';


import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (<Router>
    <ToastContainer />
    <Switch>
      <Route exact path='/' component={AllHomeLinks} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/DashboardHome" component={Dashboardhome} />


      <Route exact path="/License" component={License} />
      <Route exact path="/Barcodescan" component={BarcodeScan} />
      <Route exact path="/Barcodeinput" component={BarcodeInput} />
      <Route exact path="/TruckTypeHome" component={TruckTypeHome} />
      <Route exact path="/Nameinput" component={NameInputComponent} />
      <Route exact path="/SafetyInstruction" component={SafetyInstruction} />
      <Route exact path="/LicensePlate" component={LicensePlate} />
      <Route exact path="/Safetynegation" component={Safetynegation} />
      <Route exact path="/Vehicaltype" component={Vehicaltype} />
      <Route exact path="/VehicalImages" component={VehicalImages} />
      <Route exact path="/Wastetype" component={Wastetype} />
      <Route exact path="/TruckType" component={TruckType} />
      <Route exact path="/SignatureLable" component={SignatureLable} />
      <Route exact path="/OverLayout" component={OverLayout} />
      <Route exact path="/ThanksLayout" component={ThanksLayout} />
      <Route exact path="/FirstWeighing" component={FirstWeighing} />
      <Route exact path="/StartProcessWaittoDrive" component={StartProcessWaittoDrive} />
      <Route exact path="/StartProcessTimer" component={StartProcessTimer} />

      {/* Process 2 */}
      <Route exact path="/AnnahmeAbfallAcceptanceHome" component={AnnahmeAbfallAcceptanceHome} />

      {/* Process 2.1 */}
      <Route exact path="/AnnahmeAbfallEingangswaageHome" component={AnnahmeAbfallEingangswaageHome} />
      <Route exact path="/WaittodriveAnnahmeAbfallEingangswaage" component={WaittodriveAnnahmeAbfallEingangswaage} />
      <Route exact path="/WaittodriveTimerAnnahmeAbfallEingangswaage" component={WaittodriveTimerAnnahmeAbfallEingangswaage} />

      {/* Process 3 */}
      <Route exact path="/AnnahmeKlarschlammHome" component={AnnahmeKlarschlammHome} />
      <Route exact path="/BarcodeScanKlarschlamm" component={BarcodeScanKlarschlamm} />
      <Route exact path="/BarcodeInputKlarschlamm" component={BarcodeInputKlarschlamm} />
      <Route exact path="/OverLayoutKlarschlamm" component={OverLayoutKlarschlamm} />
      <Route exact path="/SignatureLableKlarschlamm" component={SignatureLableKlarschlamm} />
      <Route exact path="/ThanksLayoutKlarschlamm" component={ThanksLayoutKlarschlamm} />

      {/* Process 3.1 */}
      <Route exact path="/AnnahmeKlärschlammEingangswaageHome" component={AnnahmeKlärschlammEingangswaageHome} />
      <Route exact path="/WaittodriveAnnahmeKlärschlammEingangswaage" component={WaittodriveAnnahmeKlärschlammEingangswaage} />
      <Route exact path="/WaittodriveTimerAnnahmeKlärschlammEingangswaage" component={WaittodriveTimerAnnahmeKlärschlammEingangswaage} />

      {/* Process 4 */}
      <Route exact path="/AnnahmeklarschlammascheHome" component={AnnahmeklarschlammascheHome} />
      <Route exact path="/BarcodeScanklarschlammasche" component={BarcodeScanklarschlammasche} />
      <Route exact path="/BarcodeInputklarschlammasche" component={BarcodeInputklarschlammasche} />
      <Route exact path="/SignatureLableklarschlammasche" component={SignatureLableklarschlammasche} />
      <Route exact path="/OverLayoutklarschlammasche" component={OverLayoutklarschlammasche} />
      <Route exact path="/ThanksLayoutklarschlammasche" component={ThanksLayoutklarschlammasche} />

      {/* Process 4.1 */}
      <Route exact path="/AnnahmeKlärschlammascheEingangswaageHome" component={AnnahmeKlärschlammascheEingangswaageHome} />
      <Route exact path="/WaittodriveAnnahmeKlärschlammascheEingangswaage" component={WaittodriveAnnahmeKlärschlammascheEingangswaage} />
      <Route exact path="/WaittodriveTimerAnnahmeKlärschlammascheEingangswaage" component={WaittodriveTimerAnnahmeKlärschlammascheEingangswaage} />

      {/* Process 4 Terminal */}
      <Route exact path="/AnnahmeKlärschlammascheTerminalHome" component={AnnahmeKlärschlammascheTerminalHome} />
      <Route exact path="/BarcodeInputAnnahmeKlärschlammascheTerminal" component={BarcodeInputAnnahmeKlärschlammascheTerminal} />
      <Route exact path="/BarcodeScanAnnahmeKlärschlammascheTerminal" component={BarcodeScanAnnahmeKlärschlammascheTerminal} />
      <Route exact path="/SafetyInstructionAnnahmeKlärschlammascheTerminal" component={SafetyInstructionAnnahmeKlärschlammascheTerminal} />
      <Route exact path="/SafetynegationAnnahmeKlärschlammascheTerminal" component={SafetynegationAnnahmeKlärschlammascheTerminal} />
      <Route exact path="/PointInstructionAnnahmeKlärschlammascheTerminal" component={PointInstructionAnnahmeKlärschlammascheTerminal} />
      <Route exact path="/SignatureLableAnnahmeKlärschlammascheTerminal" component={SignatureLableAnnahmeKlärschlammascheTerminal} />
      <Route exact path="/ThanksLayoutAnnahmeKlärschlammascheTerminal" component={ThanksLayoutAnnahmeKlärschlammascheTerminal} />

      {/* Process 5 */}
      <Route exact path="/AbnahmeSchlackeAcceptanceHome" component={AbnahmeSchlackeAcceptanceHome} />
      <Route exact path="/BarcodeInputSchlackeAcceptance" component={BarcodeInputSchlackeAcceptance} />
      <Route exact path="/BarcodeScanSchlackeAcceptance" component={BarcodeScanSchlackeAcceptance} />
      <Route exact path="/OverLayoutSchlackeAcceptance" component={OverLayoutSchlackeAcceptance} />
      <Route exact path="/SignatureLableSchlackeAcceptance" component={SignatureLableSchlackeAcceptance} />
      <Route exact path="/ThanksLayoutSchlackeAcceptance" component={ThanksLayoutSchlackeAcceptance} />

      {/* Process 5.1 */}
      <Route exact path="/AbnahmeSchlackeEingangswaageHome" component={AbnahmeSchlackeEingangswaageHome} />
      <Route exact path="/WaittodriveAbnahmeSchlackeEingangswaage" component={WaittodriveAbnahmeSchlackeEingangswaage} />
      <Route exact path="/WaittodriveTimerAbnahmeSchlackeEingangswaage" component={WaittodriveTimerAbnahmeSchlackeEingangswaage} />

      {/* Process 6 */}
      <Route exact path="/AnnahmeAmmoniakwasserHome" component={AnnahmeAmmoniakwasserHome} />
      <Route exact path="/BarcodeInputAnnahmeAmmoniakwasser" component={BarcodeInputAnnahmeAmmoniakwasser} />
      <Route exact path="/BarcodeScanAnnahmeAmmoniakwasser" component={BarcodeScanAnnahmeAmmoniakwasser} />
      <Route exact path="/OverLayoutAnnahmeAmmoniakwasser" component={OverLayoutAnnahmeAmmoniakwasser} />
      <Route exact path="/SignatureLableAnnahmeAmmoniakwasser" component={SignatureLableAnnahmeAmmoniakwasser} />
      <Route exact path="/ThanksLayoutAnnahmeAmmoniakwasser" component={ThanksLayoutAnnahmeAmmoniakwasser} />

      {/* Process 6.1 */}
      <Route exact path="/AnnahmeAmmoniakwasserEingangswaageHome" component={AnnahmeAmmoniakwasserEingangswaageHome} />
      <Route exact path="/WaittodriveAnnahmeAmmoniakwasserEingangswaage" component={WaittodriveAnnahmeAmmoniakwasserEingangswaage} />
      <Route exact path="/WaittodriveTimerAnnahmeAmmoniakwasserEingangswaage" component={WaittodriveTimerAnnahmeAmmoniakwasserEingangswaage} />

      {/* Process 7 */}
      <Route exact path="/AnnahmeFlugascheHome" component={AnnahmeFlugascheHome} />
      <Route exact path="/BarcodeInputAnnahmeFlugasche" component={BarcodeInputAnnahmeFlugasche} />
      <Route exact path="/BarcodeScanAnnahmeFlugasche" component={BarcodeScanAnnahmeFlugasche} />
      <Route exact path="/OverLayoutAnnahmeFlugasche" component={OverLayoutAnnahmeFlugasche} />
      <Route exact path="/SignatureLableAnnahmeFlugasche" component={SignatureLableAnnahmeFlugasche} />
      <Route exact path="/ThanksLayoutAnnahmeFlugasche" component={ThanksLayoutAnnahmeFlugasche} />

      {/* Process 7.1 */}
      <Route exact path="/AnnahmeFlugascheEingangswaageHome" component={AnnahmeFlugascheEingangswaageHome} />
      <Route exact path="/WaittodriveAnnahmeFlugascheEingangswaage" component={WaittodriveAnnahmeFlugascheEingangswaage} />
      <Route exact path="/WaittodriveTimerAnnahmeFlugascheEingangswaage" component={WaittodriveTimerAnnahmeFlugascheEingangswaage} />

      {/* Process 7 Terminal */}
      <Route exact path="/AnnahmeFlugascheTerminalHome" component={AnnahmeFlugascheTerminalHome} />
      <Route exact path="/BarcodeInputAnnahmeFlugascheTerminal" component={BarcodeInputAnnahmeFlugascheTerminal} />
      <Route exact path="/BarcodeScanAnnahmeFlugascheTerminal" component={BarcodeScanAnnahmeFlugascheTerminal} />
      <Route exact path="/SafetyInstructionAnnahmeFlugascheTerminal" component={SafetyInstructionAnnahmeFlugascheTerminal} />
      <Route exact path="/SafetynegationAnnahmeFlugascheTerminal" component={SafetynegationAnnahmeFlugascheTerminal} />
      <Route exact path="/PointInstructionAnnahmeFlugascheTerminal" component={PointInstructionAnnahmeFlugascheTerminal} />
      <Route exact path="/SignatureLableAnnahmeFlugascheTerminal" component={SignatureLableAnnahmeFlugascheTerminal} />
      <Route exact path="/ThanksLayoutAnnahmeFlugascheTerminal" component={ThanksLayoutAnnahmeFlugascheTerminal} />

      {/* Process 8 */}
      <Route exact path="/AnnahmeKalkHome" component={AnnahmeKalkHome} />
      <Route exact path="/BarcodeInputAnnahmeKalk" component={BarcodeInputAnnahmeKalk} />
      <Route exact path="/BarcodeScanAnnahmeKalk" component={BarcodeScanAnnahmeKalk} />
      <Route exact path="/OverLayoutAnnahmeKalk" component={OverLayoutAnnahmeKalk} />
      <Route exact path="/SignatureLableAnnahmeKalk" component={SignatureLableAnnahmeKalk} />
      <Route exact path="/ThanksLayoutAnnahmeKalk" component={ThanksLayoutAnnahmeKalk} />

      {/* Process 8.1 */}
      <Route exact path="/AnnahmeKalkEingangswaageHome" component={AnnahmeKalkEingangswaageHome} />
      <Route exact path="/WaittodriveAnnahmeKalkEingangswaage" component={WaittodriveAnnahmeKalkEingangswaage} />
      <Route exact path="/WaittodriveTimerAnnahmeKalkEingangswaage" component={WaittodriveTimerAnnahmeKalkEingangswaage} />

      {/* Process 8 Terminal */}
      <Route exact path="/AnnahmeKalkTerminalHome" component={AnnahmeKalkTerminalHome} />
      <Route exact path="/BarcodeInputAnnahmeKalkTerminal" component={BarcodeInputAnnahmeKalkTerminal} />
      <Route exact path="/BarcodeScanAnnahmeKalkTerminal" component={BarcodeScanAnnahmeKalkTerminal} />
      <Route exact path="/SafetyInstructionAnnahmeKalkTerminal" component={SafetyInstructionAnnahmeKalkTerminal} />
      <Route exact path="/SafetynegationAnnahmeKalkTerminal" component={SafetynegationAnnahmeKalkTerminal} />
      <Route exact path="/PointInstructionAnnahmeKalkTerminal" component={PointInstructionAnnahmeKalkTerminal} />
      <Route exact path="/SignatureLableAnnahmeKalkTerminal" component={SignatureLableAnnahmeKalkTerminal} />
      <Route exact path="/ThanksLayoutAnnahmeKalkTerminal" component={ThanksLayoutAnnahmeKalkTerminal} />

      {/* Process 9 */}
      <Route exact path="/AnnahmeNabiHome" component={AnnahmeNabiHome} />
      <Route exact path="/BarcodeInputAnnahmeNabi" component={BarcodeInputAnnahmeNabi} />
      <Route exact path="/BarcodeScanAnnahmeNabi" component={BarcodeScanAnnahmeNabi} />
      <Route exact path="/OverLayoutAnnahmeNabi" component={OverLayoutAnnahmeNabi} />
      <Route exact path="/SignatureLableAnnahmeNabi" component={SignatureLableAnnahmeNabi} />
      <Route exact path="/ThanksLayoutAnnahmeNabi" component={ThanksLayoutAnnahmeNabi} />

      {/* Process 9.1 */}
      <Route exact path="/AnnahmeNabiEingangswaagehome" component={AnnahmeNabiEingangswaagehome} />
      <Route exact path="/Waittodrive" component={Waittodrive} />
      <Route exact path="/WaittodriveTimer" component={WaittodriveTimer} />

      {/* Process 9 Terminal */}
      <Route exact path="/AnnahmeNabiTerminalHome" component={AnnahmeNabiTerminalHome} />
      <Route exact path="/BarcodeInputAnnahmeNabiTerminal" component={BarcodeInputAnnahmeNabiTerminal} />
      <Route exact path="/BarcodeScanAnnahmeNabiTerminal" component={BarcodeScanAnnahmeNabiTerminal} />
      <Route exact path="/SafetyInstructionAnnahmeNabiTerminal" component={SafetyInstructionAnnahmeNabiTerminal} />
      <Route exact path="/SafetynegationAnnahmeNabiTerminal" component={SafetynegationAnnahmeNabiTerminal} />
      <Route exact path="/PointInstructionAnnahmeNabiTerminal" component={PointInstructionAnnahmeNabiTerminal} />
      <Route exact path="/SignatureLableAnnahmeNabiTerminal" component={SignatureLableAnnahmeNabiTerminal} />
      <Route exact path="/ThanksLayoutAnnahmeNabiTerminal" component={ThanksLayoutAnnahmeNabiTerminal} />


    </Switch>
  </Router>
  );
}

export default App;

import { take, takeEvery } from 'redux-saga/effects';
import { actionTypes } from '../Constants/Constants';

import {
    fetchUserAuthTokenSaga,
    fetchAuftragSaga,
    saveOrderDetailSaga,
    fetchFirstWeightDataSaga,
    saveSecondOrderDetailSaga,
    getAllOrderDetailSaga
} from './HomeProcessSaga';


/*---------------------------------------------------------------------
                             HomeProcess Saga
 -----------------------------------------------------------------------*/
 export function* watchHomeProcessServices() {
    yield takeEvery(actionTypes.GET_AUTH_TOKEN_REQUEST, fetchUserAuthTokenSaga);
    yield takeEvery(actionTypes.GET_AUFTRAG_DATA_REQUEST, fetchAuftragSaga);
    yield takeEvery(actionTypes.SAVE_ORDER_DETAIL_DATA_REQUEST, saveOrderDetailSaga);
    yield takeEvery(actionTypes.GET_FIRST_WEIGHT_DATA_REQUEST, fetchFirstWeightDataSaga);
    yield takeEvery(actionTypes.SAVE_SECOND_ORDER_DETAIL_DATA_REQUEST, saveSecondOrderDetailSaga);
    yield takeEvery(actionTypes.GET_ALL_ORDER_DETAIL_DATA_REQUEST,getAllOrderDetailSaga);
}
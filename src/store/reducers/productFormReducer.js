import { 
    SET_FIELD, 
    PRODUCT_SAVED_SUCCESS, 
    SET_WHOLE_PRODUCT,
    RESET_FORM, 
} from '../actions';

const INITIAL_STATE = {
    id: null,
    product: '',
    quantity: '',
    unit: '',
    registeredBy: '',
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FIELD:
            const newState = { ...state };
            newState[action.field] = action.value;
            return newState;
        case SET_WHOLE_PRODUCT:
            return action.product;
        case RESET_FORM:
        case PRODUCT_SAVED_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}
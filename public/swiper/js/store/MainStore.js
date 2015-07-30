/**
 * Created by germini on 7/28/15.
 */

var EventEmitter = require('events').EventEmitter;
var Constants = require('../ActionConstants');
var assign = require('object-assign');
var AppDispatcher = require('../AppDispatcher')
var CHANGE_EVENT = 'change';


var _popUpStatus = {
    show: false,
    popUpType: ''
};

var _hongBaoStatus = {
    opened: false,
    amount: 0.00
}

var _addressSendStatus = Constants.ADDRESS_NOT_SEND
var _disableBackGroundClick = false;


var PopUpStore = assign({}, EventEmitter.prototype, {

    setPopUpStatus: function (pop, type) {
        if (pop) {
            if (type == Constants.POPUP_TYPE_NO_TIMES) {
                _disableBackGroundClick = false
            }
        } else {
            _disableBackGroundClick = true;
        }
        _popUpStatus.show = pop;
        _popUpStatus.popUpType = type;
    },

    setHongBao: function (result, open) {
        if (result && result.prizeType == NormalConstants.PRIZE_TYPE_HONG_BAO_1) {
            var am = parseInt(result.data.amount) / 100
            _hongBaoStatus = {
                opened: open,
                amount: am
            }
        } else {
            _hongBaoStatus.opened = open;
        }
    },

    hongBaoStatus: function () {
        return _hongBaoStatus;
    },

    status: function () {
        return _popUpStatus;
    },

    addressSendStatus: function () {
        return _addressSendStatus;
    },

    disableBackGroundClick: function () {
        return _disableBackGroundClick;
    },

    // event related
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

// Register callback to handle all updates
PopUpStore.dispatchToken = AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case Constants.SHOW_POPUP_WINDOW:
            PopUpStore.setPopUpStatus(true, action.popUpType);
            break;

        case Constants.HIDE_POPUP_WINDOW:
            PopUpStore.setPopUpStatus(false, '');
            break;

        case Constants.LOTTERY_RESULT:
            PopUpStore.setHongBao(action.result, false);
            break;

        case Constants.CAI_HONG_BAO:
            PopUpStore.setHongBao(null, true);
            break;

        case Constants.ADDRESS_SEND_ERROR:
        case Constants.ADDRESS_SENDING:
        case Constants.ADDRESS_SENT:
            _addressSendStatus = action.actionType;
            break;

        default:
            break;
    }

    PopUpStore.emitChange()
});

module.exports = PopUpStore;
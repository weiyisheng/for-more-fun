/**
 * Created by germini on 7/29/15.
 */
/**
 * Created by germini on 7/16/15.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var AppDispatcher = require('../actionCenter/AppDispatcher');
var ActionConstant = require('../constants/ActionConstant');

var MainStores = assign({}, EventEmitter.prototype, {


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

MainStores.dispatchToken = AppDispatcher.register(function (action) {
    console.log('before drop')
    switch (action.actionType) {

        case ActionConstant.DROP_CLICK:
            console.log('drop');
            break;

        default:
            break;
    }

    MainStores.emitChange()
});

module.exports = MainStores;
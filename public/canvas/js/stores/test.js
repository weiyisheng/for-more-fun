/**
 * Created by germini on 7/30/15.
 */
/**
 * Created by germini on 7/16/15.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../actionCenter/AppDispatcher')
var CHANGE_EVENT = 'change';

var PopUpStore = assign({}, EventEmitter.prototype, {

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

        default:
            console.log('Yeeeeeeeeeh>>>')
            break;
    }

    PopUpStore.emitChange()
});

module.exports = PopUpStore;
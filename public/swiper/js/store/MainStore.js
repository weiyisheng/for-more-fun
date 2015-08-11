/**
 * Created by germini on 7/28/15.
 */

var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');
var AppDispatcher = require('../actionCenter/Dispatcher')
var CHANGE_EVENT = 'change';

var _showingUserName = Constants.men[0][0];

var MainStore = assign({}, EventEmitter.prototype, {

    getShowingUser: function () {
        return _showingUserName;
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
MainStore.dispatchToken = AppDispatcher.register(function (action) {
    switch (action.actionType) {

        case Constants.keymirror.SHOW_USER_NAME:
            _showingUserName = action.userName;
            break;

        default:
            break;
    }

    MainStore.emitChange()
});

module.exports = MainStore;
/**
 * Created by germini on 7/29/15.
 */
var AppDispatcher = require('./AppDispatcher');
var Constant = require('../constants/ActionConstant');

module.exports = {

    userAction: function (action) {
        switch (action.actionType) {

            default:
                AppDispatcher.dispatch(action);
                break;
        }
    }
};



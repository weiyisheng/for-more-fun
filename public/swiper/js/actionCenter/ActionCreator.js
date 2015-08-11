/**
 * Created by germini on 8/11/15.
 */
var Dispatcher = require('./Dispatcher');

var ActionCreator = {

    userAction: function (action) {
        switch (action.type) {

            default:
                Dispatcher.dispatch(action);
                break;
        }
    }
};

module.exports = ActionCreator;


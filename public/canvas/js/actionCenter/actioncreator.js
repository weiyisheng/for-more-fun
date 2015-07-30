/**
 * Created by germini on 7/29/15.
 */
var AppDispatcher = require('./AppDispatcher');

module.exports = {

    userAction: function (action) {
        console.log('userAction')
        AppDispatcher.dispatch(action);
    }
};



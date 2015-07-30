/**
 * Created by germini on 7/29/15.
 */
var Dispatcher = require('flux').Dispatcher
var assign = require('object-assign')

var AppDispatcher = assign(new Dispatcher(), {});

module.exports = AppDispatcher
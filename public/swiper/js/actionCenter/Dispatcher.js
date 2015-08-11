/**
 * Created by germini on 8/11/15.
 */
var FluxDispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var Dispatcher = assign(new FluxDispatcher(),{});

module.exports = Dispatcher;
/**
 * Created by germini on 8/4/15.
 */
var React = require('react');
var Velocity = require('velocity-animate');
var ToolUtils = require('../utils/ToolUtils');

var PopupWindow = React.createClass({

    componentDidMount: function () {
        var ele = React.findDOMNode(this);
        Velocity(ele,
            {top: 0},
            {
                duration: 500,
                easing: 'easingout'
            })
    },


    render: function () {
        var s = {
            backgroundColor: ToolUtils.colorRandom(),
            height: '100px',
            width: '300px'
        }

        return (
            <div className='absolute top-100' style={s}>

            </div>
        )
    }
});

module.exports = PopupWindow
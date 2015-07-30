/**
 * Created by germini on 7/28/15.
 */
var React = require('react');
var ToolUtils = require('../utils/ToolUtils');
var Hammer = require('hammerjs');
var ActionCreator = require('../actionCenter/ActionCreator');
var ActionConstant = require('../constants/ActionConstant')


var Drop = React.createClass({

    componentDidMount: function () {
        var ele = React.findDOMNode(this);
        var hammer = new Hammer(ele, {});
        hammer.on('tap', function () {
            ActionCreator.userAction({
                actionType: ActionConstant.DROP_CLICK
            })
        })
    },

    render: function () {
        var dW = this.props.parentW / 3;
        var dS = {
            width: dW,
            height: dW,
            backgroundColor: ToolUtils.colorRandom()
        };

        return (
            <div className='left' style={dS}>

            </div>
        )
    }
});

var Puzzle = React.createClass({
    render: function () {
        var w = document.body.clientWidth;
        var h = document.body.clientHeight;


        var cW = w * .8 > h ? (h - 6) : ( w * .8 - 6);
        var top = (h - cW - 6) / 2;
        var left = (w - cW - 6) / 2;

        var cS = {
            top: top,
            left: left,
            width: cW,
            height: cW,
            border: '3px solid #000000'
        };

        return (
            <div className='absolute' style={cS}>
                <Drop parentW={cW}/>
                <Drop parentW={cW}/>
                <Drop parentW={cW}/>
                <Drop parentW={cW}/>
                <Drop parentW={cW}/>
                <Drop parentW={cW}/>
                <Drop parentW={cW}/>
                <Drop parentW={cW}/>
            </div>
        )
    }
});

module.exports = Puzzle;


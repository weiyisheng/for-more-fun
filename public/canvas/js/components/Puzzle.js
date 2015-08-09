/**
 * Created by germini on 7/28/15.
 */
var React = require('react');
var Velocity = require('velocity-animate');
var Hammer = require('hammerjs');

var ToolUtils = require('../utils/ToolUtils');
var DropUtils = require('../utils/DropUtils');
var ActionCreator = require('../actionCenter/ActionCreator');
var Constant = require('../constants/ActionConstant');
var MainStore = require('../stores/MainStores');


var Drop = React.createClass({

    getInitialState: function () {
        return {
            dropsStatus: MainStore.dropsStatus()
        }
    },

    componentDidMount: function () {

        MainStore.addChangeListener(this._onChange);

        var ele = React.findDOMNode(this);
        var hammer = new Hammer(ele, {});
        hammer.on('tap', function () {
            ActionCreator.userAction({
                actionType: Constant.DROP_CLICK,
                dropId: ele.id
            })
        })
    },

    shouldComponentUpdate: function (p, s) {
        var ele = React.findDOMNode(this);

        return s.dropsStatus.moveDrop == ele.id;
    },

    componentDidUpdate: function () {

        var ele = React.findDOMNode(this);

        if (this.state.dropsStatus.moveDrop == ele.id) {
            var moveLength = {
                x: 0,
                y: 0
            };

            var l = parseFloat(ele.style.width);
            var tranY = DropUtils.getTranslate(ele).y;
            var tranX = DropUtils.getTranslate(ele).x;

            console.log('client width = ' + document.body.clientWidth)
            console.log('client width / 3 = ' + document.body.clientWidth / 3)

            console.log('offset width = ' + document.body.offsetWidth)

            console.log('tranX = ' + tranX);
            console.log('tranY = ' + tranY);

            switch (this.state.dropsStatus.moveDirection) {
                case Constant.UP:
                    moveLength.y = tranY - l;
                    moveLength.x = tranX;
                    break;

                case Constant.DOWN:
                    moveLength.y = tranY + l;
                    moveLength.x = tranX;
                    break;

                case Constant.LEFT:
                    moveLength.x = tranX - l;
                    moveLength.y = tranY;
                    break;

                case Constant.RIGHT:
                    moveLength.x = tranX + l;
                    moveLength.y = tranY;
                    break;

                default :
                    break;

            }

            var changeToId = this.state.dropsStatus.dropIdChangeTo

            console.log('moveLength.x = ' + moveLength.x)
            console.log('moveLength.y = ' + moveLength.y)

            Velocity({
                e: ele,
                p: {
                    translateX: moveLength.x,
                    translateY: moveLength.y
                },
                o: {
                    complete: function () {
                        ele.id = changeToId;
                    }
                }
            })

        }

    },

    _onChange: function () {
        this.setState({
            dropsStatus: MainStore.dropsStatus()
        })
    },


    move: function () {
        var id = React.findDOMNode(this).id
        ActionCreator.userAction({
            actionType: Constant.DROP_CLICK,
            dropId: id
        })
    },

    isf: {
        isFirst: true,
        firstColor: null
    },

    render: function () {
        var dW = this.props.parentW / 3;
        var dS;
        if (this.isf.isFirst) {
            var c = ToolUtils.colorRandom();
            dS = {
                width: dW,
                height: dW,
                backgroundColor: c
            };
            this.isf.isFirst = false;
            this.isf.firstColor = c;

        } else {
            dS = {
                width: dW,
                height: dW,
                backgroundColor: this.isf.firstColor
            };
        }


        return (
            <div className='left' style={dS} id={this.props.id}>

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
                <Drop parentW={cW} id='1'/>
                <Drop parentW={cW} id='2'/>
                <Drop parentW={cW} id='3'/>
                <Drop parentW={cW} id='4'/>
                <Drop parentW={cW} id='5'/>
                <Drop parentW={cW} id='6'/>
                <Drop parentW={cW} id='7'/>
                <Drop parentW={cW} id='8'/>
            </div>
        )
    }
});

module.exports = Puzzle;


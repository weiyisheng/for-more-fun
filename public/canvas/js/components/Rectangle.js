/**
 * Created by germini on 7/27/15.
 */
var React = require('react');
var Hammer = require('hammerjs');
var Velocity = require('velocity-animate');

function calculateXY(last, current) {
    return {
        x: current.x - last.x,
        y: current.y - last.y,
        duration: current.timeStamp - last.timeStamp
    }
}

var AngleCore = React.createClass({
    componentDidMount: function () {
        var ele = React.findDOMNode(this);
        var hammerTime = new Hammer(ele, {});
        hammerTime.get('pan').set({direction: Hammer.DIRECTION_ALL});

        var lastPosition = {x: null, y: null, timeStamp: null};

        hammerTime.on('pan', function (e) {
            if (lastPosition.x && lastPosition.y) {
                var velo;
                if (e.isFinal) {
                     Velocity({
                     e: ele,
                     p: {
                     translateX: 0,
                     translateY: 0
                     },
                     o: {
                     duration: 200,
                     easing: 'easeInSine'
                     }
                     })

                    lastPosition.x = null;
                    lastPosition.y = null;
                    lastPosition.timeStamp = null;
                } else {
                    velo = calculateXY(lastPosition, {
                        x: e.changedPointers[0].clientX,
                        y: e.changedPointers[0].clientY,
                        duration: e.timeStamp
                    })
                    Velocity({
                        e: ele,
                        p: {
                            translateX: velo.x,
                            translateY: velo.y
                        },
                        o: {
                            duration: velo.duration,
                            easing: 'linear'
                        }
                    })
                }

            } else {
                lastPosition.x = e.changedPointers[0].clientX;
                lastPosition.y = e.changedPointers[0].clientY;
                lastPosition.timeStamp = e.timeStamp;
            }

        })
    },


    render: function () {
        var winW = document.body.clientWidth;
        var winH = document.body.clientHeight;
        var mL = winW * .5 - 50;
        var mT = winH * .5 - 50;
        var s = {
            width: '100px',
            height: '100px',
            left: mL,
            top: mT,
            backgroundColor: this.props.backGround
        };

        return (
            <div className='absolute' style={s} id='dragable'></div>
        )
    }
});

var Rectangle = React.createClass({
    render: function () {
        return (
            <div >
                <AngleCore backGround='#000000'/>
                <AngleCore backGround='#390083'/>
                <AngleCore backGround='#d98720'/>
            </div>
        )
    }
});

module.exports = Rectangle;


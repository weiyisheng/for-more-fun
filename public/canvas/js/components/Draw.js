/**
 * Created by germini on 8/5/15.
 */
var React = require('react');

var Draw = React.createClass({

    componentDidMount: function () {
        var t = this;

        window.onresize = function () {
            console.log('window resize event')

            t.setState({})
        }
    },

    render: function () {

        var w = document.body.offsetWidth;
        var h = document.body.offsetHeight;

        var cW = w * .5
        var cH = h * .7

        var cS = {
            left: w * .25,
            top: h * .15,
            backgroundColor: '#0a0a0a'
        }

        return (
            <canvas width={cW} height={cH} className='absolute' style={cS}/>
        )
    }
});

module.exports = Draw;
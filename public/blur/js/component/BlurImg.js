/**
 * Created by germini on 7/30/15.
 */
var React = require('react');
var Blur = require('react-blur');

var CoreImg = React.createClass({

    render: function () {
        var parentH = this.props.parentH;
        var parentW = document.body.clientWidth;
        var iW = parentW * .2;
        var iL = parentW * .4;
        var iT = parentH - iW / 2;
        var iS = {
            width: iW,
            height: iW,
            borderRadius: '50%',
            border: '1px solid #ffffff',
            left: iL,
            top: iT
        }

        return (
            <img className='absolute' src='/res/blur/Jay01.jpg' style={iS}/>
        )
    }
});

var BlurImg = React.createClass({

    render: function () {
        var h = document.body.clientHeight;

        var cH = h * .2;
        var cS = {
            height: cH
        }
        return (
            <Blur img='/res/blur/Jay01.jpg' blurRadius={8}
                  className='relative full-width' style={cS}>
                <CoreImg parentH={cH}/>
            </Blur>
        )
    }
});

module.exports = BlurImg;
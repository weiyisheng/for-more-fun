/**
 * Created by germini on 7/28/15.
 */
var React = require('react');
var Swiper = require('swiper');


var men = ['John', 'Steven', 'Jack', 'Kyle', 'Mina', 'Loger', 'Van', 'Yee', 'Donny', 'Cathy', 'Martin'];
function colorRandom() {
    var c = '#';
    for (var i = 0; i < 6; i++) {
        c += parseInt(Math.random() * 10)
    }

    console.log('random color =' + c)
    return c
}

var Avatar = React.createClass({

    render: function () {
        var w = document.body.clientWidth;

        var cW = w * .2;
        var bC = colorRandom();
        var fC = colorRandom();
        var cS = {
            width: cW,
            height: cW,
            backgroundColor: bC,
            color: fC
        };

        return (
            <div className='circle border-none left' style={cS}>

            </div>
        )
    }
});


var SwiperSlide = React.createClass({
    render: function () {
        return (
            <div className="swiper-slide">
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
            </div>
        )
    }
});

var SwiperWraper = React.createClass({

    render: function () {
        return (
            <div className="swiper-wrapper full-height">
                <SwiperSlide />
                <SwiperSlide />
                <SwiperSlide />
            </div>
        )
    }
});

var SwiperContainer = React.createClass({

    componentDidMount: function () {
        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
        })
    },

    render: function () {
        var w = document.body.clientWidth;
        var h = document.body.clientHeight;


        return (
            <div className='swiper-container'>
                <SwiperWraper />
            </div>
        )
    }
});

module.exports = SwiperContainer;
/**
 * Created by germini on 7/28/15.
 */
var React = require('react');
var Swiper = require('swiper');
var ActionCreator = require('../actionCenter/ActionCreator');
var Constants = require('../constants/Constants');
var MainStore = require('../store/MainStore');

var NameBox = React.createClass({

    getInitialState: function () {
        return {
            userName: MainStore.getShowingUser()
        }
    },

    componentDidMount: function () {
        MainStore.addChangeListener(this._onChange)
    },

    _onChange: function () {
        this.setState({
            userName: MainStore.getShowingUser()
        })
    },

    render: function () {
        return (
            <div className='text-center'>{this.state.userName}</div>
        )
    }
});


var Avatar = React.createClass({

    showName: function () {
        var name = this.props.userName;
        ActionCreator.userAction({
            actionType: Constants.keymirror.SHOW_USER_NAME,
            userName: name
        })
    },

    render: function () {
        var w = document.body.offsetWidth;

        var cW = w * .2;
        var cS = {
            width: cW,
            height: cW
        };

        return (
            <img className='circle border-none left'
                 src='../../../res/blur/Jay.jpg'
                 style={cS}
                 onClick={this.showName}>
            </img>
        )
    }
});


var SwiperSlide = React.createClass({
    render: function () {

        var avatars = this.props.users.map(function (i) {
            return <Avatar userName={i}/>
        });

        return (
            <div className="swiper-slide">
                {avatars}
            </div>
        )
    }
});

var SwiperWraper = React.createClass({

    render: function () {

        var slides = Constants.men.map(function (i) {
            return <SwiperSlide users={i}/>
        })

        return (
            <div className="swiper-wrapper full-height">
                {slides}
            </div>
        )
    }
});

var SwiperContainer = React.createClass({

    componentDidMount: function () {
        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: false
        })
    },


    render: function () {
        return (
            <div className='swiper-container'>
                <SwiperWraper />
                <NameBox />
            </div>
        )
    }
});

module.exports = SwiperContainer;
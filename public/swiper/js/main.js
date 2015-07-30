/**
 * Created by germini on 7/28/15.
 */
var React = require('react');
var SwiperContainer = require('./component/Swiper');

var Container = React.createClass({
    render: function () {
        return (
            <div className='full-height full-width'>
                <SwiperContainer />
            </div>
        )
    }
});


React.render(<Container />,
    document.getElementById('content'));
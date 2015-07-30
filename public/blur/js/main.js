/**
 * Created by germini on 7/30/15.
 */
var React = require('react');
var BlurImg = require('./component/BlurImg');

var MainContainer = React.createClass({

    render: function () {

        return (
            <div className='full-height full-width'>
                <BlurImg />
            </div>
        )
    }
});

React.render(<MainContainer />,
    document.getElementById('content'))
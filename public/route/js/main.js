var React = require('react')
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Inbox = require('./component/Inbox');
var Calendar = require('./component/Calendar');
var DashBoard = require('./component/DashBoard');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="app">Dashboard</Link></li>
                        <li><Link to="inbox">Inbox</Link></li>
                        <li><Link to="calendar">Calendar</Link></li>
                    </ul>
                    Logged in as Jane
                </header>

                {/* this is the important part */}
                <RouteHandler />
            </div>
        );
    }
});


var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="inbox" handler={Inbox}/>
        <Route name="calendar" handler={Calendar}/>
        <DefaultRoute handler={DashBoard}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('content'));
});
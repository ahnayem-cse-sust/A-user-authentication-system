import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router-dom';



const Dashboard = ({ secretData }) => (
    <div>
        <div className="text-center logout-button">
        <Link to="/logout">Log out</Link>
        </div>
        <Card className="container">
            <CardTitle
            title="Dashboard"
            subtitle="You should get access to this page only after authentication."
            />

            {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
        </Card>
    </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
import React, { Component } from 'react'
import { connect} from 'react-redux'
import Organizations from '../components/Organization/Organizations'
import { getOrganizations } from '../actions/getOrganizations'

class OrganizationContainer extends Component {

    componentDidMount() {
        
        this.props.getOrganizations();
    }

    render() {
        return (
            <div>
                <Organizations organizations={this.props.orgArr} />
            </div>
        )
    }
}

const mSTP = state => {
    return {
        orgArr: state.getOrganizationsReducer.organizations
    }
}
export default connect(mSTP, { getOrganizations })(OrganizationContainer)
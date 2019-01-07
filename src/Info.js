import React, { Component } from 'react'
import { loadDataRequest } from './actions'
import { connect } from 'react-redux'

 class Info extends Component {
    render(){
        return(
            <div>
                <h1>Info</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.date,
        error: state.ip.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadDataRequest: () => dispatchEvent(loadDataRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Info)
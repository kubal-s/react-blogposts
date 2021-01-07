import React from  'react';
// import { fetchUser } from './../actions';
import { connect } from 'react-redux';
class UserHeader extends React.Component{
    componentDidMount(){
        // this.props.fetchUser(this.props.userId)
    }
    render(){
        // const user = this.props.users.find(user => user.id === this.props.userId);
        // console.log(user)
        const { user } = this.props;
        if(!user)
            return null;
        return(
            <div className="header">
                {user.name}
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    // return {users:state.users}
    return { user: state.users.find(user=> user.id===ownProps.userId)}
}
// export default connect(mapStateToProps,{fetchUser})(UserHeader);
export default connect(mapStateToProps)(UserHeader);
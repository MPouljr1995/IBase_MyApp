import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

import ApiService from "../../ApiService";
import PoulApiService from '../../ApiService/PoulApiService';


const style ={
    display: 'flex',
    justifyContent: 'center'
}

class UserDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        // this.deleteUser = this.deleteUser.bind(this);
        // this.editUser = this.editUser.bind(this);
        // this.addUser = this.addUser.bind(this);
        // this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    // reloadUserList = () => {
    //     ApiService.fetchUsers()
    //         .then((res) => {
    //             this.setState({users: res.data})
    //         });
    // }

/////////////////////
    reloadUserList = () => {
        
        PoulApiService.fetchUsers()
            .then((res) => {
                console.log(res)
                this.setState({users: res.data.data})
            });
    }
    //////////////////////////

    deleteUser = (userId) => {
        // alert("this user delete");
        PoulApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })
        window.location.reload(UserDetails);
    }

    // editUser = (id) => {
    //     window.localStorage.setItem("editUser", id);
    //     this.props.history.push('/editUser');
    // }

    addUser = () => {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {

        const {users} = this.state;

        return (
            <div style={{width:'90%',margin:'auto', backgroundColor:'white' , marginTop:'50px',}}>
                <Typography variant="h4" style={style}>User Details</Typography>
                <Button variant="contained" style={{backgroundColor:'#03a9f4',color:'white',float:'right',marginRight:'30px'}} onClick={() => this.addUser()}>
                    Add User
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">UserName</TableCell>
                            <TableCell align="left">FirstName</TableCell>
                            <TableCell align="left">LastName</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Address</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(row => (
                            <TableRow key={row.userId}>
                                <TableCell component="th" scope="row">
                                    {row.userId}
                                </TableCell>
                                <TableCell align="left">{row.userName}</TableCell>
                                <TableCell align="left">{row.firstName}</TableCell>
                                <TableCell align="left">{row.lastName}</TableCell>
                                <TableCell align="left">{row.phoneNumber}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.address}</TableCell>
                                {/* <TableCell align="left" onClick={() => this.editUser(row.userId)}><CreateIcon /></TableCell> */}
                                <TableCell align="left" ><Button href = {"editUser/" + row.userId}><CreateIcon /></Button></TableCell>
                                <TableCell align="left" onClick={() => this.deleteUser(row.userId)}><Button><DeleteIcon/></Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

export default UserDetails;

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


const style ={
    display: 'flex',
    justifyContent: 'center'
}

class ListUserComponent extends Component {

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

    reloadUserList = () => {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data})
            });
    }

    deleteUser = (userId) => {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })
    }

    editUser = (id) => {
        window.localStorage.setItem("editUser", id);
        this.props.history.push('/editUser');
    }

    addUser = () => {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
      const user = [{
            id:0,
            username:'Ayaan1',
            firstName: 'Ayaan',
            lastName:'kevin',
            email:'Ayaan@gmail.com',
            address:'Manipay North Manipay',
          },{
            id:1,
            username:'Ahana1',
            firstName: 'Ahana',
            lastName:'selvan',
            email:'Ahana@gmail.com',
            address:'Navali South navali',
          },{
            id:2,
            username:'Peter1',
            firstName: 'Peter',
            lastName:'parker',
            email:'Peter@gmail.com',
            address:'Thavady North Kokkuvil',
          },{
            id:3,
            username:'Virat1',
            firstName: 'Virat',
            lastName:'vigithan',
            email:'Virat@gmail.com',
            address:'Kokkuvil South Kondavil',
          },{
            id:4,
            username:'Rohit1',
            firstName: 'Rohit',
            lastName:'Venilan',
            email:'Rohit@gmail.com',
            address:'Uduvil North Uduvil',
          },{
            id:5,
            username:'Dhoni1',
            firstName: 'Dhoni',
            lastName:'Kathir',
            email:'Dhoni@gmail.com',
            address:'Chunnakam west Mallakam',
          },{
            id:6,
            username:'Naveen1',
            firstName: 'Naveen',
            lastName:'Pirapu',
            email:'Naveen@gmail.com',
            address:'Inuvil south chunnakam',
          }]
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
                        {user.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.username}</TableCell>
                                <TableCell align="left">{row.firstName}</TableCell>
                                <TableCell align="left">{row.lastName}</TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.address}</TableCell>
                                <TableCell align="left" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="left" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

export default ListUserComponent;

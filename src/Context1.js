import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        shops:[
          {
            "id":"1",
            "shopName":"IBaseShop",
            "rating":5,
          },{
            "id":"2",
            "shopName":"Jaffna Electronics",
            "rating":3,
          },{
            "id":"3",
            "shopName":"Hari electronics",
            "rating":4,
          },{
            "id":"4",
            "shopName":"Gnanam Electronics",
            "rating":5,
          },
        ],
        users:[
          {
            "id":"1",
            "username":"GannamSasi",
            "firstName":"Gnanachchandran",
            "lastName":"Sasitharan",
            "email":"Sasitharan1140@gmail.com",
            "phone":"0774440240",
            "address":"Inuvil South Inuvil",
            "roles":"Admin",
          },{
            "id":"2",
            "username":"mahi01",
            "firstName":"Asvin",
            "lastName":"Mahinthan",
            "email":"mahi@gmail.com",
            "phone":"0772589640",
            "address":"kopay South kopay",
            "roles":"User",
          },{
            "id":"3",
            "username":"abi01",
            "firstName":"Gnasekaram",
            "lastName":"Abiram",
            "email":"abi@gmail.com",
            "phone":"0774411140",
            "address":"kopay South kopay",
            "roles":"User",
          },{
            "id":"4",
            "username":"raghu01",
            "firstName":"raghu",
            "lastName":"raj",
            "email":"raghu@gmail.com",
            "phone":"0772590240",
            "address":"Manipay North Manipay",
            "roles":"User",
          },{
            "id":"5",
            "username":"subas01",
            "firstName":"Subas",
            "lastName":"Subaskaran",
            "email":"subas@gmail.com",
            "phone":"0775947256",
            "address":"Navali North Navali",
            "roles":"User",
          },
        ],
        products: [
            {
                "id": "1",
                "title": "Nike Shoes 01",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "id": "2",
                "title": "Nike Shoes 02",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "id": "3",
                "title": "Nike Shoes 03",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "id": "4",
                "title": "Nike Shoes 04",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "id": "5",
                "title": "Nike Shoes 05",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "id": "6",
                "title": "Nike Shoes 06",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart:[],
        total: 0

    };







    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }

    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };

    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }


    render() {
        const {products, users, shops, cart,total} = this.state;
        const {removeProduct,getTotal} = this;
        return (
            <DataContext.Provider
            value={{products, users,shops, removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

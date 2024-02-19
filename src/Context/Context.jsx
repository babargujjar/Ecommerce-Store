"use client"
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'



export const GlobalData = createContext()

const Context = ({ children }) => {

  var [user,setUser] = useState(null)
  var [cart, setcart] = useState({
    cartitem: [],
    totalitem: 0,
    Total: 0,
  }
  )

  const addtocart = (item) => {
    var cartcopy = cart.cartitem


    var existeditem = cartcopy?.filter((v) => v._id == item._id)

    if (existeditem.length) {
      // increase quantity


      existeditem.map(v => {
        if (v._id == item._id) {
          v.quantity = v.quantity + 1
          v.total = v.quantity * v.price
        }
        return v
      })


    } else {
      // set into cart
      cartcopy.push({ ...item, quantity: 1, total: item.price })
    }

    var Total = 0
    cartcopy.forEach(v => {
      Total = Total + v.total
    })
    // console.log(Total)

    var totalitem = 0
    cartcopy.forEach(v => {
      totalitem = totalitem + v.quantity
    })
    window.localStorage.setItem("carts", JSON.stringify({
      cartitem: cartcopy, totalitem, Total
    }))

    setcart({
      cartitem: cartcopy, totalitem, Total
    })


  }

  const removeItemFromCart = (id) => {
    var cartcopy = cart.cartitem
    cartcopy = cartcopy.filter(v => v._id != id)

    var Total = 0
    cartcopy.forEach(v => {
      Total = Total + v.total
    })

    var totalitem = 0
    cartcopy.forEach(v => {
      totalitem = totalitem + v.quantity
    })
    window.localStorage.setItem("carts", JSON.stringify({
      cartitem: cartcopy, totalitem, Total
    }))

    setcart({
      cartitem: cartcopy, totalitem, Total
    })

  }

  const decreaseQuantity = (item) =>{
    var cartcopy = cart.cartitem
    var existeditem = cartcopy.filter(v=>v._id == item._id)
    if(existeditem[0].quantity != 1){
      cartcopy = cartcopy.map(v=>{
        if(v._id == item._id){
          v.quantity = v.quantity - 1
          v.total = v.quantity * v.price
        }
        return v
      })
    }else{
      cartcopy = cartcopy.filter(v=>v._id != item._id)
    }

    var Total = 0
    cartcopy.forEach(v=>{
      Total = Total + v.total
    })

    var totalitem = 0
    cartcopy.forEach(v=>{
      totalitem = totalitem + v.quantity
    })

    window.localStorage.setItem("carts", JSON.stringify({
      cartitem: cartcopy, totalitem, Total
    }))

    setcart({
      cartitem: cartcopy, totalitem, Total
    })
  }

  const fetchProfile = async () =>{
    try {
      var res = await axios.get("/api/auth/profile")
      if(res.data.success){
        setUser(res.data.message)
      }
    } catch (error) {
      setUser(null)
    }
  }

  const logoutUser = async () =>{
    try {
      if(!window.confirm("Are you sure?")){
        return
      }
      var res = await axios.get("/api/auth/logout")
      if(res.data.success){
        setUser(null)
        window.location.reload()
      }
    } catch (error) {
      setUser(null)
    }
  }

  useEffect(() => {
    if (window.localStorage.carts) {
      setcart(JSON.parse(window.localStorage.getItem('carts')))
    }
    
    fetchProfile()
  }, [])

  return (
    <GlobalData.Provider value={{ cart, setcart, addtocart,decreaseQuantity,removeItemFromCart,user,setUser,logoutUser }} >
      {children}
    </GlobalData.Provider>
  )
}

export default Context
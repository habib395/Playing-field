import axios from 'axios'

export const saveUser = async user =>{
    await axios.post(`http://localhost:5000/users/${user?.email}`,{
        name: user?.displayName || user?.name,
        email: user?.email,
        image: user?.photoURL,
    })
}
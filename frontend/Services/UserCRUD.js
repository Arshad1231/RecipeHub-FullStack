
export const registerUser = async (userData) => {
    console.log("Registering user with data:", userData);
    try {
        const response = await fetch('http://localhost:3030/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
            credentials: 'include'
        });
        return response.json();
    } catch (error) {
        console.log("Error registering user:", error);
        throw error;
    }
}
export const CheckLogin = async (email, password)=>{
    try {
        const response = await fetch("http://localhost:3030/api/users/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({Email:email,Password:password})
        })
        return response.json();
    } catch (error) {
        console.log("Error during login:", error);
        throw error;
    }
}

export const LogOutUser = async ()=>{
    try {
        
        const response = await fetch("http://localhost:3030/api/users/logout",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:null,
            credentials: 'include'
        })
        return response.json();
    } catch (error) {
        
    }
}
export const verifyLogin = async () => {
      try {
       
        const res = await fetch("http://localhost:3030/api/users/checkAuth", {
          credentials: "include", // important for sessions
        });
        const data = await res.json();
        return data
      } catch (error) {
        console.log("Error verifying login:", error);
      }
};
export const getUserDetails = async()=>{
    try {
        const res = await fetch("http://localhost:3030/api/users/GetUser",{
            credentials:"include"
        })
        const data = await res.json()
       return data
    } catch (error) {
        console.log("Error Getting the details:", error);

    }
}


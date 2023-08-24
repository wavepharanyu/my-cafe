    //เก็บข้อมูล toke / username ที่ session storage
    export const authenticate = (response,next) => {
        if(window !== "undefined"){
            //เก็บข้อมูลลง session storage
            sessionStorage.setItem('token',JSON.stringify(response.data.token))
            sessionStorage.setItem('user',JSON.stringify(response.data.username))
        }
        next()
    }

    //ดึงข้อมูล token /user
    export const getToken = () => {
        if(window !== "undefined"){
            if(sessionStorage.getItem('token')){
                return JSON.parse(sessionStorage.getItem('token'))
            }
            else{
                return false
            }
        }
    }

    export const getUser = () => {
        if(window !== "undefined"){
            if(sessionStorage.getItem('user')){
                return JSON.parse(sessionStorage.getItem('user'))
            }
            else{
                return false
            }
        }
    }

    export const logout = (next) => {
        if(window !== "undefined"){
            sessionStorage.removeItem("token")
            sessionStorage.removeItem("user")
        }
        next()
    }

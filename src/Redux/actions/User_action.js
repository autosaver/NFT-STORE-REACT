export const login_User=()=>{
    return{
        type:"LogInUser",
    }
};

export const logout_User=()=>{
    return{
        type:"LogOutUser",
    }
}

export const setprofileImg=(profileImg)=>{
    return{
        type:"setprofileImg",
        payload:profileImg,
    }
};

export const setbannerImage=(bannerImage)=>{
    return{
        type:"setbannerImage",
        payload:bannerImage,
    }
};
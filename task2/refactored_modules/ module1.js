const CoreModule=(function(){
    let user=null;
    function setUser(name, email){
        user={name, email};
    }
    function gerUser(){
        return user;
    }
    return{
        setUser,
        gerUser
    };
})();
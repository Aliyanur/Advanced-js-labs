
// Example for Factory Function PAttern
// Original context:User MAnager (from Lab 1.1)
// Factory function creates a new user manager instance
function createUserManager(){
    // Private data
    var users=[];
    return{
        // Public method to add a new user
        add:function(name, email){
            var user={
                id:users.length+1,
                name:name,
                email:email
            };

            users.push(user);
            return user;
        },
        // Public method to find a user by id
        find: function(id){
            return users.find(function(u){
                return u.id===id;
            });
        }
    };
}
// User example
var userManager1=createUserManager();
var userManager2=createUserManager();

userManager1.add('Aliya', 'aliya.kaldibay01@gmail.com');
userManager2.add('Zhasmin', 'zhasmin01@gmail.com');
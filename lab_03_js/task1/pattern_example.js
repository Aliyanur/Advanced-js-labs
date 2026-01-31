// Previous lecture code(Lab01_task2)
function createUserManager(){
    // Private data
    let users=[];
    return{
        // Public method to add a new user
        add(name, email){
            const user={
                id:users.length+1,
                name,
                email
            };

            users.push(user);
            return user;
        },
        // Public method to find a user by id
        find(id){
            return users.find(user=> user.id === id);
        }
    };
}
// User example
const userManager1=createUserManager();
const userManager2=createUserManager();

userManager1.add('Aliya', 'aliya.kaldibay01@gmail.com');
userManager2.add('Zhasmin', 'zhasmin01@gmail.com');

console.log(userManager1.find(1));
console.log(userManager2.find(1));
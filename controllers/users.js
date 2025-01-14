const users = [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", role: "Admin" },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com", role: "User" },
    { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", role: "User" },
    { id: 4, name: "Diana Prince", email: "diana.prince@example.com", role: "Moderator" },
    { id: 5, name: "Ethan Hunt", email: "ethan.hunt@example.com", role: "User" },
  ];
  
// get single user
const getUser = (req, res)=>{
    const {userId} = req.params
    const user = users.find(item => item.id == userId)
    if(!user){
        res.status(404).json({
            status: 'error',
            message: 'user not found'
        })
        return
    }

    res.status(200).json({
        staus: 'suscces',
        user
    })
}

module.exports ={
    getUser
}
  
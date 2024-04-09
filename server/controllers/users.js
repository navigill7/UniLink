import User from "../models/User.js"

// read 

export const getUser = async(req ,res ) =>{
    try {
        const{ id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUserFriends = async (req , res)=>{
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id)=> User.findById(id))
        )
        const formattedFriends = friends.map(
            ({_id , firstName , lastName , occupation , location , picturePath }) =>{
                return {_id , firstName , lastName , occupation , location , picturePath};
            }
        );
        res.status(200).json(formattedFriends);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// UPDATE // 

// export const addRemoveFriends = async (req , res)=>{
//     try {
//         const { id , friendId } = req.params;
//         const user = await User.findById(id);        
//         const friend = await User.findById(friendId);      

//         if(user.friends.includes(friendId)){
//             user.friends = user.friends.filter((id)=>{
//                 id !== friendId;
//             })
//             friend.friends = friend.friends.filter((id) => id !== id );
//         }else{
//             user.friends.push(friendId);
//             friend.friends.push(id);
//         }

//         await user.save();
//         await friend.save();

//         const friends = await Promise.all(
//             user.friends.map((id)=> User.findById(id))
//         )
//         const formattedFriends = friends.map(
//             ({_id , firstName , lastName , occupation , location , picturePath }) =>{
//                 return {_id , firstName , lastName , occupation , location , picturePath};
//             }
//         );

//         res.status(200).json(formattedFriends);
//     } catch (error) {
//         res.status(404).json({ message: error.message })
//     }
// }

// Search endpoint 

export const SearchUser = async (req, res) => {
    try {
        console.log('Search request received:', req.body);
        
        // Ensure that the query parameter is provided and is a non-empty string
        const { query } = req.body;
        if (!query || typeof query !== 'string' || query.trim() === '') {
            return res.status(400).json({ message: "Invalid or missing search query" });
        }

        // Use a regex to perform case-insensitive search for first name or last name
        const users = await User.find({
            $or: [
                { firstName: { $regex: query, $options: "i" } },
                { lastName: { $regex: query, $options: "i" } },
            ],
        });

        // Format the response to include necessary fields
        const formattedUsers = users.map(({ _id, firstName, lastName, Year, location, picturePath }) => {
            return { _id, firstName, lastName, Year, location, picturePath };
        });

        res.status(200).json(formattedUsers);
    } catch (err) {
        console.error('Error in searchUsers:', err);
        res.status(500).json({ message: "Internal server error" });
    }
};




  



export const addRemoveFriends = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!friend) {
            return res.status(404).json({ message: "Friend not found" });
        }

        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }

        await user.save();
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id)=> User.findById(id))
        );
        const formattedFriends = friends.map(
            ({_id , firstName , lastName , occupation , location , picturePath }) =>{
                return {_id , firstName , lastName , occupation , location , picturePath};
            }
        );

        res.status(200).json(formattedFriends);

        
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


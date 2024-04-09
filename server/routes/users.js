import express from "express"
import {
    getUser,
    getUserFriends ,
    addRemoveFriends ,
    SearchUser
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

 // READ //
router.get("/:id" , verifyToken , getUser);

router.get("/:id/friends" , verifyToken , getUserFriends);

 // UPDATE //

router.patch("/:id/:friendId" , verifyToken , addRemoveFriends);

router.post('/search', (req, res) => {
    console.log('Received POST request to /users/search');
    SearchUser(req , res);
});
export default router;
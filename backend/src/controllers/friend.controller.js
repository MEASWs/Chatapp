// import User from "../models/user.model.js";

// export const sendFriendRequest = async (req, res) => {
//     try {
//         const { friendId } = req.body;
//         const userId = req.user._id;

//         if (userId === friendId) {
//             return res.status(400).json({ message: "You cannot add yourself as a friend" });
//         }

//         const friend = await User.findById(friendId);
//         if (!friend) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         if (friend.friendRequests.includes(userId)) {
//             return res.status(400).json({ message: "Friend request already sent" });
//         }

//         friend.friendRequests.push(userId);
//         await friend.save();

//         res.status(200).json({ message: "Friend request sent successfully" });
//     } catch (error) {
//         console.error("Error in sendFriendRequest:", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// export const acceptFriendRequest = async (req, res) => {
//     try {
//         const { friendId } = req.body;
//         const userId = req.user._id;

//         const user = await User.findById(userId);
//         const friend = await User.findById(friendId);

//         if (!user || !friend) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         if (!user.friendRequests.includes(friendId)) {
//             return res.status(400).json({ message: "No friend request from this user" });
//         }

//         user.friendRequests = user.friendRequests.filter((id) => id.toString() !== friendId);
//         user.friends.push(friendId);

//         friend.friends.push(userId);

//         await user.save();
//         await friend.save();

//         res.status(200).json({ message: "Friend request accepted successfully" });
//     } catch (error) {
//         console.error("Error in acceptFriendRequest:", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// export const rejectFriendRequest = async (req, res) => {
//     try {
//         const { friendId } = req.body;
//         const userId = req.user._id;

//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         user.friendRequests = user.friendRequests.filter((id) => id.toString() !== friendId);
//         await user.save();

//         res.status(200).json({ message: "Friend request rejected successfully" });
//     } catch (error) {
//         console.error("Error in rejectFriendRequest:", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// export const getFriendsList = async (req, res) => {
//     try {
//         const userId = req.user._id;

//         const user = await User.findById(userId).populate("friends", "fullName email profilePic");
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.status(200).json(user.friends);
//     } catch (error) {
//         console.error("Error in getFriendsList:", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };
const db = require("../models");

const Chat = db.chat;

const createChat = async (req, res) => {
    try {
        const chat = new Chat({
            chatname: req.body.chatname,
            participants: req.body.participants,
            owner: req.body.owner,
            messages: []
        });

        await chat.save();
        res.status(200).send({ message: "Chat has been successfully added" });
        console.log(`Chat named ${chat.chatname} has been added`);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const getChats = async (req, res) => {
    try {
        const chats = await Chat.find({ participants: req.params.user });
        
        if (!chats.length) {
            return res.status(404).send({ message: `Chats for ${req.params.user} haven't been found` });
        }
        
        res.status(200).send({ message: "Chats have been found", chats });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};


const deleteChat = async (req, res) => {
    const id = req.params.id;
    try {
        const chat = await Chat.findById(id);
        if (!chat) {
            return res.status(404).send({ message: `Chat for ${req.body.owner} hasn't been found` });
        }
        if (chat.owner !== req.body.owner) {
            return res.status(401).send({ message: `This user can't delete this chat` });
        }
        await Chat.deleteOne({ _id: id });
        res.status(200).send({ message: `Chat named ${req.body.chatname} has been deleted` });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};


const updateChat = async (req, res) => {
    try {
        const chat = await Chat.updateOne({ _id: req.params.id }, {
            chatname: req.body.chatname,
            participants: req.body.participants,
            owner: req.body.owner,
            messages: req.body.messages
        });
        if (chat.matchedCount === 0) {
            return res.status(404).send({ message: `Chat for ${req.body.id} hasn't been found` });
        }
        res.status(200).send({ message: "Chat has been updated", chat });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

module.exports = {
    createChat,
    getChats,
    deleteChat,
    updateChat
}
class ChatController{
    async chat (req, res) {
        try {
            res.render("chat", {});
        } catch (err) {
            res.status(err.status || 500).json({ Error: `${err}` });
        }
    }
};

export const chatController = new ChatController();
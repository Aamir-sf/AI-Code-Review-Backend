const aiService = require("../services/ai.service")

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt (Code) is required");
    }

    try {
        // AI service call karo
        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        // Agar error aaye to server crash mat hone do, 500 response bhejo
        console.error("Controller Error:", error.message);
        res.status(500).json({ error: "Something went wrong with AI service" });
    }
}
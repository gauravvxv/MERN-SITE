const validateData = async (req, res, next) => {
    const { title, completed } = req.body;
    let error = [];

    if (!title) {
        error.push({ message: "Title is required" })
    }

    if (completed === undefined || completed === null) {
        error.push({ message: "Completed is required" })

    }

    if (error.length > 0) {
        return res.status(400).json({ error })
    }
    next();
}

module.exports = validateData
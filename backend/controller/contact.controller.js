import Contact from "../model/contact.model.js"; // Correct import

export const contact = async (req, res) => {
    try {
        const { fullname, email, number } = req.body;
        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return res.status(400).json({ message: "Contact already exists" });
        }
        const createdContact = new Contact({ // Corrected from User to Contact
            fullname: fullname,
            email: email,
            number: number,
        });
        await createdContact.save();
        res.status(201).json({
            message: "Submit successfully",
            contact: {
                _id: createdContact._id,
                fullname: createdContact.fullname,
                email: createdContact.email
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
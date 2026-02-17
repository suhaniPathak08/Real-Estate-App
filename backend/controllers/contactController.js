const Contact = require('../models/Contact');

// Create a new contact message
const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = new Contact({
      name,
      email,
      message
    });

    await contact.save();
    res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createContact
};
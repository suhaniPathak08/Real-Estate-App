const Property = require('../models/Property');

// Get all properties
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new property
const createProperty = async (req, res) => {
  try {
    const { title, location, price, image, description } = req.body;

    const property = new Property({
      title,
      location,
      price,
      image,
      description
    });

    const savedProperty = await property.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Seed properties with dummy data
const seedProperties = async () => {
  try {
    const count = await Property.countDocuments();
    
    if (count === 0) {
      const dummyProperties = [
        {
          title: "Modern Downtown Apartment",
          location: "New York, NY",
          price: 850000,
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
          description: "Beautiful 2-bedroom apartment in the heart of downtown with stunning city views."
        },
        {
          title: "Luxury Beach House",
          location: "Malibu, CA",
          price: 2500000,
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
          description: "Stunning beachfront property with private access to the ocean and modern amenities."
        },
        {
          title: "Suburban Family Home",
          location: "Austin, TX",
          price: 450000,
          image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
          description: "Spacious 4-bedroom home perfect for families with a large backyard and garage."
        },
        {
          title: "Downtown Loft",
          location: "Chicago, IL",
          price: 625000,
          image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
          description: "Industrial-style loft with exposed brick, high ceilings, and urban views."
        },
        {
          title: "Mountain Cabin Retreat",
          location: "Aspen, CO",
          price: 1200000,
          image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
          description: "Cozy mountain cabin with panoramic views, perfect for a weekend getaway."
        },
        {
          title: "Modern Condo",
          location: "Miami, FL",
          price: 550000,
          image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
          description: "Contemporary condo with ocean views, pool access, and resort-style amenities."
        }
      ];

      await Property.insertMany(dummyProperties);
      console.log('Database seeded with 6 dummy properties');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = {
  getProperties,
  createProperty,
  seedProperties
};
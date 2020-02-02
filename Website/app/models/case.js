var mongoose = require("mongoose");

var CaseSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    featured: Boolean,
    client: String,
    location: String,
    service: [{
        type: String,
        enum: ['Clean', 'Restore', 'Preserve']
    }],
    imagePaths: {
        primary: {
            before: String,
            after: String
        },
        other: [{
            img: String,
            type: {
                type: String,
                enum: ['Before', 'During', 'After']
            },
            order: Number
        }],
        video: String
    },
    text: {
        summary: String,
        other: String
    },
    keyFacts: [{
        main: String,
        sub: String
    }],
    testimonials: [{
        person: {
            name: String,
            position: String,
            company: String,
            image: String
        },
        testimonial: String,
        date: Date
    }],
    awards: [{
        name: String,
        image: String
    }],
    date: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("Case", CaseSchema);
const { model, Schema } = require('mongoose');

const productSchema = Schema({
    name: { type: String, req: true },
    price: { type: Number, req: true },
    discount: { type: Number, req: true, default: 0 },
    shelf_life: { type: Number, req: true },
    category: [{ type: String, req: true }],
    image_links: [{ type: String, req: true }],
    key_features: { type: String },
    description: { type: String }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('product', productSchema);
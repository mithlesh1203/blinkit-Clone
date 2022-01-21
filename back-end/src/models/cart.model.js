const { model, Schema } = require('mongoose');

const cartSchema = Schema({
    product_id: { type: Schema.Types.ObjectId, ref: 'product', required: true },
    quantity: { type: Number, required: true, default: 1 }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('cart', cartSchema);
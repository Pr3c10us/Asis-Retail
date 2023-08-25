const router = require("express").Router();

const {
    createShippingDetails,
    getShippingDetails,
    updateShippingDetails,
    deleteShippingDetails,
    getShippingDetailsById,
} = require("../controller/shippings");

const { adminAuthorization } = require("../middleware/adminAuthorization");

router
    .route("/")
    .get(getShippingDetails)
    .post(adminAuthorization, createShippingDetails);

router
    .route("/:id")
    .get(getShippingDetailsById)
    .put(adminAuthorization, updateShippingDetails)
    .delete(adminAuthorization, deleteShippingDetails);

module.exports = router;

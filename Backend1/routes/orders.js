const router = require("express").Router();

const {
    createOrderStripe,
    getOrders,
    getOrder,
    updateOrder,
    getOrdersAdmin,
    deleteOrder,
    getOrderByClientSecrete,
} = require("../controller/orders");
const {
    customerAuthorization,
    adminAuthorization,
} = require("../middleware/adminAuthorization");
const getCartFromCookie = require("../middleware/cartCookie");

router.route("/").get(customerAuthorization, getOrders);
router.route("/admin").get(adminAuthorization, getOrdersAdmin);
router
    .route("/stripe")
    .post(customerAuthorization, getCartFromCookie, createOrderStripe);

router.route("/clientSecret").post(getOrderByClientSecrete);

router
    .route("/:id")
    .get(getOrder)
    .put(adminAuthorization, updateOrder)
    .delete(adminAuthorization, deleteOrder);

router.route("/:id/customer").put(customerAuthorization, updateOrder);

module.exports = router;

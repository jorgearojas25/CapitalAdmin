const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.post("/", (req, res) => {
  controller
    .AddChat(req.body.users)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(e => {
      response.error(
        req,
        res,
        "Internal Error",
        500,
        `[Chat Network Post] ${e}`
      );
    });
});

router.get("/:userId", (req, res) => {
  controller
    .ListChats(req.params.userId)
    .then(users => {
      response.success(req, res, users, 200);
    })
    .catch(e => {
      response.error(
        req,
        res,
        "Internal Error",
        500,
        `[Chat Network Get] ${e}`
      );
    });
});

module.exports = router;
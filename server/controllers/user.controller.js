import { Webhook } from "svix";

import userModel from "../modals/user.modal.js";
// clerk wala data ko idhar se save kr dena mongodb me
// api ka end point -> http://localhost:4000/api/user/webhooks

const clerkWebhooks = async (req, res) => {
  try {
    // instance create krna hai
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;
    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.create(userData);
        res.json({});
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({});
        break;
      }
      case "user.deleted": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({});
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

export {clerkWebhooks}
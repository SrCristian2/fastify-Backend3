import postCtrl from "../controllers/post.controller.js";
import { upload } from "../middlewares/imgUpload.js";

const postSchema = {
  body: {
    type: "object",
    required: ["title", "description"],
    properties: {
      title: {
        type: "string",
        minLength: 1,
      },
      description: {
        type: "string",
        minLength: 1,
      },
      imgUrl: {
        default: "",
      },
    },
  },
};

export const postRoutes = (fastify, opts, done) => {
  fastify.get("/", postCtrl.listar);
  fastify.get("/:id", postCtrl.listOne);
  fastify.post("/",
    { schema: postSchema,preValidation: [upload.single("img")] },
    
    postCtrl.add)
  fastify.delete("/:id", postCtrl.delete);
  fastify.put("/:id", { preValidation: [upload.single("img")] }, postCtrl.update);
  done();
};

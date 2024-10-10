import { Schema,model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const FollowSchema =  Schema({
    following_User: {
        type: Schema.ObjectId,
        ref: "user",
        required: true
    },
    followed_user: {
        type: Schema.ObjectId,
        ref: "user",
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now,
    }
});

//definir indice 
FollowSchema.index({following_User: 1, followed_user: 1},{unique: true});

//configuracion el plugin de paginacion 
FollowSchema.plugin(mongoosePaginate);

export default model("Follow",FollowSchema);
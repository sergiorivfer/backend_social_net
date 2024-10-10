import { Schema,model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const UserSchema = Schema ({
    name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    nick:{
        type: String,
        require: true,
        Unique: true
    },
    email: {
        type: String,
        require: true,
        Unique: true
    },
    bio: String,
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "role_user"
    },
    image: {
        type: String,
        defaul: "defaul_user.png"
    },
    create_at: {
        type: Date,
        default: Date.now
    }
});

// Configurar plugin de paginacion de mongo
UserSchema.plugin(mongoosePaginate);

export default model("User",UserSchema,"users"); 
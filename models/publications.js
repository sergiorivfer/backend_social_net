import { Schema,model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const PublicationSchema = Schema({
    user_id: {
        Type:Schema.object,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        required: true
    },
    file: String,
    create_at: {
        type: Date,
        default: Date.now
    }
});

// configurar plugin de paginacion 
PublicationSchema.plugin(mongoosePaginate);

export default model("Publication",PublicationSchema,"puplications");
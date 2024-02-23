import {Schema, model, models} from "mongoose";

const binnacleSchema = new Schema({
    
        acceptancePrivacy: {
            type: Boolean,
            required: [true, "Acceptance Privacy is required"], 
        },
        acceptanceWarning: {
            type: Boolean,
            required: [true, "Acceptance Warning is required"], 
        },
        acceptanceCookies: {
            type: Boolean,
            required: [true, "Acceptance Cookies is required"], 
        },
        
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default models.Binnacle || model("Binnacle", binnacleSchema);
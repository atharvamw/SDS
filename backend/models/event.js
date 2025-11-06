import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    tag: {type: String},
    date: {type: Date}
}, {collection: "events"});

export const Event = mongoose.createConnection(process.env.MONGO_URI_PROJECT).model("Event",eventSchema);

export const getEvents = async()=>{

    try
    {
        const resultData = await Event.find({}).sort({ date: -1 }).lean()
        return { status: "success", resultData }
    }
    catch(error){
        console.log(error)
    }
}
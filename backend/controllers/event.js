import {getEvents} from '../models/event.js'

export async function handleGetEvents(req, res) 
{
    try {
        const events = await getEvents();

        res.status(200).json({ 
            status: "success",
            projects: events 
        });

    } 
    catch (error) 
    {
        res.status(500).json({ status: "error", message: "Failed to retrieve events." });
    }
}
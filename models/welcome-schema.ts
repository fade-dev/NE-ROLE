import mongoose, { Schema } from 'mongoose'

const reqString = {
    type: String,
    required: true
}

const welcomeSchema = new Schema({
    // Guild ID
    _id: reqString,
    channel1Id: reqString,
    text: reqString
})

const name = 'welcome'
// module.exports =
export default mongoose.models[name] || mongoose.model(name, welcomeSchema, name)
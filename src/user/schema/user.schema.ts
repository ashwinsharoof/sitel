import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    dob: { type: String, require: true },
})
import mongoose, { Model, Schema } from 'mongoose';
import { Entry } from '../interfaces/entry';

export interface IEntry extends Entry {}

const entrySchema = new Schema({
    title: {type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Number },
    status: { 
        type: String, 
        enum: {
            values: ['pennding', 'in-progress', 'done'],
            message: '{VALUE} no es un estado permitido'
        }
    }

});

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema );

export default EntryModel;
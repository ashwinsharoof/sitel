import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { UserDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>,)
    {}
    async create(data: UserDto): Promise<any> {
        const createdData = await new this.userModel(data).save();
        return new Promise((resolve) => {
            resolve(createdData);
        });
    }
    async findMy(id:string): Promise<any> {
        const data = await this.userModel.find({ _id: id });
        return new Promise((resolve) => {
            resolve(data);
        });
    }
    async remove(id: string): Promise<any> {
        const data = await this.userModel
            .findOneAndDelete({ _id: id })
            .exec()
        return new Promise((resolve) => {
            resolve(data);
        });
    }
}

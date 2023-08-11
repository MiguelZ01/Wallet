import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>){

  }
  async create(createUserDto: CreateUserDto) {
    const {password} = createUserDto

    const plainToHash = await hash(password, 10)

    createUserDto = {...createUserDto, password: plainToHash}

    return this.userModel.create(createUserDto)
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    const updateUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true}
    )

    return updateUser;
  }

  delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}

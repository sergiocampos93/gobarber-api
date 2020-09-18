import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email or password');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email or password');
    }

    const token = sign(
      {},
      'wN$vt5XbQyW6grzCoVS1N@5x%29ST4!$TM8lNh^T*o8$#bO$HupKZtxziEm##siDrV!JPzrOvl!&fHPxUaWwUc4M6%A4xsz5RQx',
      { subject: user.id, expiresIn: '1d' },
    );

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;

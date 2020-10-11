import { Request, Response } from 'express';
import { container } from 'tsyringe';

import PasswordRecoverService from '@modules/users/services/PasswordRecoverService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const passwordRecover = container.resolve(PasswordRecoverService);

    await passwordRecover.execute({
      email,
    });

    return response.status(204).json();
  }
}

import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgressUsersRepository } from './../../repositories/implementations/PostgressUsersRepository';
import { MailTrapMailProvider } from './../../providers/implementations/MailTrapProvider';

const mailTrapMailProvider = new MailTrapMailProvider()
const postgressUsersRepository = new PostgressUsersRepository()

const createUserUseCase = new CreateUserUseCase(
	postgressUsersRepository,
	mailTrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController}
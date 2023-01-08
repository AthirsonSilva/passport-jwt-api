import { Injectable } from '@nestjs/common'
import { User } from './user.entity'

@Injectable()
export class UsersService {
	private readonly users: User[] = [
		{
			id: 1,
			name: 'John Doe',
			username: 'john',
			password: 'changeme',
		},
		{
			id: 2,
			name: 'Chris Johnson',
			username: 'chris',
			password: 'secret',
		},
		{
			id: 3,
			name: 'Marie',
			username: 'maria',
			password: 'guess',
		},
	]

	async findOne(username: string): Promise<User | null> {
		return this.users.find((user) => user.username === username) || null
	}
}

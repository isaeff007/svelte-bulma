import { writable } from 'svelte/store';
import type { User } from '$data/UserDTO';

export const fetchedUsers = writable<User[]>([]);
let loaded = false;

// fetch the users and set them as a store value
export const fetchUsers = async () => {
	if (loaded) return;
	try {
		const url = 'https://jsonplaceholder.typicode.com/users';
		const res = await fetch(url);
		const data: User[] = await res.json();
		if (res.ok) {
			fetchedUsers.set(data);
			loaded = true;
		}
	} catch (err) {
		console.error(err);
		return null;
	}
};

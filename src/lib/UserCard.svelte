<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import type { User } from '$data/UserDTO';
	import { fetchedUsers } from '$data/usersstore';
	export let user: User;
	function handleDelete() {
		fetchedUsers.update((currentUsers) => {
			return currentUsers.filter((u) => u.id != user.id);
		});
	}
</script>

<main>
	<div class="card" in:scale out:fade={{ delay: 250, duration: 300 }}>
		<div class="del-container">
			<button on:click={handleDelete} class="delete" />
		</div>
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
						<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-4">{user.name}</p>
					<p class="subtitle is-6">{user.email}</p>
					<span class="tag is-info">{user.address.city}</span>
					<span class="tag is-light">{user.address.zipcode}</span>
				</div>
			</div>

			<div class="content">
				<div class="subtitle is-5 is-family-sans-serif">{user.company.name}</div>
				<p class="subtitle is-6">{user.company.catchPhrase}</p>
				<div class="tag is-info is-light">{user.company.bs}</div>
			</div>
		</div>
	</div>
</main>

<style>
	.del-container {
		padding: 5px;
		display: flex;
		justify-content: flex-end;
	}
</style>

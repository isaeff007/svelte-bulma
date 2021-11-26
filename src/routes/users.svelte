<script context="module">
	import { fetchedUsers, fetchUsers } from '$data/usersstore';
import UserCard from '$lib/UserCard.svelte';	
	// fill the store
	fetchUsers();
</script>

<svelte:head><title>Users List</title></svelte:head>

<main>
	{#each $fetchedUsers as user (user.id)}
		<UserCard {user}></UserCard>
	{/each}
</main>


<style>
    main {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }    
</style>

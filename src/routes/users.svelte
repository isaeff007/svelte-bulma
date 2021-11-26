<script context="module">
	import { fetchedUsers, fetchUsers } from '$data/usersstore';
    import { fade, scale } from 'svelte/transition'
    // fill the store
    fetchUsers();
</script>

<svelte:head><title>Users List</title></svelte:head>


{#each $fetchedUsers as user}
	<div in:scale class="box" >{user.name}</div>
{/each}

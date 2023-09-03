<script>
    import JournalLinks from '$lib/journal-links.svelte';

    export let data;
</script>

<div class="content">
    <h1>Welcome To My Journal</h1>

    <JournalLinks data={data}/>
</div>
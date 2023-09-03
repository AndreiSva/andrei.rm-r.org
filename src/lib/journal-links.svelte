<script>
    export let data;
</script>

<ul class="journal-links">
    {#each data.journal_data as journal}
    <li class="journal-link"><a href="/journal/{journal.date}">{journal.name}</a> <span>-- {journal.date}</span></li>
    {/each}
</ul>

<style>
    .journal-link {
        font-size: 20px;
    }
</style>
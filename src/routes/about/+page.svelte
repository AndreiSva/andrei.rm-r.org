<script>
    export let data;

    const links = [
        "https://ret2pop.nullring.xyz",
        "https://aberrantflux.xyz",
        "https://society.nullring.xyz",
        "https://nullring.xyz",
        "https://cat-v.org/",
        "https://openbsd.org/",
    ];

</script>

<div class="content">
    <h1>About</h1>
    <p>
        If you want to reach out I prefer using matrix or irc, but if you really have to you can contact me on discord, where my username is simply 'netbsd' (yes i know i snagged that one just in time).
        I don't use NetBSD for my primary operating system, maybe some day.
    </p>

    <h2>Cool Links</h2>
    <p>Here's some links to my friend's websites or just websites I find cool. (not listed in any particular order)</p>

    <ul>
        {#each links as link}
            <li><a href={link}>{link}</a></li>
        {/each}
    </ul>
    <br>
    <p>
        I guess i could tell you about my website now... This website is built using <a href="https://svelte.dev">SvelteKit</a>, and runs on an azure VM. It's also open source, <a href="https://github.com/AndreiSva/novanode">check out the source code</a>. Oh and here are some server stats if that interests you:
    </p>
    <pre class="code">
        server has been up for {data.uptime}
        {#each Object.entries(data["commands"]) as command}
        {command[0]} : {command[1]}
        {/each}
    </pre>
    <p>

    </p>
</div>
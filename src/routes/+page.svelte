<script>
  import "$lib/style.css";
  import Card from "$lib/card.svelte"
  import Terminal from "$lib/terminal.svelte"
  import JournalLinks from "$lib/journal-links.svelte";

  export let data;
</script>

<div class="page-content">
    <div id="left-pannel">
        <h2 style="text-align: center;">Newest Journals</h2>
        <hr>
        <JournalLinks data={data}/>
    </div>
    <div>
        <div id="welcome-container">
            <Card style="flex-basis: 600x;">
                <pre style="text-align: center">
                .----.
    .---------. | == |
    |.-"""""-.| |----|
    ||       || | == |
    ||       || |----|
    |'-.....-'| |::::|
    `"")---(""` |___.|
    /:::::::::::\" _  "
    /:::=======:::\`\`\
jgs `"""""""""""""`  '-'

                </pre>

                <h1>Welcome to my Website</h1>
                <p>
                Hey there, I'm Andrei; or as you might know me online, S0x41 or
                GalaxyNova. Currently I'm a full-time first year software systems student. I like
                reading about philosophy, writing and using software, reading books, and learning about
                the universe. I also really like the 80s aesthetic as you can see from this
                amazing web design.
                </p>

                <p>
                I consider myself an open source enthousiast and enjoy the pleasure of
                running Linux (more specifically, <a href="https://nixos.org">NixOS</a> and <a href="https://fedoraproject.org/silverblue/">SilverBlue</a>) as my primary operating system.
                </p>
            </Card>
            <Card style="flex-basis: 300px; flex-shrink: 0">
                <h1>Projects</h1>

                <p>I open source most of my projects on github, here's a few 
                that I think are impressive enough to be included here.</p>
                <br>

                <ul>
                    <li><a href="https://codeberg.org/Andrei/mircy">mIRCy</a> -- a semi functional IRC client</li>
                    <li><a href="https://github.com/AndreiSva/continuity">Continuity</a> -- a fascinating evolution simulator with neural networks</li>
                    <li><a href="https://github.com/AndreiSva/ReversiML">ReversiML</a> -- a reversi AI that is sort of good, built with tensorflow</li>
                </ul>
            </Card>
        </div>
        <Card>
            <h1>What You Can Find Here</h1>

            <p>Depending on when you read this there might be a varying amount of content
                here, but the general things that I am planning to have here are:</p>

            <ul>
                <li>A <a href="/journal">Journal</a>, where I post tidbits of my life or what I'm up to</li>
                <li>A list of my projects as well as my articles</li>
                <li>Links to my friend's websites</li>
                <li>Pictures / attempts at photography</li>
                <li>A wiki / mindmap (maybe)</li>
            </ul>
        </Card>
        <Terminal/>
    </div>
</div>

<style>
  #welcome-container {
    margin-top: 5px;
    margin-right: 5px;
    display: flex;
    flex-direction: row;
  }
  
  @media only screen and (max-width: 1000px) {
    #welcome-container {
      flex-direction: column;
    }

    #left-pannel {
      display: none;
    }
  }

  #left-pannel {
    border-right: 2px solid var(--fg-main-color);
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 300px;
    flex-shrink: 0;
    position: relative;
  }

  .page-content {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

</style>

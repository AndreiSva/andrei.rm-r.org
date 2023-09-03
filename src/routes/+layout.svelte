<script>
  import "$lib/style.css";
  import MastodonLogo from "$lib/icons/mastodon.svg";
  import MatrixLogo from "$lib/icons/matrix.png";
  import GithubLogo from "$lib/icons/github.png";
  import InstagramLogo from "$lib/icons/instagram.png";
  import { onMount } from "svelte";

  function drawLine(ctx, color, start, end) {
    ctx.beginPath();
    ctx.strokeStyle = color;

    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1])

    ctx.stroke();
  }

  onMount(() => {
    const canvas = document.getElementById("synthart");
    const ctx = canvas.getContext("2d");

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.lineWidth = 2;
    ctx.filter = "brightness(50%)";

    const line_color = getComputedStyle(document.documentElement).getPropertyValue("--hl-main-color");

    // vertical lines
    for (let i = 0; i < ctx.canvas.width / 100 * 2; i++) {
      drawLine(ctx, line_color, [-ctx.canvas.width / 2 + i * 100,
    ctx.canvas.height], [i * 50, ctx.canvas.height - 90]);
    }

    // horizonal lines
    for (let i = 0; i < 100; i++) {
      const height = ctx.canvas.height - 100 + (100 / i) * 4;
      drawLine(ctx, line_color, [0, height],
           [ctx.canvas.width, height]);
    }
  });
</script>

<canvas id="synthart">
</canvas>

<div class="frame">
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-decorations">
    <div class="navbar-title">
      <h2>Andrei's Cave</h2>
    </div>
    <div class="social-links">
      <a href="https://sigmoid.social/@s0x41"><img src={MastodonLogo}
                               alt="mastodon icon"></a>
      <a href="https://matrix.to/#/@galaxy-nova:matrix.org"><img src={MatrixLogo}
                                     alt="matrix
                                      icon"></a>
      <a href="https://github.com/AndreiSva"><img src={GithubLogo}
                              alt="github icon"></a>
      <a href="https://www.instagram.com/andreithesova/"><img src={InstagramLogo}
                                  alt="instagram icon"></a>
    </div>
      </div>
      <div class="navbar-elements">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/articles">Writings</a>
        <a href="/journal">Journal</a>
      </div>
    </div>
    <hr>
  </div>
  <div class="page-content">
    <div class="content-body">
      <slot />
    </div>
  </div>
</div>

<style>
  @media only screen and (max-width: 1000px) {
    .navbar-decorations {
      margin-bottom: 30px;
    }
  }


  #synthart {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: -1;
  }

  .frame {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .navbar-title {
    flex-grow: 1;
  }

  .navbar-decorations {
    display: flex;
    flex-direction: row;
  }

  .navbar-elements {
    align-items: center;
    justify-content: center;
    display: flex;
    padding-bottom: 10px;
    flex-shrink: 1;
    flex-grow: 1;
  }

  .page-content {
    height: 100%;
  }

  .navbar-elements > a {
    color: var(--fg-main-color);
    text-shadow: 0 0 5px var(--fg-main-color);
    font-size: 25px;
    font-style: oblique;
    text-decoration: none;
    height: 25px;
  }

  .navbar-elements > a::before {
    content: "<";
    margin-right: 5px;
    color: var(--bg-secondary-color);
    text-shadow: none;
  }

  .navbar-elements > a::after {
    content: ">";
    margin-left: 5px;
    color: var(--bg-secondary-color);
    text-shadow: none;
  }

  .navbar-container {
    display: flex;
    flex-direction: column;
  }

  .navbar-elements > a:hover:after {
    margin-left: 10px;
  }

  .navbar-elements > a:hover:before {
    margin-right: 10px;
  }

  /* TODO: move the social links into their own component*/
  .social-links {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-right: 5px;
    flex-shrink: 0;
    height: 25px;
  }

  .social-links > a {
    margin-left: 10px;
    height: 25px;
  }

  .social-links > a > img {
    width: 25px;
    height: 25px;
    filter: invert(78%) sepia(29%) saturate(4488%) hue-rotate(130deg) brightness(96%) contrast(100%);
  }

  .social-links > a > img:hover {
    filter: invert(23%) sepia(100%) saturate(2415%) hue-rotate(290deg) brightness(87%) contrast(138%);
  }

  :global(.content) {
    max-width: 800px;
    margin: auto;
    margin-top: 50px;
  }

  :global(.code) {
    color: lime;
    padding: 20px;
    background-color: black;
    border: 2px solid lime;
  }

  .content-body {
    height: 100%;
  }
</style>

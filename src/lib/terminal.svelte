<script>
  import { onMount } from "svelte";
  
  let terminalInput = null;
  let terminalOutput;
  let keepfocus = true;

  const osName = "NullOS";
  const osVersion = "1.2.5";

  const files = new Map();

  files.set("francois.txt", `
Our Francois, both Null and One,
Who created the world of mathematics:
Though we cannot see you, know you, we serve you.
For you, great lobster,
We shall spread Moss to the four corners of the world.
We shall spread Moss.
We will keep your COMAS strong;
For you, we calculate in base yon;
And with your aid, soon the world will be PSIIan.
May the Null Identity forever be one in science.
May Null be one in science.
Not a cult.
Not a cult. 
`);

  files.set("email.txt", `
Wow you actually found my email good job. If any spammers find this i will be
extremely suprised.

email: andreisva2023@gmail.com
`);
  
  const commands = new Map();

  commands.set("ls", (argv) => {
    return Array.from(files.keys()).join("\n");
  });

  commands.set("clear", (argv) => {
    return "";
  });

  commands.set("uname", (argv) => {
    return `${osName} ${osVersion} RISC-V SMP`;
  })

  commands.set("cat", (argv) => {
    if (argv.length < 1) {
      return "usage: cat <filename>";
    } else if (files.has(argv[0]) == false) {
      return "no such file or directory";
    }
    return files.get(argv[0]);
  })
  
  commands.set("help", (argv) => {
    return "Commands: \n" + Array.from(commands.keys()).join("\n");
  });

  commands.set("echo", (argv) => {
    return argv.join(" ");
  })

  
  onMount(() => {
    terminalInput.focus();

    terminalInput.addEventListener("keydown", (e) =>
      {
	if (e.keyCode == 37 || e.keyCode == 39) {
          e.preventDefault();
	} else if (e.key == "Enter") {
	  e.preventDefault();
	  const command = terminalInput.innerText.split(" ");
	  terminalInput.innerText = "";
	  if (Array.from(commands.keys()).includes(command[0]) != true) {
	    terminalOutput.innerText = command[0] + ": Command Not Found";
	  } else {
	    terminalOutput.innerText =
	      commands.get(command[0])(command.slice(1));
	    terminalOutput.innerHtml = terminalOutput.innerHTML.replace(/\n?/g, '<br />');
	  }
	  window.scrollTo(0, document.body.scrollHeight)
	} else if (e.key == "Escape") {
	  terminalInput.style.pointerEvents = "all";
	  keepfocus = false;
	}
      });
    
    terminalInput.addEventListener("blur", (e) => {
      terminalInput.innerText = "";
      if (keepfocus == true) {
	setTimeout(() => {
	  terminalInput.focus();
	}, 10);
      }
    });

    terminalInput.addEventListener("focus", (e) => {
      keepfocus = true;
      terminalInput.style.pointerEvents = "none";
    });
  });
</script>

<div id="terminal-container">
  <p>{osName} {osVersion}</p>
  <span id="terminal-input" bind:this={terminalInput} contenteditable=true
        spellcheck="false"></span>
  <br>
  <span id="terminal-output" bind:this={terminalOutput}></span>
</div>

<style>
  #terminal-container {
    margin-left: 20px;
  }

  #terminal-input {
    color: var(--fg-main-color);
    outline: none;
    font-size: 20px;
    caret-color: transparent;
    pointer-events: none;
  }

  #terminal-input::before {
    content: "$ ";
    color: var(--hl-main-color);
  }

  #terminal-input::after {
    content: "▋";
    animation: blink infinite linear 1s;
  }

  #terminal-output {
    color: white;
  }

  @keyframes blink {
    from { opacity: 1; }
    to { opacity: 0; }
  }
</style>

// This is a simple example Widget to get you started with Übersicht.
// For the full documentation please visit:
// https://github.com/felixhageloh/uebersicht
// You can modify this widget as you see fit, or simply delete this file to
// remove it.

// this is the shell command that gets executed every time this widget refreshes
export const command = "grep -E '< ~[a-z-]*: ' /Users/eliana/Documents/Code/urbit.log";

// the refresh frequency in milliseconds
export const refreshFrequency = 1000;

// the CSS style for this widget, written using Emotion
// https://emotion.sh/
export const className =`
  /* POSITION & WIDTH */
  right: 20px;
  bottom: 20px;
  width: 340px;

  /* BACKGROUND & BORDERS */
  opacity: .8;
  box-sizing: border-box;
  padding: 20px;
  padding-top: 0px;
  height: 500px;
  
  /* TEXT FORMATTING */
  margin: auto;
  color: white;
  font-family: Helvetica Neue;
  font-weight: 400;
  line-height: 1.6;
  overflow:auto;
  display: flex;
  flex-direction: column-reverse;

  h1 {
    font-size: 30px;
    margin: 16px 0 8px;
  }

  em {
    font-weight: 400;
    font-style: normal;
  }

  a {
    color: pink;
    font-weight: bold;
    text-decoration: underline dashed;
  }

  input {
    padding: 4px;
    background-color: black;
    color: white;
  }

  input::placeholder {
    font-style: italic;
  }

  #animated {
    margin: auto;
    width: 90%;
    position: relative;
    animation-name: example;
    animation-duration: 6s;
    animation-iteration-count: infinite;
  }
  
  @keyframes example {
    0%   {text-shadow: 1px 1px 10px pink;left:0px; top:0px;}
    10%  {text-shadow: 1px 1px 13px pink;left:0px; top:0px;}
    20%  {text-shadow: 1px 1px 17px pink;left:0px; top:0px;}
    25%  {text-shadow: 1px 1px 20px purple;left:2px; top:3px;}
    35%  {text-shadow: 1px 1px 16px pink;left:4px; top:3px;}
    45%  {text-shadow: 1px 1px 12px pink;left:2px; top:3px;}
    50%  {text-shadow: 1px 1px 10px white;left:0px; top:-1px;}
    60%  {text-shadow: 1px 1px 13px white;left:0px; top:-1px;}
    75%  {text-shadow: 1px 1px 15px green;left:-3px; top:1px;}
    85%  {text-shadow: 1px 1px 13px white;left:0px; top:0px;}
    100% {text-shadow: 1px 1px 10px white;left:-2px; top:-2px;}
  }

  code {
    line-height: 1.2;
  }
`

// render gets called after the shell command has executed. The command's output
// is passed in as a string.
export const render = ({output}) => {
  const emptyInbox = !output;

  if (emptyInbox) {
    return (
      
      <div>
        <div id="animated"><center><h1>|hi, {'dari'}&nbsp;&nbsp;</h1></center></div>
        <p>
          The <a href="https://darigo.su/lol">say |hi</a> widget
          displays the ten most recent |hi messages from your Urbit ship.
        </p>
      
        <i>no one has said <b>|hi</b> yet...</i>
      </div>
    )
  }
  const validOutput = output
    .split('\n')
    .filter(e => e.split('~')[2] !== undefined)
    .slice(-10)
    .map(e => e.split('~')[2].slice(0, -4))
    .map(e => {
      // abbreviate moons
      const parts = e.split('-');
      if (parts.length === 4) {
        return '^' + parts.slice(2).join('-').slice(1)
      }
      return e;
    })
    
  return (
    <div>
      <div id="animated"><center><h1>|hi, {'dari'}&nbsp;&nbsp;</h1></center></div>
      <p>
        The <a href="https://darigo.su/lol">say |hi</a> widget
        displays the ten most recent |hi messages from your Urbit ship.
      </p>
    
      <code>
        {validOutput.map(e => (
          <div>{e}</div>
        ))}
      </code>
    </div>
  );
}

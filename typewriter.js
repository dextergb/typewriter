const sentence = "hello there from lighthouse labs";

let typewriter = (sentence) => {
  let seconds = 500;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write((char) + '\n');

    }, seconds);
    seconds += 100;
  }
};

typewriter(sentence);
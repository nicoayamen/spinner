const spinner = ["\r|", "\r/", "\r-", "\r\\", "\r/", "\r-", "\r\\", "\r|"]

function spin(s) {
  let delay = 100;

  for(i of s) {
    let stored = i
    setTimeout(() => {
      process.stdout.write(stored + "   ");
    }, delay += 200)
  }

  setTimeout(() => {
    console.log("")
  }, delay + 200)
}

spin(spinner)
 // ASCII art digits templates
 const asciiDigits = {
    0: ` ██████ \n██    ██\n██    ██\n██    ██\n ██████ `,
    1: `   ██   \n ████   \n   ██   \n   ██   \n ██████ `,
    2: ` ██████ \n██    ██\n    ██  \n  ██    \n████████`,
    3: ` ██████ \n      ██\n   ████ \n      ██\n ██████ `,
    4: `██    ██\n██    ██\n████████\n      ██\n      ██`,
    5: `████████\n██      \n██████  \n      ██\n ██████ `,
    6: ` ██████ \n██      \n██████  \n██    ██\n ██████ `,
    7: `████████\n     ██ \n    ██  \n   ██   \n  ██    `,
    8: ` ██████ \n██    ██\n ██████ \n██    ██\n ██████ `,
    9: ` ██████ \n██    ██\n ███████\n      ██\n ██████ `,
  };

  // Function to convert a number to an ASCII art representation
  function numberToAscii(number) {
    // Ensure we have two digits with leading zero if needed
    const numberStr = number.toString().padStart(2, "0");

    // Split the ASCII art for each digit into lines
    const digitLines = [];
    for (let i = 0; i < 5; i++) {
      let line = "";
      for (const digit of numberStr) {
        line += asciiDigits[digit].split("\n")[i] + "  ";
      }
      digitLines.push(line);
    }

    return digitLines.join("\n");
  }

  // Function to update countdown
  function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const targetDate = new Date(currentYear, 3, 12); // Month is 0-indexed, so 6 is July

    // If July 1st has already passed this year, set target to next year
    if (now > targetDate) {
      targetDate.setFullYear(currentYear + 1);
    }

    const diff = targetDate - now;

    // Calculate time components
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update ASCII art
    document.getElementById("days-ascii").textContent = numberToAscii(days);
    document.getElementById("hours-ascii").textContent =
      numberToAscii(hours);
    document.getElementById("minutes-ascii").textContent =
      numberToAscii(minutes);
    document.getElementById("seconds-ascii").textContent =
      numberToAscii(seconds);

    // Update message if countdown is over
    if (diff <= 0) {
      document.getElementById("countdown-message").textContent =
        "The date has arrived!";
    } else {
      const targetYear = targetDate.getFullYear();
      document.getElementById(
        "countdown-message"
      ).textContent = `Something cool may just come out on ${targetDate.getDate()}th of ${targetDate.toLocaleString('default', { month: 'long' })} ${targetDate.getFullYear()}`;
    }
  }

  // Initialize countdown
  updateCountdown();

  // Update countdown every second
  setInterval(updateCountdown, 1000);

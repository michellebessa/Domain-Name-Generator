let domainNameGenerator = () => {
  const pronoun = ["the", "our", "their", "her", "his", "my"];

  const adj = [
    "great",
    "big",
    "cute",
    "beautiful",
    "messy",
    "crazy",
    "funny",
    "weird",
    "nice",
    "cool"
  ];
  const noun = [
    "cat",
    "dog",
    "bunny",
    "goat",
    "gnome",
    "lizard",
    "geico",
    "bird"
  ];

  const extension = [".com", ".org", ".net", ".us"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let m = 0; m < adj.length; m++) {
      for (let b = 0; b < noun.length; b++) {
        for (let k = 0; k < extension.length; k++) {}
      }
    }
  }
};

document.querySelector("#the-generator").innerHTML = domainNameGenerator();


const Assets = {

    

  log: ["a", "b", "c"],
  get latest() {
    return this.log[this.log.length - 1];
  },
};

console.log(Assets.latest);
// Expected output: "c"

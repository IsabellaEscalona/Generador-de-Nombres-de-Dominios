let pronoun = ["the", "your", "our"];
let adj = ["great", "nice", "old", "lucky"];
let noun = ["drake", "otter", "shark"];
let ext = [".com", ".net", ".es", ".us"];

for (let i in pronoun) {
  for (let j in adj) {
    for (let x in noun) {
      for (let z in ext) {

        console.log(pronoun[i]+adj[j]+noun[x]+ext[z]);

      }
    }
  }
}

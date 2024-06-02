// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(artistName, style, beat, topSong) {
  const NFT = {
    "name": artistName,
    "style": style,
    "beat": beat,
    "TopSong": topSong
  }
  NFTs.push(NFT);
  console.log("Minted: " + artistName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i + 1));
    console.log("Name: \t\t" + NFTs[i].name);
    console.log("Style: \t\t" + NFTs[i].style);
    console.log("Beat: \t\t" + NFTs[i].beat);
    console.log("Top Song: \t" + NFTs[i].TopSong);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("KRSNA", "Lyrical Rap", "Hardcore Beat", "Ykwim");
mintNFT("Raftaar", "Haryanvi Rap", "Trap Beat", "Ghana Kasoota");
mintNFT("Emiway Bantai", "Commercial Rap", "Afro-Indian Beat", "GRIND");
listNFTs();
getTotalSupply();

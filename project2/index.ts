class Block{
    public index:number;
    public hash:number;
    public previousHash: string;
    public data:string;
    public timestamp: number;

    constructor(
         index:number,
         hash:number,
         previousHash: string,
         data:string,
         timestamp: number,
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, 3333333, " ", 'hello', 123456)

let blockchain: [Block] = [genesisBlock]

console.log(blockchain)

export{};
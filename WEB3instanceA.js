const Web3 = require('web3');
const Migrations = require('./contractA.json');
const HDWalletProvider =require('@truffle/hdwallet-provider');
const address = '0x87b534648f39Bdbc4CE2D761e2f1080e102082cb';
const privatekey = 'daughter fragile wink affair target toss oven item favorite speak decrease toddler';
// const customProvider = {
//     sendAsync : (payload,cd)=>{
//         console.log('You Called');
//         console.log(payload);
//         cb(undefined,100);
//     }
// };
// const provider = new Web3.providers.HttpProvider('http://localhost:9545');
const init = async() =>{
const provider = new HDWalletProvider(
    privatekey,
    'https://rinkeby.infura.io/v3/0d94f54972ce4ba68279cf1b8ecc761b'
)
const web3 = new Web3(provider);
// const id = await web3.eth.net.getId();
// const deployedNetwork = 5777;
let contract = new web3.eth.Contract(
    Migrations.abi,
);
contract = await contract.deploy({ data : Migrations.bytecode})
.send({from: address});
// const addr = web3.eth.getAccounts();
const result = await contract.methods.buyTokenB('0x7272B10630d415502d4b51181DFc75Db144547Ab','0x461B70f0693975A742A12a2b57472931f65D6e5c',50).send({
    from: address});
// const result = await contract.methods.getData().call()
console.log(result);
}
init();

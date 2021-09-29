const Web3 = require('web3');
var addressA = '0xE2654DA8f1463F46BfF2B2eC3Be5203be491a304';
var addressB = '0x514d56472d82A233b48ea118befdFd557870aC5E';
const HDWalletProvider =require('@truffle/hdwallet-provider');
const address = '0x87b534648f39Bdbc4CE2D761e2f1080e102082cb';
const privatekey = '* * * * * * * * * * * *';

const interA = require('./contractA.json');
const interB = require('./contractB.json');

const init = async() =>{
    const provider = new HDWalletProvider(
        privatekey,
        'https://rinkeby.infura.io/v3/e6ae5bf1222b4b569bc3b2c3d874ba9a'
    )
    const web3 = new Web3(provider);
//     const web3 = new Web3(window.ethereum);
// await window.ethereum.enable();

    var conA = new web3.eth.Contract(interA.abi,addressA);
    var conB = new web3.eth.Contract(interB.abi,addressB);
    // const id = await web3.eth.net.getId();
    // const deployedNetwork = 5777;
    // let contract = new web3.eth.Contract(
    //     Migrations.abi,
    // );
    // contract = await contract.deploy({ data : Migrations.bytecode})
    // .send({from: address});
    // const addr = web3.eth.getAccounts();
    // const result = await contrac t.methods.buyTokenB('0x7272B10630d415502d4b51181DFc75Db144547Ab','0x461B70f0693975A742A12a2b57472931f65D6e5c',50).send({
    //     from: address});
    // const result = await conA.methods.buyTokenB(addressA,addressB,50).send({
    //     from: address
    // });

    const result = await conA.methods.balanceOf(addressB).call();
    console.log(result);
    }
    init();

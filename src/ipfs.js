// //using the infura.io node, otherwise ipfs requires you to run a daemon on your own computer/server. See IPFS.io docs
//const IPFS = require('ipfs-api');
//const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

//run with local daemon
// const ipfsApi = require('ipfs-api');
// const ipfs = new ipfsApi('localhost', '5001', {protocol: 'http'});

 //export default ipfs; 


// const ipfsClient = require('ipfs-http-client');
// const projectId = '2LbNwmT7BMhrLGrcagXrOp3QSG8';
// const projectSecret = '709d524be80f331ec0fe939efc251faf';
// const auth =
//     'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
// const client = ipfsClient.create({
//     host: 'ipfs.infura.io',
//     port: 5001,
//     protocol: 'https',
//     headers: {
//         authorization: auth,
//     },
// });
// client.add('Hello Worl').then((res) => {
//     console.log(res);
// });
// export default client;


// import { create } from 'ipfs-http-client'
// const projectId = '2LbNwmT7BMhrLGrcagXrOp3QSG8'; 
// const projectSecret = '709d524be80f331ec0fe939efc251faf'; 
// const auth =
//     'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64'); 
// const ipfs = create({
//     host: 'ipfs.infura.io',
//     port: 5001,
//     protocol: 'https',
//     headers: {
//         authorization: auth,
//     }, 
// }); 

//const ipfs = new ipfsClient({host: "localhost", port:"5001", protocol: "http"});


//export default ipfs;


// class App extends Component {   
//     constructor(props) {    
//       super(props);
//       this.state={
//         buffer: null
//       };   
//     }   
// captureFile=(event) => {
//     event.preventDefault()
//     const file = event.target.files[0]
//     const reader = new window.FileReader() 
//     reader.readAsArrayBuffer(file)
//     reader.onloadend=() => {
//       this.setState({buffer: Buffer(reader.result) }) 
//     }
//     console.log(event.target.files)   
// }   


const ipfsClient = require('ipfs-http-client');
const projectId = "2LbNwmT7BMhrLGrcagXrOp3QSG8";
const projectSecret = "709d524be80f331ec0fe939efc251faf";
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

export default client;



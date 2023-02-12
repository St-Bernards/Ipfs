
import React, { Component,Button } from "react";
import ipfs from "./ipfs";
import Web3 from './web3';
import contract from './storehash';
const web3 = new Web3.providers.HttpProvider("https://eth-goerli.g.alchemy.com/v2/khymXavEslq5lSKHFW9IDC-Xd98_xqSC")

class IPFSUploader extends Component {
  state = {
    buffer: null,
    ipfsHash: "",
    data: ""
  };

  captureFile = event => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.convertToBuffer(reader);
  };

  convertToBuffer = async reader => {
    //file is converted to a buffer for upload to IPFS
    const buffer = await Buffer.from(reader.result);
    //set this buffer-using es6 syntax
    this.setState({ buffer });
  };


  connectWallet = async () => {
    // const connectButton = document.getElementById('connect-button');

    // connectButton.addEventListener('click', function () {
    //   if (typeof window.ethereum === 'undefined') {
    //     console.error('Please install MetaMask first.');
    //   } else {
    //     window.ethereum.enable().then(function (accounts) {
    //       const provider = new ethers.providers.Web3Provider(window.ethereum);
    //       const signer = provider.getSigner();
    //       console.log(signer);
    //     });
    //   }
    // });
  }
  

  onClick = async () => {

    try {
      //bring in user's metamask account address
      //const accounts = await web3.eth.getAccounts();
      //console.log('Sending from Metamask account: ' + accounts[0]);

      this.setState({ ipfsHash: "" });
      await ipfs.add(this.state.buffer, (err, ipfsHash) => {
        console.log(err, ipfsHash);
        this.setState({ ipfsHash: ipfsHash[0].hash });
      });
      // await contract.methods.setValue(ipfsHash[0].hash).send({ from: window.ethereum.selectedAddress });

    } catch (err) {
      console.error(err);
    }
  };

  retrieveData = async () => {
    try {
      await ipfs.cat(this.state.ipfsHash, (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        this.setState({ data: data.toString() })
        console.log(data.toString());
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.captureFile} />
        <button onClick={this.onClick}> Upload to IPFS </button>
        <button onClick={this.retrieveData}> Get Data from IPFS </button>
        <p> IPFS Hash: {this.state.ipfsHash}</p>
        <p>Data: {this.state.data}</p>
        {/* <Button
          onClick={this.connectWallet}>
            {defaultAccount ? "Connected!!" : "Connect"}
        </Button>       */}
          <button onClick={this.connectWallet}> Connect Wallet </button>
        </div>
    );
  }
}

export default IPFSUploader;
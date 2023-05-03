// import web3 library and contract ABI
import contractABI from "./app_abi.json";

const Web3 = require('web3');
const contractABI = require(contractABI);

// connect to local Ethereum network using Ganache
const web3 = new Web3('http://localhost:7545');

// set the contract address and instantiate the contract
const contractAddress = '0x52Fd5e5BF55ba23F24419277C80E1c56dF8479ED';
const contract = new web3.eth.Contract(contractABI, contractAddress);

// define the accounts that can interact with the contract
const adminAccount = '0xA15F3aD2Ab00BFFb660778657C8E29C274594DFC';
const voterAccount = '0xe1fF04298746f17471Cb2277A1E89B80E1Fe0EC9';

const addCandidateForm = document.getElementById('add-candidate-form');
const nameInput = addCandidateForm.elements.namedItem('name');
const manifestoTextarea = addCandidateForm.elements.namedItem('manifesto');

const candidateName = document.querySelector('input[name="name"]').value;
const manifesto = document.querySelector('textarea[name="manifesto"]').value;

const candidateSelect = document.querySelector('select[name="candidateId"]');
const option = document.createElement('option');
option.value = candidate.id;
option.innerHTML = `${candidate.name} - ${candidate.manifesto}`; // display candidate name and manifesto
candidateSelect.appendChild(option);


// Access the values
console.log(nameInput.value);
console.log(manifestoTextarea.value);


// add a new candidate to the election
async function addCandidate(name, manifesto) {
  const result = await contract.methods.addCandidate(name, manifesto).send({from: adminAccount});
  console.log(result);
}

// start the voting process
async function startVoting() {
  const result = await contract.methods.startVoting().send({from: adminAccount});
  console.log(result);
}

// end the voting process
async function endVoting() {
  const result = await contract.methods.endVoting().send({from: adminAccount});
  console.log(result);
}

// cast a vote for a candidate
async function vote(candidateId) {
  const result = await contract.methods.vote(candidateId).send({from: voterAccount, value: web3.utils.toWei('1', 'ether')});
  console.log(result);
}

// add a new voter to the election
async function addVoter(voterAddress) {
  const result = await contract.methods.addVoter(voterAddress).send({from: adminAccount});
  console.log(result);
}

// set the eligibility of a voter
async function setEligibility(voterAddress, isEligible) {
  const result = await contract.methods.setEligibility(voterAddress, isEligible).send({from: adminAccount});
  console.log(result);
}

// add a new admin to the election
async function addAdmin(adminAddress) {
  const result = await contract.methods.addAdmin(adminAddress).send({from: adminAccount});
  console.log(result);
}

// remove an admin from the election
async function removeAdmin(adminAddress) {
  const result = await contract.methods.removeAdmin(adminAddress).send({from: adminAccount});
  console.log(result);
}

// get the total vote count
async function getTotalVoteCount() {
  const result = await contract.methods.getTotalVoteCount().call({from: adminAccount});
  console.log(result);
}

// get the details of a candidate
async function getCandidateDetails(candidateId) {
  const result = await contract.methods.getCandidateDetails(candidateId).call({from: adminAccount});
  console.log(result);
}

// get the eligibility of a voter
async function getVoterEligibility(voterAddress) {
  const result = await contract.methods.getVoterEligibility(voterAddress).call({from: adminAccount});
  console.log(result);
}

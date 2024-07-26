# Technical Specifications

## Overview
The DeFi WavePortal project is a decentralized application (dApp) built on the Ethereum blockchain. It allows users to send virtual "waves" with messages, which are recorded on the blockchain. The application includes a chance to win a small amount of Ether for sending a wave. The project consists of a frontend built with React and a backend smart contract written in Solidity and deployed using Hardhat.

## Frontend

### Technologies Used
- **React**: For building the user interface.
- **ethers.js**: For interacting with the Ethereum blockchain.
- **MetaMask**: For Ethereum wallet integration.
- **CSS**: For styling the application.

### Main Functionalities

1. **Connect Wallet**: 
    - Checks if MetaMask is installed.
    - Connects to the user's MetaMask wallet.
    - Retrieves and stores the user's Ethereum account address.

2. **Send Wave**:
    - Sends a wave with a message to the smart contract.
    - Listens for events to update the UI in real-time.
    - Provides feedback on transaction status (e.g., mining, completed).

3. **Display Waves**:
    - Fetches all waves from the smart contract.
    - Displays each wave's address, timestamp, and message.

### Key Components

1. **App.js**:
    - `useState`, `useEffect`: React hooks for state management and lifecycle events.
    - `ethers`: Library to interact with the Ethereum blockchain.
    - `getAllWaves`: Fetches all waves from the smart contract and updates the state.
    - `checkIfWalletIsConnected`: Checks for MetaMask wallet connection.
    - `connectWallet`: Connects to MetaMask and retrieves the account.
    - `wave`: Sends a wave transaction to the smart contract.
    - Event listeners for real-time updates.

2. **App.css**:
    - Contains the CSS styles for the application.

## Backend (Smart Contract)

### Technologies Used
- **Solidity**: Programming language for writing smart contracts.
- **Hardhat**: Ethereum development environment for compiling, deploying, and testing smart contracts.
- **Alchemy**: Ethereum API for connecting to the blockchain.

### Main Functionalities

1. **Wave Function**:
    - Allows users to send a wave with a message.
    - Implements a cooldown period of 30 seconds between waves for each user.
    - Generates a random number (seed) to determine if the user wins a prize.
    - Transfers a prize amount to the user if they win.

2. **Get All Waves**:
    - Retrieves all waves stored in the contract.

3. **Get Total Waves**:
    - Retrieves the total number of waves sent.

### Key Files

1. **WavePortal.sol**:
    - `wave`: Function to send a wave and handle the business logic.
    - `getAllWaves`: Function to retrieve all waves.
    - `getTotalWaves`: Function to retrieve the total number of waves.
    - `Wave` struct: Data structure to store wave information.
    - `NewWave` event: Event emitted when a new wave is sent.
    - `lastWavedAt`: Mapping to store the last wave timestamp for each user.
    - `seed`: Random number used for prize determination.

2. **deploy.js**:
    - Deploys the WavePortal contract to the Ethereum network.

3. **run.js**:
    - Script to interact with the contract for testing purposes (e.g., sending waves, checking balances).

4. **hardhat.config.js**:
    - Configuration file for Hardhat, including network settings and API keys.

## Usage

1. **Setup Environment**:
    - Install dependencies with `npm install`.
    - Configure Alchemy API and private key in `.env` file.

2. **Deploy Contract**:
    - Deploy the smart contract using Hardhat with `npx hardhat run scripts/deploy.js --network rinkeby`.

3. **Run Frontend**:
    - Start the React application with `npm start`.

4. **Interact with dApp**:
    - Open the application in the browser.
    - Connect MetaMask wallet.
    - Send waves and view wave history.

## License
This project is licensed under the MIT License.

## Acknowledgments
- [Hardhat](https://hardhat.org/)
- [MetaMask](https://metamask.io/)
- [Alchemy](https://www.alchemy.com/)
- [ethers.js](https://docs.ethers.io/v5/)

---

This detailed technical specification should provide a comprehensive understanding of your DeFi WavePortal project, its functionalities, and how to set it up and use it.

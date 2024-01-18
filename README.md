<div align="center">
  <a href="https://particle.network/">
    <img src="https://i.imgur.com/xmdzXU4.png" />
  </a>
  <h3>
    Particle Auth Web3Modal V3 Demo
  </h3>
</div>

⚡️ Demo application showcasing the utilization of a custom Particle Auth connector (`ParticleWalletConnector`) with Web3Modal V3, facilitating connection through social logins. This does not use Particle Auth Core currently, the more modern version of Particle Auth, although `ParticleWalletConnector` is quite malleable. 

Built using **Particle Auth**, **TypeScript**, **Web3Modal**

## 🔑 Particle Auth
Particle Auth, a component of Particle Network's Wallet-as-a-Service, enables seamless onboarding to an application-embedded MPC-TSS/AA wallet facilitated by social login, such as Google, GitHub, email, phone number, etc.

![Demo screenshot](https://i.imgur.com/yb71b4F.png)

##

👉 Learn more about Particle Network: https://particle.network

🛠️ Try the demo: https://web-demo.particle.network/

## 🛠️ Quickstart

### Clone this repository
```
git clone https://github.com/TABASCOatw/particle-web3modal-v3-demo.git
```

### Install dependencies
```
yarn install
```
OR
```
npm install
```

### Set environment variables
This project requires a number of keys from Particle Network and WalletConnect to be defined in `.env`. The following should be defined:
- `REACT_APP_APP_ID`, the ID of the corresponding application in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
- `REACT_APP_PROJECT_ID`, the ID of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `REACT_APP_CLIENT_KEY`, the client key of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `REACT_APP_WALLETCONNECT_PROJECT_ID`, the ID of the corresponding project within your [WalletConnect dashboard](https://cloud.walletconnect.com).

### Start the project
```
npm run dev
```
OR
```
yarn dev
```

import { createWeb3Modal } from '@web3modal/wagmi1/react'
import { walletConnectProvider } from '@web3modal/wagmi1'

import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, arbitrum, polygon } from 'wagmi/chains'
import './index.scss';
import { ParticleWalletConnector } from './particleWallet'; 
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID as string;

const { chains, publicClient } = configureChains(
  [mainnet, arbitrum, polygon],
  [walletConnectProvider({ projectId }), publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new ParticleWalletConnector({
      chains,
      options: {
        projectId: process.env.REACT_APP_PROJECT_ID as string,
        clientKey: process.env.REACT_APP_CLIENT_KEY as string,
        appId: process.env.REACT_APP_APP_ID as string,
        chainName: 'Ethereum',
        chainId: 1,
        wallet: {
          displayWalletEntry: true,
        },
        securityAccount: {
          promptSettingWhenSign: 1,
          promptMasterPasswordSettingWhenLogin: 2,
        },
      },
    }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new WalletConnectConnector({ chains, options: { projectId, showQrModal: false } }),
  ],
  publicClient
});

createWeb3Modal({ wagmiConfig, projectId, chains, connectorImages: {'particle': 'https://static.particle.network/particle-icon.svg'} });

const Content = () => {
  return (
    <div className="connect-content">
      <w3m-connect-button />
    </div>
  );
};

const PageWeb3Modal = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Content />
    </WagmiConfig>
  );
};

export default PageWeb3Modal;

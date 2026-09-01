import LifiSwidgeProtocol from '../../types/index.js'
import { WalletAccountReadOnlyEvmErc4337 } from '@tetherto/wdk-wallet-evm-erc-4337'

declare const account: WalletAccountReadOnlyEvmErc4337

new LifiSwidgeProtocol(account)

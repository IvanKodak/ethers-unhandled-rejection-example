import {ethers, FetchRequest, Network} from "ethers";

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

async function main() {
    try {
        const chainId = 421614;
        const fetchRequest = new FetchRequest('https://arb-sepolia.nirvanalabs.xyz/devNode-qz736?apikey=43892a79fb674a1ee81caeb05213dab8065a');

        // NOTE: by default batching is enable, "batchMaxCount: 1" disables requests batching
        const provider = new ethers.JsonRpcProvider(fetchRequest, chainId, {
            staticNetwork: Network.from(chainId),
            batchMaxCount: 1,
        });

        await provider.waitForTransaction('0xf528f577742dac59f04f4a73d6e3483ffadb6f38824eddbb63f7da7ad168ee2b', 10, 250)
    } catch (e){
        // TODO: error "server response 401 Unauthorized" from waitForTransaction doesn't come into this catch
        console.error('TEST', e);
    }
}

main()

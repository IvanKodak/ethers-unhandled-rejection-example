import {ethers, FetchRequest, Network} from "ethers";

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

async function main() {
    try {
        const chainId = 97;
        const fetchRequest = new FetchRequest('https://bsc-rpc.publicnode.com');

        // NOTE: by default batching is enable, "batchMaxCount: 1" disables requests batching
        const provider = new ethers.JsonRpcProvider(fetchRequest, chainId, {
            staticNetwork: Network.from(chainId),
            batchMaxCount: 1,
        });

        await provider.getBlock(49364730, true)
    } catch (e){
        console.error('TEST', e);
    }
}

main()

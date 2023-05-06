import { ethers } from "hardhat";

const addresses = [
	"0x3F93494F69ed04F483F62d284FcDf32b097ce39B"
]

async function main(){
	const c = await ethers.getContractFactory("faucet")
	const cc = await c.attach("0x36264bF7a89983c57375256DCA8B53613B59F40d")
	for (let i=0; i < addresses.length; i++) {
		await cc.requestTokens(addresses[i])
		console.log(i,"requested:", addresses[i])
	}
}

main().catch(e=>{
	console.error(e)	    
	process.exitcode = 1
})

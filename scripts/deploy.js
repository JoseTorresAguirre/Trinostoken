const hre = require("hardhat");

async function main() {
  // Obtener la lista de cuentas disponibles
  const [deployer] = await hre.ethers.getSigners();

  console.log("Desplegando contratos con la cuenta:", deployer.address);

  // Obtener el contrato a desplegar
  const TrinosTOKEN = await hre.ethers.getContractFactory("TrinosTOKEN");

  // Especificar las direcciones para el constructor
  const initialMintAddress = "0xAAE1f29E49d035DC84Cef0EB9c9F2505cB1428aA"; // Reemplaza con tu dirección de wallet

  // Desplegar el contrato
  const trinosTOKEN = await TrinosTOKEN.deploy(
    deployer.address,
    initialMintAddress
  );

  await trinosTOKEN.deployed();

  console.log("TrinosTOKEN desplegado en:", trinosTOKEN.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

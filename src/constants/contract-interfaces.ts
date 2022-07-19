export const contractInterfaces = {
  TradeTrustERC721: [
    "genesis()",
    "titleEscrowFactory()",
    "burn(uint256)",
    "restore(uint256)",
    "mint(address,address,uint256)",
  ],
  TitleEscrow: [
    "nominate(address)",
    "transferBeneficiary(address)",
    "transferHolder(address)",
    "transferOwners(address,address)",
    "beneficiary()",
    "holder()",
    "active()",
    "beneficiaryNominee()",
    "registry()",
    "tokenId()",
    "isHoldingToken()",
    "surrender()",
    "shred()",
  ],
  TitleEscrowSignable: [
    "transferBeneficiaryWithSig((address,address,address,address,uint256,uint256,uint256),(bytes32,bytes32,uint8))",
    "cancelBeneficiaryTransfer((address,address,address,address,uint256,uint256,uint256))",
  ],
  TitleEscrowFactory: ["create(address,address,uint256)", "getAddress(address,uint256)"],
  AccessControl: [
    "hasRole(bytes32,address)",
    "getRoleAdmin(bytes32)",
    "grantRole(bytes32,address)",
    "revokeRole(bytes32,address)",
    "renounceRole(bytes32,address)",
  ],
  ERC721: [
    "balanceOf(address)",
    "ownerOf(uint256)",
    "approve(address,uint256)",
    "getApproved(uint256)",
    "setApprovalForAll(address,bool)",
    "isApprovedForAll(address,address)",
    "transferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256,bytes)",
  ],
};

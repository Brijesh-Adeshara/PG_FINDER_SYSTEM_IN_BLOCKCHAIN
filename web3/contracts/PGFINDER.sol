// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract PgFinder {
    struct Pg {
        address owner;
        string PgName;
        string PgAddress;
        string PgServices;
        string image;
        address[] Tenants;
        uint256[] BookingAmounts;
    }

    mapping(uint256 => Pg) public PgFind;

    uint256 public numberOfPg = 0;

    function AddPg(
        address _owner,
        string memory _PgName,
        string memory _PgAddress,
        string memory _PgServices,
        string memory _image
    ) public returns (uint256) {
        Pg storage pg = PgFind[numberOfPg];
        pg.owner = _owner;
        pg.PgName = _PgName;
        pg.PgAddress = _PgAddress;
        pg.PgServices = _PgServices;
        pg.image = _image;

        numberOfPg++;

        return numberOfPg - 1;
    }

    function BookPg(uint256 _id) public payable {
        uint256 amount = msg.value;

        Pg storage pg = PgFind[_id];

        pg.Tenants.push(msg.sender);
        pg.BookingAmounts.push(amount);
    }

    function getTenants(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (PgFind[_id].Tenants, PgFind[_id].BookingAmounts);
    }

    function getPG() public view returns (Pg[] memory) {
        Pg[] memory allPG = new Pg[](numberOfPg);

        for (uint i = 0; i < numberOfPg; i++) {
            Pg storage item = PgFind[i];

            allPG[i] = item;
        }

        return allPG;
    }
}

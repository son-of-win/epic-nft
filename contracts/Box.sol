// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Box {
    uint256 private value;

    event ValueChange(uint256 value);

    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChange(newValue);
    }

    function retrieve() public view returns(uint256) {
        return value;
    }
}
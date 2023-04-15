// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SourceLink {
    struct Project {
        address owner;
        string title;
        string description;
        uint256 amountCollected;
        string image;
        address[] suppporters;
        uint256[] donations;
    }
}
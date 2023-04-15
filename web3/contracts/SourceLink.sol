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

    mapping(uint256 => Project) public projects;

    uint256 public projectCount = 0;

    function createProject(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _amountCollected,
        string memory _image
    ) public returns (uint256) {
        Project storage project = projects[projectCount];

        project.owner = _owner;
        project.title = _title;
        project.description = _description;
        project.amountCollected = _amountCollected;
        project.image = _image;

        projectCount++;

        return projectCount - 1;
    }
}
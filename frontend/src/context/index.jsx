import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
// import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0xC13B37B2d0F9A6417232A081F5b3b1aA21777728');
  const { mutateAsync: createProject } = useContractWrite(contract, 'createProject');

  const address = useAddress();
  const connect = useMetamask();

  const publishProject = async (form) => {
    try {
      const data = await createProject([
        address, // owner
        form.title, // title
        form.description, // description
        form.target,
        new Date(form.deadline).getTime(), // deadline,
        form.image
      ])

      console.log("contract call success", data)
    } catch (error) {
      console.log("contract call failure", error)
    }
  }

  const getProjects = async () => {
    const projects = await contract.call('getProjects');

    const parsedCampaings = projects.map((project, i) => ({
      owner: project.owner,
      title: project.title,
      description: project.description,
      target: ethers.utils.formatEther(project.target.toString()),
      deadline: project.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(project.amountCollected.toString()),
      image: project.image,
      pId: i
    }));

    return parsedCampaings;
  }

  const getUserProjects = async () => {
    const allProjects = await getProjects();

    const filteredProjects = allProjects.filter((project) => project.owner === address);

    return filteredProjects;
  }

  const donate = async (pId, amount) => {
    const data = await contract.call('donateToProject', pId, { value: ethers.utils.parseEther(amount)});

    return data;
  }

  const getDonations = async (pId) => {
    const donations = await contract.call('getSupporters', pId);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for(let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString())
      })
    }

    return parsedDonations;
  }


  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createProject: publishProject,
        getProjects,
        getUserProjects,
        donate,
        getDonations
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);

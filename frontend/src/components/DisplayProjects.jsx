import React from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayProjects = ({ title, isLoading, projects }) => {
  const navigate = useNavigate();

  const handleNavigate = (project) => {
    navigate(`/project-details/${project.title}`, { state: project })
  }

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-xl text-left">
        {title} ({projects.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && projects.length === 0 && (
          <p className="font-epilogue font-semibold text-m leading-[30px]">
            There are no projects. Please check back later.
          </p>
        )}

        {!isLoading && projects.length > 0 && projects.map((project) => <FundCard 
          key={project.id}
          {...project}
          handleClick={() => handleNavigate(project)}
        />)}
      </div>
    </div>
  )
}

export default DisplayProjects
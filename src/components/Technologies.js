import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

const Tag = styled.span`
  background-color: rgba(87, 199, 255, 0.2);
  color: black;
  font-weight: bold;
  border-radius: 25px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: 2px;
  margin-right: 2px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: 2px;
  font-size: 12px;
`;

const TechnologiesHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 8px;
  margin-right: 8px;
  justify-content: center;
  margin-bottom: 12px;
`;

const Technologies = () => {
  const allTechnologies = useStaticQuery(graphql`
    query AllStrapiTechnologyQuery {
      allStrapiTechnology {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  const technologies = allTechnologies.allStrapiTechnology.edges;

  return (
    <TechnologiesHolder>
      {technologies.map((technology, index) => (
        <Tag key={index}>{technology.node.name}</Tag>
      ))}
    </TechnologiesHolder>
  );
};

export default Technologies;

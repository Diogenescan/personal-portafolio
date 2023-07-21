import dev from '../assets/images/services/dev.png';
import data from '../assets/images/services/data.png';
import other from '../assets/images/services/other.png';

import backend from '../assets/images/areas/backend.png'
import frontend from '../assets/images/areas/frontend.png'
import analysis from '../assets/images/areas/analysis.png'
import science from '../assets/images/areas/science.png'
import visualization from '../assets/images/areas/visualization.png'
import teaching from '../assets/images/areas/teaching.png'

import python from '../assets/images/tech/python.png';
import c_plus from '../assets/images/tech/c++.png';
import javascript from '../assets/images/tech/javascript.png';
import typescript from '../assets/images/tech/typescript.png';
import react from '../assets/images/tech/react.png';
import html from '../assets/images/tech/html.png';
import css from '../assets/images/tech/css.png';
import postgresql from '../assets/images/tech/postgresql.png';
import mysql from '../assets/images/tech/mysql.png';
import sqlserver from '../assets/images/tech/sql_server.png';
import mongodb from '../assets/images/tech/mongo_db.png';
import fastapi from '../assets/images/tech/fastapi.png';
import git from '../assets/images/tech/git.png';
import docker from '../assets/images/tech/docker.png';

import freelance from '../assets/images/work/udea.png';
import pmi from '../assets/images/work/pmi.png';
import finandina from '../assets/images/work/finandina.png';
import qbytes from '../assets/images/work/qbytes.png';

const banner = {
    title: "My name is Santiago Pérez",
    subtitle: "Welcome to my personal portafolio. Here you will find some of my public projects regarding:",
    skills: {
        'name': ["Software Engineering", "Data Science, Machine learning and Statistics", "Physics, Quantum Computing and Math"],
        'id': ['dev', 'data', 'other'],
        'icon': [dev, data, other],
        'path' : ['/personal-portafolio/projects/development', '/personal-portafolio/projects/data', '/personal-portafolio/projects/other']
    }
}

const summary = {
    title: "Who Am I?",
    subtitle: "Hi, i'm a Data Scientist, Software Engineer and physicist from Colombia.",
    section_1: "I have been diligently studying and working in the fields of mathematics and statistics for over five years.\n" +
               "Delved into statistics to enrich my understanding of quantum mechanics,\n" +
               "which further led me to explore the exciting field of data science.",
    section_2: "In my career, I have developed algorithms and models that significantly bolstered the revenue of the companies I have been part of.\n" +
               "Tackled commercial projects, such as building churn/retention models, as well as larger-scale endeavors.\n" +
               "Notably, I developed models where I served as a specialized data scientist in fraud detection.",
    section_3: "I have also worked as a full-stack software engineer. In this role,\n" +
               "I developed web platforms that leverage data science to enhance the efficiency of tasks that otherwise would be highly time-consuming.\n" +
               "Using tools like graph theory, machine learning and data validation to government-level standards."
}

const areas = {
    title: "Work Areas",
    subtitle: "I have worked in I.T and science in a range of áreas that goes from:\n" +
              "web development, data science, data analysis, teaching and research.\n" +
              "In each one creating models, web applications, database architectures and great new improvements.",
    backend_software: {
        title: "Backend Software Engineering",
        description: "I have been working as a backend software engineer for more than 2 years.\n" +
                     "Designing, creating and deploying web applications from scratch.\n" +
                     "From database architecture to API design and deployment.",
        image: backend
    },
    frontend_software: {
        title: "Frontend Software Engineering",
        description: "I have been working as a frontend software engineer for almost two years.\n" +
                     "First as a hobby and then professionally.\n" +
                     "As a need to create better and more valuable web applications and to become a full-stack software engineer.",
        image: frontend
    },
    data_science: {
        title: "Data Science",
        description: "Specialized as a data scientist in the industry.\n" +
                     "I have been working as a data scientist for more than 3 years.\n" +
                     "Designing, creating and deploying models that have been used in production.\n" +
                     "From algorithmic rules to machine and deep learning models.",
        image: science
    },
    data_analysis: {
        title: "Data Analysis",
        description: "Dealing with data analysis for almost 10 years.\n" +
                     "Processing and analysing scientific data,\n" +
                     "then working in the industry analysing and presenting data in a valuable way.",
        image: analysis
    },
    data_visualization: {
        title: "Data Visualization",
        description: "Using the power of programming to create automated data visualization tools.\n" +
                     "Like dashboards, reports, graphs and more to be able to show data in a valuable way\n" +
                     "to specialists and non-specialists in the field.",
        image: visualization
    },
    teaching: {
        title: "Teaching",
        description: "As one of my greatest passions in life i have been teaching for more than 10 years.\n" +
                     "Teaching physics, math and programming to kids, teenagers and adults,\n" +
                     "in a range of topics from basic to advanced, from school to university level, remote and in person.",
        image: teaching
    }
};

const technologies = [
    {name: 'Python', icon: python},
    {name: 'C++', icon: c_plus},
    {name: 'JavaScript', icon: javascript},
    {name: 'TypeScript', icon: typescript},
    {name: 'HTML', icon: html},
    {name: 'CSS', icon: css},
    {name: 'React', icon: react},
    {name: 'FastAPI', icon: fastapi},
    {name: 'PostgreSQL', icon: postgresql},
    {name: 'MySQL', icon: mysql},
    {name: 'SQL Microsoft Server', icon: sqlserver},
    {name: 'Mongo DB', icon: mongodb},
    {name: 'Git', icon: git},
    {name: 'Docker', icon: docker},
];

const experiences = [
    {title: 'Teacher', company_name: 'Freelance', icon: freelance, iconBg: '#333333', date: 'Jan 2017 - Present',},
    {title: 'Data Analyst', company_name: 'Phillip Morris International', icon: pmi, iconBg: '#333333', date: 'May 2022 - Mar 2021',},
    {title: 'Data Scientist', company_name: 'Finandina Bank', icon: finandina, iconBg: '#333333', date: 'Mar 2021 - Sep 2022',},
    {title: 'Full Stack Developer and Data Scientist', company_name: 'qBytes', icon: qbytes, iconBg: '#333333', date: 'Mar 2022 - Present',},
];


export {banner, summary, areas, technologies, experiences};
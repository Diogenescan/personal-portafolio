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
    skills: ["Software Engineering", "Data Science, Machine learning and Statistics", "Physics, Quantum Computing and Math"]
}

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


export {banner, technologies, experiences};
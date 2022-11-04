import React from 'react';
import styled from '@emotion/styled';

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <AppFooter>
        <span>&copy; {year} Silly Goose On The Loose. All rights reserved.</span>
        <div className='divider' />
        <nav id="legal-menu">
            <a href="#">Privacy</a>
            <a href="#">Terms of Service</a>
        </nav>
    </AppFooter>
  )
}

const AppFooter = styled.footer`
    display: absolute;
    bottom: 0;
    right: 0; 
    left: 0;
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 0 25px;
    font-size: 0.9em;
    background: rgba(232, 235, 245, 0.4);
    color: #707070;

    

    .divider {
        width: 1px;
        height: 20px;
        border-left: 1px solid #707070;
    }

    nav a {
        text-decoration: none;
        color: #707070;
        padding-right: 25px;
        transition: color 0.2s ease;

        &:hover {
            color: #000;
        }
    }

    @media screen and (max-width: 700px) {
        font-size: 0.7em;
        padding: 0 15px;
        gap: 15px;

        nav a {
            padding-right: 10px;
        }
    }
`;
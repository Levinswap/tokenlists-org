import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../assets/logo/logo.svg'

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);
  z-index: 999;
  border-bottom: 0.75px solid #13131320;

  a {
    color: #2a2e3a;
  }

  .title {
    font-size: 1.25rem;
    font-family: 'MatterSQ-SemiBold';
  }

  @media screen and (max-width: 640px) {
    position: relative;
  }
`

const Nav = styled.nav`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  margin-right: 16.9%;

  > * {
    margin-left: 1rem;
  }
`

const ButtonLink = styled.a`
  transition: box-shadow 0.25s ease, translate 0.25s ease;
  background-color: #463e53;
  border-radius: 5px;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.65rem;
  color: white;
  font-size: 14px;
  scale: 1;
  :hover {
    box-shadow: -4px 4px 0px rgba(162, 115, 149, 0.5);

    translate: 1px -1px;
  }
`

export default function Header({ back }) {
  return (
    <StyledHeader>
      <Link style={{ marginLeft: '17.2%', display: 'flex', alignItems: 'center' }} to="/">
        <img width={22} src={logo} alt="logo" />
        <span className="title" style={{ marginLeft: '0.8rem' }}>
          Token Lists
        </span>
      </Link>

      <Nav>
        <a target="_blank" rel="noopener noreferrer" className="hide-small" href="https://discord.gg/F6pKMPNHE7">
          Discord
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hide-small"
          href="https://uniswap.org/blog/token-lists/"
        >
          Why lists?
        </a>
        <a
          className="hide-small"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Uniswap/token-lists"
        >
          Make a list
        </a>

        <ButtonLink
          className="button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Levinswap/token-lists"
        >
          <img
            style={{
              filter: 'invert(1)',
              width: 16,
              marginRight: 8,
            }}
            src="https://raw.githubusercontent.com/feathericons/feather/master/icons/github.svg"
            alt="github icon"
          />
          <span style={{ color: 'white' }}>GitHub</span>
        </ButtonLink>
      </Nav>
    </StyledHeader>
  )
}

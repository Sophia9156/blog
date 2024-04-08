"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Navigation: React.FC = () => {
  const path = usePathname();

  return (
    <StyledNav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navigation;

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export interface SubLinkProps {
  id: string;
  path: string;
  name: string;
  subLinks?: SubLinkProps[];
}

export interface NavLinkProps {
  id: string;
  path: string;
  name: string;
  subLinks?: SubLinkProps[];
}

export interface NavDropdownProps extends NavLinkProps { }

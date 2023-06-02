import styled from "styled-components";

const Wrap = styled.div`
  width: 1400px;
  margin: 0 auto;
  background-color: black;
`;

const ListItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
`;

const ListItem = styled.li`
  > a {
    color: white;
    margin: 15px;
  }
`;

const dummy = [
  { name: "Product", href: "#none" },
  { name: "Industried", href: "#none" },
  { name: "Resources", href: "#none" },
  { name: "Customers", href: "#none" },
  { name: "Partners", href: "#none" },
  { name: "Developers", href: "#none" },
  { name: "Events", href: "#none" },
  { name: "Company", href: "#none" },
];

export const Header = () => {
  return (
    <Wrap>
      <HeaderItem />
    </Wrap>
  );
};

const HeaderItem = () => {
  return (
    <ListItems>
      {dummy.map((e, idx) => (
        <HeaderItems name={e.name} href={e.href} key={idx} />
      ))}
    </ListItems>
  );
};

const HeaderItems = (props) => {
  return (
    <ListItem>
      <a href={props.href}>{props.name}</a>
    </ListItem>
  );
};

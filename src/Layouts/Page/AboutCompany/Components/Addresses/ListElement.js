import styled from "styled-components";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import EditIcon from "../../../../../Icons/EditIcon";
import RemoveIcon from "../../../../../Icons/RemoveIcon";
import IconOnlyButton from "../../../../../Components/IconOnlyButton.js";

const Option = styled.div`
  outline: none;
  border-radius: 0px;
  background-color: transperant;
  color: #0F172A;
`;

function ListElement(props) {
  return (
    <div className="d-flex align-items-center align-self-stretch gap-2">
      <Option className="flex-grow-1 pe-2 py-2">{props.children}</Option>
      <IconOnlyButton icon={<EditIcon />} />
      <IconOnlyButton icon={<RemoveIcon />} />
    </div>
  );
}

export default ListElement;

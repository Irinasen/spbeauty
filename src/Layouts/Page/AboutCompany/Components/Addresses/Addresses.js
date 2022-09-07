import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
  return (
    <div className="d-inline-flex flex-column gap-2 flex-grow-1 p-3 border rounded justify-content-between p-4">
      <div className="d-flex flex-column gap-4">
        <div className="title">Адреса заведений</div>
        <div className="d-inline-flex flex-column gap-2">
          <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
          <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
        </div>
      </div>
      <div className="d-inline-end align-self-start mt-auto bd-highlight">
        <SecondaryButton>Добавить филиал</SecondaryButton>
      </div>
    </div>
  );
}

export default Addresses;

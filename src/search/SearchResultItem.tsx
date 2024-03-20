import { SearchResultItemType } from "../models/SearchResultItemType";

export const SearchResultItem = ({
  item, 
  onItemClick
}:{
  item: SearchResultItemType,
  onItemClick: (item: SearchResultItemType) => void
}) => {
  return (
    <li className="search-result" onClick={() => onItemClick(item)}>
      <a className="panel-block">
        <span className="city">{item.name}</span>,&nbsp;
        <span className="state">{item.state}</span>,&nbsp;
        <span className="country">{item.country}</span>
      </a>
    </li>
  );
};

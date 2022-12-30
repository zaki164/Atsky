import { data } from '../../constants';
import './SearchItems.scss';

const SearchItems = () => {
  return (
    <section className='searchItems'>
      <h2>Top Search Items</h2>
      <div className="head flex_between">
        <span className='p_custom'>Keyword</span>
        <span className='p_custom'>Search Count</span>
      </div>
      <ul className='flex-column'>
        {
          data.SearchData.map((ele, i) => 
          (
            <li key={i} className="flex_between fs_15">
              <span>{ele.title}</span>
              <span className='d-block custom_btn num'>{ele.num}</span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default SearchItems
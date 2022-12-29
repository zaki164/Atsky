import './SearchItems.scss';

const SearchItems = () => {
  const SearchData = [
    {
      title: "Programming",
      num: 220
    },
    {
      title: "JavaScript",
      num: 180
    },
    {
      title: "PHP",
      num: 160
    },
    {
      title: "Code",
      num: 145
    },
    {
      title: "Design",
      num: 110
    },
    {
      title: "Logic",
      num: 95
    },
    {
      title: "React",
      num: 88
    },
  ]
  return (
    <section className='searchItems'>
      <h2>Top Search Items</h2>
      <div className="head flex_between">
        <span className='p_custom'>Keyword</span>
        <span className='p_custom'>Search Count</span>
      </div>
      <ul className='flex-column'>
        {
          SearchData.map((ele, i) => 
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
import { useState, useEffect } from 'react'

function App() {
  const [input, setInput] = useState('')

  useEffect(() => {
    setInputFromUrl()
  }, [])

  const searchList = [
    {
      name: 'メルカリ',
      url: 'https://jp.mercari.com/search?category_id=5&keyword=',
    },
    { name: 'ラクマ', url: 'https://fril.jp/s?category_id=10007&query=' },
    {
      name: 'Yahooフリマ',
      url: 'https://paypayfleamarket.yahoo.co.jp/search/',
    },
    {
      name: 'ブックオフ',
      url: 'https://shopping.bookoff.co.jp/search/keyword/',
    },
    { name: 'Amazon', url: 'https://www.amazon.co.jp/s?i=stripbooks&k=' },
  ]

  const search = (url) => {
    window.open(url + input, '_blank')
  }
  const searchAll = () => {
    searchList.forEach((searchItem) => {
      search(searchItem.url)
    })
  }
  const setInputFromUrl = () => {
    const url = new URL(window.location.href)
    const params = url.searchParams
    const query = params.get('q')
    setInput(query || '')
  }

  return (
    <>
      <h1>book-searcher</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="本のタイトルを入力"
      />
      <button
        onClick={() => {
          searchAll()
        }}
      >
        一括検索
      </button>
      <ul>
        {searchList.map((searchItem, index) => (
          <li key={index}>
            <button onClick={() => search(searchItem.url)}>
              {searchItem.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

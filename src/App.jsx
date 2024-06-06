import { useState, useEffect } from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'

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
    <Container>
      <h1>book-searcher</h1>
      <TextField
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="本のタイトルを入力"
      />
      <List>
        <ListItem>
          <Button
            variant="contained"
            onClick={() => {
              searchAll()
            }}
          >
            一括検索
          </Button>
        </ListItem>
        {searchList.map((searchItem, index) => (
          <ListItem key={index}>
            <Button variant="outlined" onClick={() => search(searchItem.url)}>
              {searchItem.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default App

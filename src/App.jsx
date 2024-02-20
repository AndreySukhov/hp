import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {SearchForm} from "./components/SearchForm/index.jsx";
import React, {useState} from "react";
import {SearchResults} from "./components/SearchResults/index.jsx";
import {SearchListNavigation} from "./components/SearchListNavigation/index.jsx";
import {useCharectersList} from "./hooks/useCharectersList.js";
import {API_URL} from "./utils/constants.js";

const STATUSES = {
    'loading': 'loading',
    'success': 'success'
}

const getUrl = (searchQuery = '', currentPage = 1) => {
    const url = new URL(API_URL);
    url.searchParams.set('page[size]', '20')
    if (searchQuery.trim().length) {
        url.searchParams.set('filter[name_cont]', searchQuery)
    }
    if (currentPage > 1) {
        url.searchParams.set('page[number]', currentPage.toString())
    }
    return url
}


const App = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [url, setUrl] = useState(() => {
        return getUrl()
    });

    const handleQueryUpdate = (val) => {
        setCurrentPage(1);
        setSearchQuery(val);
        setUrl(getUrl(val, 1))
    }

    const handlePageUpdate = (val) => {
        setCurrentPage(val)
        setUrl(getUrl(searchQuery, val))
    }

    const {
        status,
        results,
        pagination,
    } = useCharectersList(url, STATUSES)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Harry Potter Characters</h1>
      <SearchForm
        onSubmit={(value) => handleQueryUpdate(value)}
      />
        <SearchResults
            isLoading={status === STATUSES.loading}
            results={results}
        />
        {status === STATUSES.success && pagination && (
            <SearchListNavigation
                handlePageSet={(val) => handlePageUpdate(val)}
                currentPage={currentPage}
                next={pagination.next}
            />
        )}
    </>
  )
}

export default App

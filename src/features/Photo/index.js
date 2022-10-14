import { Routes, Route } from 'react-router-dom'
import AddEditPage from './pages/AddEdit'
import MainPage from './pages/Main'

function Photo() {
    return ( 
        <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="add" element={<AddEditPage />} />
            <Route path=":id" element={<AddEditPage />} />
        </Routes>
     );
}

export default Photo;
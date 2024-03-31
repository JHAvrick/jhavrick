import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { IconContext } from 'react-icons'
import HomePage from './page/home'
import ArticlesPage from './page/articles'
import ContactPage from './page/contact'
import ProjectsPage from './page/projects'


function App() {
	return (
		<Router>
			<IconContext.Provider value={{ style: { marginTop: 2 } }}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/articles" element={<ArticlesPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</IconContext.Provider>
		</Router>
	)
}

export default App

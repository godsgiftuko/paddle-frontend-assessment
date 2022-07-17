import { lazy } from 'react';
import { useRoutes, Navigate, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/Layouts/MainLayout';
import ComingSoon from '../pages/ComingSoon';
import Blog from '../pages/Blog';
import About from '../pages/About';
import TrendingRepos from '../pages/TrendingRepos';


export default function Routes_() {
	const routes = useRoutes([
		{
			element: <Navigate replace to='/comingsoon' />,
			path: '/'
		},
        { path: 'comingsoon', element: <MainLayout children={<ComingSoon />} /> },
        { path: 'blog', element: <MainLayout children={<Blog />} /> },
        { path: 'about', element: <MainLayout children={<About />} /> },
        { path: 'github', element: <MainLayout children={<TrendingRepos />} /> },
	]); 

    return routes;
}

import { lazy } from 'react';
import { useRoutes, Navigate, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/Layouts/MainLayout';


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

const ComingSoon = lazy(() => import('../pages/ComingSoon'));
const About = lazy(() => import('../pages/About'));
const Blog = lazy(() => import('../pages/Blog'));
const TrendingRepos = lazy(() => import('../pages/TrendingRepos'));

import {createBrowserRouter, RouterProvider, RouteObject} from "react-router-dom";
import DemoList from "./default/DemoList";
import {default as ErrorPage} from './default/Error';

export default function App() {
    const routes: RouteObject[] = [];
    DemoList.forEach((demo) => {
        routes.push({
            path: demo.path,
            element: demo.demo,
            errorElement: <ErrorPage/>
        });
    })
    const router = createBrowserRouter(routes);
    return <RouterProvider router={router}/>;
}

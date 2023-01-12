import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {default as Base} from './base';
import {default as Absolute} from './absolute';
import {default as VoiceControl} from './voiceControl';
import {default as ErrorPage} from './default/Error';

export default function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Base/>,
            errorElement: <ErrorPage />,
        },
        {
            path: '/absolute',
            element: <Absolute/>
        },
        {
            path: '/voiceControl',
            element: <VoiceControl/>
        }
    ]);
    return <RouterProvider router={router}/>;
}

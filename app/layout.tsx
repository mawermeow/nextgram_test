import './global.css';
import PageAnimatePresence from "./components/HOC/PageAnimatePresence";
import Navigation from "./components/Navigation";

export const metadata = {
    title: 'NextGram',
    description:
        'A sample Next.js app showing dynamic routing with modals as a route.',
    metadataBase: new URL('https://nextgram.vercel.app'),
};

export default function RootLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <html>
        <body>
        {props.children}
        <PageAnimatePresence>{props.modal}</PageAnimatePresence>
        <Navigation/>
        </body>
        </html>
    );
}

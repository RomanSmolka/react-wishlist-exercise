import React, { useContext } from 'react';
import './styles/App.scss';
import BookSearch from './components/BookSearch';
import Wishlist from './components/Wishlist';
import { ReactComponent as Icons } from './images/icons.svg';

import WishlistContextProvider, { WishlistContext, WishlistContextType } from './shared/context/wishlist';

function Layout() {
    const { sidebarOpen, triggerSidebar } = useContext(WishlistContext) as WishlistContextType;
    return (
        <div className={`app ${sidebarOpen ? "sidebar-open" : ""}`}>
            <main>
                <BookSearch />
            </main>
            <aside>
                <Wishlist />
            </aside>
            <button 
                className="sidebar-trigger clickable"
                title="Open/close wishlist"
                onClick={ triggerSidebar }
            >
                <svg className="icon icon--20">
                    <use href={sidebarOpen ? "#icon-close" : "#icon-bullet-list"}></use>
                </svg>
            </button>
        </div>
    );
}

function App() {
    return (
        <WishlistContextProvider>
            <Icons className="hidden" />
            <Layout />
        </WishlistContextProvider>
    );
}

export default App;

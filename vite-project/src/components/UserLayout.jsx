import React from 'react';

const UserLayout = () => {
    const layoutStyle = {
        display: 'grid' as const,
        gridTemplateAreas: `
            'header header header header'
            'navigation navigation navigation navigation'
            'menu main main article'
        `,
        gridTemplateRows: 'auto auto 1fr',
        gridTemplateColumns: '200px 1fr 1fr 200px',
        height: '100vh',
        fontFamily: 'Arial, sans-serif'
    };

    return (
        <div style={layoutStyle}>
            <Header />
            <Navigation />
            <Menu />
            <Main />
            <Article />
        </div>
    );
}

const Header = () => {
    const headerStyle = {
        gridArea: 'header',
        backgroundColor: '#cccc23',
        display: 'flex' as const,
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
        padding: '0 20px',
        color: 'black'
    };

    return (
        <header style={headerStyle}>
            <div>Header</div>
        </header>
    );
}

const Navigation = () => {
    const navStyle = {
        gridArea: 'navigation',
        display: 'flex' as const,
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
        backgroundColor: '#ddd',  // Light gray background for visibility
        padding: '10px 0',
    };

    return (
        <nav style={navStyle}>
            <div>Navigation</div>
        </nav>
    );
}

const Menu = () => {
    const menuStyle = {
        gridArea: 'menu',
        backgroundColor: '#66cc99',
        display: 'flex' as const,
        flexDirection: 'column' as const,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
        color: 'white'
    };

    return (
        <aside style={menuStyle}>
            Menu
        </aside>
    );
}

const Main = () => {
    const mainStyle = {
        gridArea: 'main',
        display: 'grid' as const,
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        padding: '10px',
        backgroundColor: '#f8f8f8'
    };

    const cartItemStyle = {
        backgroundColor: 'pink',
        display: 'flex' as const,
        alignItems: 'center' as const,
        justifyContent: 'center' as const
    };

    return (
        <main style={mainStyle}>
            {[...Array(12)].map((_, index) => (
                <div key={index} style={cartItemStyle}>Cart {index + 1}</div>
            ))}
        </main>
    );
}

const Article = () => {
    const articleStyle = {
        gridArea: 'article',
        backgroundColor: '#b3d9ff',
        display: 'flex' as const,
        flexDirection: 'column' as const,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
        color: 'black'
    };

    return (
        <article style={articleStyle}>
            Article
        </article>
    );
}

export default UserLayout;
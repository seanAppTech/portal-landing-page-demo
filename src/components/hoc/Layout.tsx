import * as React from 'react';
import MainAppBar from '../ui/MainAppBar/MainAppBar';
import Footer from '../ui/Footer/Footer';

interface LayoutProps {
    children?: React.ReactNode;
  }

export default class Layout extends React.Component<LayoutProps, {}> {
    render() {
        return (
            <>
                <MainAppBar />
                {this.props.children}
                <div style={{
                    width: '100%',
                    height: '500px'
                }} />
                <Footer />
            </>
        );
    }
}
import * as React from 'react';
import MainAppBar from '../ui/MainAppBar/MainAppBar';

interface LayoutProps {
    children?: React.ReactNode;
  }

export default class Layout extends React.Component<LayoutProps, {}> {
    render() {
        return (
            <>
                <MainAppBar />
                {this.props.children}
            </>
        );
    }
}
import * as React from 'react';

interface LayoutProps {
    children?: React.ReactNode;
  }

export default class Layout extends React.Component<LayoutProps, {}> {
    render() {
        return (
            <>
                props.children
            </>
        );
    }
}
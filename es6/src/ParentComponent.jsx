import * as React from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    return (
        <div className="parentComponent">
            <ChildComponent />;
        </div>
    );
}
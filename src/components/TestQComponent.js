import React from 'react';

function TestQComponent({ questions }) {
    return (
        <div>
            <p>{JSON.stringify(questions)}</p>
        </div>
    );
}

export default TestQComponent;
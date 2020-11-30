import React from 'react';

function TestQComponent({ quizzes, step }) {
    return (
        <div>
            <p>Questions are here</p>
            <p>{JSON.stringify(quizzes)}</p>
        </div>
    );
}

export default TestQComponent;
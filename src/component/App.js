import React, { useState } from 'react';

import data from './data';
import Question from './Questions';

const App = () => {
    const [ question ] = useState(data);

    return (
        <main>
            <div className="container">
                <h3>Arrordion App</h3>
                <section className="info">
                    {question.map(singleQuestion => {
                        return <Question key={singleQuestion.id} {...singleQuestion} />
                    })}
                </section>
            </div>
        </main>
    );
};

export default App;
import React from 'react';

const Tools = () => {
    return (
        <div className="tools">
            {'abcdef'.split('').map((el) => (
                <div className="tool">
                    <img src="/images/tools/Tool1.jpg" alt="" />
                    <div>
                        <h5>Name Tool1</h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tools;

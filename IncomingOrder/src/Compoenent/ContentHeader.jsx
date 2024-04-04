import React from "react";

import '../App.css'

function ContentHeader({name,sub_content}) {
    return (
        <>        
            <div className="card text-white h-50">
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p className="card-text">
                        {sub_content}
                    </p>
                </div>
            </div>
        </>
    );
}

export default ContentHeader;

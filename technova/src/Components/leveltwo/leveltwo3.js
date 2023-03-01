import React from 'react'
import { l2task3data } from './data/l2task3data'

const LevelTwo3 = () => {
    return (
        <>
            <div className="level">
                <div className="level-head">
                    <h1>Level Two</h1>
                    <h3>Task 3</h3>
                </div>
                <div className="level-body">
                    <form>
                        <ul className="level-data">
                            {l2task3data.map((val, key) => {
                                return <li key={key} className="level-val">
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn}</label>
                                    </div>
                                    <div className="level-image"><img src={val.image} height="400" width="500"/></div>
                                    <div className="form-outline mb-4">
                                        <input type="text" className="form-control" id="form4Example3" rows="4"/>
                                    </div>

                                </li>
                            })}
                        </ul>
                        <div className="submit">
                            <button type="button" className="btn btn-success">Submit</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default LevelTwo3
import React from 'react'
import { l1task3data } from './data/l1task3data'

const LevelOne3 = () => {
    return (
        <>
            <div className="level">
                <div className="level-head">
                    <h1>Level One</h1>
                    <h3>Task 3</h3>
                </div>
                <div className="level-body">
                    <form>
                        <ul className="level-data">
                            {l1task3data.map((val, key) => {
                                return <li key={key} className="level-val">
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="formGroupExampleInput">{val.qstn}</label>
                                    </div>
                                    <div className="level-image"><img src={val.image} height="100" width="150"/></div>
                                    <div className="form-outline mb-4">
                                        <input type="text" className="form-control" id="formGroupExampleInput" rows="4" />
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

export default LevelOne3
import React from 'react'
import Sidebar from '../sidebar'
import { l3task3data } from './data/l3task3data'

const LevelThree3 = () => {
    return (
        <>
            <div className="level">
                <div className="level-head">
                    <h1>Level Three</h1>
                    <h3>Task 3</h3>
                </div>
                <div className="level-body">
                    <form>
                        <ul className="level-data">
                            {l3task3data.map((val, key) => {
                                return <li key={key} className="level-val">
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="formGroupExampleInput">{val.qstn}</label>
                                    </div>
                                    <div className="level-image">
                                        <img src={val.image1} height="500" width="500"/><br/>
                                        <img src={val.image2} height="100" width="500"/>
                                    </div>
                                    <div>
                                        <textarea className="form-control" id="formGroupExampleInput" rows="4"/>
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

export default LevelThree3
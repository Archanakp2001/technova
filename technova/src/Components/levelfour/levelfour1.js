import React from 'react'
import { l4task1data } from './data/l4task1data'

const LevelFour1 = () => {
    return (
        <>
            <div className="level">
                <div className="level-head">
                    <h1>Level Four</h1>
                    <h3>Task 1</h3>
                </div>
                <div className="level-body">
                    <form>
                        <ul className="level-data">
                            {l4task1data.map((val, key) => {
                                return <li key={key} className="level-val">
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="formGroupExampleInput">{val.qstn}</label>
                                    </div>
                                    <div className="level-image"><img src={val.image} height="400" width="500"/></div>
                                    <div>
                                        <input type="file" className="form-control upload" id="formGroupExampleInput" rows="4"/>
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

export default LevelFour1
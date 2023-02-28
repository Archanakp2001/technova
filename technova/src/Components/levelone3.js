import React from 'react'
import { l1task3data } from './l1task3data'

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
                        <ol className="level-data">
                            {l1task3data.map((val, key) => {
                                return <li key={key} className="level-val">
                                    <div className="level-qstn">
                                        <label class="form-check-label" for="inlineRadio1">{val.qstn}</label>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                                    </div>

                                </li>
                            })}
                        </ol>
                        <div className="submit">
                            <button type="button" class="btn btn-success">Submit</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}


export default LevelOne3
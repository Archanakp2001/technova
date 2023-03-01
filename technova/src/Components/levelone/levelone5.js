import React from 'react'
import { l1task5data } from './data/l1task5data'

const LevelOne5 = () => {
    return (
        <>
            <div className="level">
                <div className="level-head">
                    <h1>Level One</h1>
                    <h3>Task 5</h3>
                </div>
                <div className="level-body">
                    <form>
                        <ul className="level-data">
                            {l1task5data.map((val, key) => {
                                return <li key={key} className="level-val">
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.para1}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.para2}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.para3}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.para4}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.para5}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.para6}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn1}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn2}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn3}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn4}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn5}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn6}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn7}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn8}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn9}</label>
                                    </div>
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="inlineRadio1">{val.qstn10}</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" className="form-control" id="form4Example3" placeholder=" paragraph 1"/>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" className="form-control" id="form4Example3" placeholder=" paragraph 2"/>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" className="form-control" id="form4Example3" placeholder=" paragraph 3"/>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" className="form-control" id="form4Example3" placeholder=" paragraph 4"/>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" className="form-control" id="form4Example3" placeholder=" paragraph 5"/>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" className="form-control" id="form4Example3" placeholder=" paragraph 6"/>
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

export default LevelOne5
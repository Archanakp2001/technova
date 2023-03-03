import React from 'react'
import Countdown from '../countdown'
import { l1task2data } from './data/l1task2data'

const LevelOne2 = () => {
    return (
        <>
        <div className='countdown-container'>
      <Countdown duration={20 * 60 * 1000}/>
      </div>

            <div className="level">
                <div className="level-head">
                    <h1>Level One</h1>
                    <h3>Task 2</h3>
                </div>
                <div className="level-body">
                    <form>
                        <ol className="level-data">
                            {l1task2data.map((val, key) => {
                                return <li key={key} className="level-val">
                                    <div className="level-qstn">
                                        <label className="form-check-label" for="formGroupExampleInput">{val.qstn}<img src={val.image} width="200"/></label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" className="form-control" id="formGroupExampleInput" rows="4"/>
                                    </div>

                                </li>
                            })}
                        </ol>
                        <div className="submit">
                            <button type="button" className="btn btn-success">Submit</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}


export default LevelOne2
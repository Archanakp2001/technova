import React from 'react'
import { l1task1data } from './data/l1task1data'

const LevelOne1 = () => {
  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Level One</h1>
          <h3>Task 1</h3>
        </div>
        <div className="level-body">
          <form>
            <ol className="level-data">
              {l1task1data.map((val, key) => {
                return <li key={key} className="level-val">
                  <div>
                    <label className="form-check-label" for="inlineRadio1">{val.qstn}</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id={`inlineRadioOptions1${key}`} value="option1" />
                    <label className="form-check-label" htmlFor={`inlineRadioOptions1${key}`}>{val.option1}</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id={`inlineRadioOptions2${key}`} value="option2" />
                    <label className="form-check-label" htmlFor={`inlineRadioOptions2${key}`}>{val.option2}</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id={`inlineRadioOptions3${key}`} value="option3" />
                    <label className="form-check-label" htmlFor={`inlineRadioOptions3${key}`}>{val.option3}</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id={`inlineRadioOptions4${key}`} value="option4" />
                    <label className="form-check-label" htmlFor={`inlineRadioOptions4${key}`}>{val.option4}</label>
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


export default LevelOne1
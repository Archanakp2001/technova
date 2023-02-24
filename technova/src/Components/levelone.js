import React from 'react'
import { l1data } from './l1data'

const LevelOne = () => {
  return (
    <>
      <div className="l1">
        <div className="l1-head">
          <h1>Level One</h1>
        </div>
        <div className="l1-body">
          <form>
            <ol className="l1-data">
              {l1data.map((val, key) => {
                return <li key={key} className="l1-val">
                  <div>
                    <label class="form-check-label" for="inlineRadio1">{val.qstn}</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">{val.option1}</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">{val.option2}</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">{val.option3}</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">{val.option4}</label>
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


export default LevelOne
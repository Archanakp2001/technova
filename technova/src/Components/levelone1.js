import React from 'react'
import { l1task1data } from './l1task1data'

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


export default LevelOne1
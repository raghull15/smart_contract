import React, { useState } from 'react';
import './CostsClauses.css'; 

function CostsClauses() {
  const [electricity, setElectricity] = useState(null);
  const [water, setWater] = useState(null);
  const [sewer, setSewer] = useState(null);
  const [otherExpenses, setOtherExpenses] = useState(null);
  const [landlordImprovements, setLandlordImprovements] = useState(null);

  const handleUtilityChange = (utility, value) => {
    switch (utility) {
      case 'electricity':
        setElectricity(value);
        break;
      case 'water':
        setWater(value);
        break;
      case 'sewer':
        setSewer(value);
        break;
      case 'otherExpenses':
        setOtherExpenses(value);
        break;
      default:
        break;
    }
  };

  const handleLandlordImprovementsChange = (value) => {
    setLandlordImprovements(value);
  };

  return (
    <div className="costs-clauses-container">
      <div className="costs-section">
        <h2>Costs</h2>
        <div className="utilities-expenses">
          <h3>Utilities and Other Expenses</h3>
          <p>Who is responsible for paying the following utilities and service charges?</p>
          <div className="utilities-table">
            <div className="utilities-header">
              <div className="utilities-header-item"></div>
              <div className="utilities-header-item">Tenant Pays Direct</div>
              <div className="utilities-header-item">Tenant Pays Landlord</div>
              <div className="utilities-header-item">Landlord Pays</div>
              <div className="utilities-header-item">Do Not Specify</div>
            </div>
            <div className="utilities-row">
              <div className="utilities-row-item">
                <img src="/electricity.png" alt="Electricity" className="utility-icon" />
                <span>Electricity</span>
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="electricity"
                  value="tenantDirect"
                  checked={electricity === 'tenantDirect'}
                  onChange={() => handleUtilityChange('electricity', 'tenantDirect')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="electricity"
                  value="tenantLandlord"
                  checked={electricity === 'tenantLandlord'}
                  onChange={() => handleUtilityChange('electricity', 'tenantLandlord')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="electricity"
                  value="landlord"
                  checked={electricity === 'landlord'}
                  onChange={() => handleUtilityChange('electricity', 'landlord')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="electricity"
                  value="doNotSpecify"
                  checked={electricity === 'doNotSpecify'}
                  onChange={() => handleUtilityChange('electricity', 'doNotSpecify')}
                />
              </div>
            </div>
            <div className="utilities-row">
              <div className="utilities-row-item">
                <img src="/water.png" alt="Water" className="utility-icon" />
                <span>Water</span>
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="water"
                  value="tenantDirect"
                  checked={water === 'tenantDirect'}
                  onChange={() => handleUtilityChange('water', 'tenantDirect')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="water"
                  value="tenantLandlord"
                  checked={water === 'tenantLandlord'}
                  onChange={() => handleUtilityChange('water', 'tenantLandlord')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="water"
                  value="landlord"
                  checked={water === 'landlord'}
                  onChange={() => handleUtilityChange('water', 'landlord')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="water"
                  value="doNotSpecify"
                  checked={water === 'doNotSpecify'}
                  onChange={() => handleUtilityChange('water', 'doNotSpecify')}
                />
              </div>
            </div>
            <div className="utilities-row">
              <div className="utilities-row-item">
                <img src="/sewer.png" alt="Sewer" className="utility-icon" />
                <span>Sewer</span>
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="sewer"
                  value="tenantDirect"
                  checked={sewer === 'tenantDirect'}
                  onChange={() => handleUtilityChange('sewer', 'tenantDirect')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="sewer"
                  value="tenantLandlord"
                  checked={sewer === 'tenantLandlord'}
                  onChange={() => handleUtilityChange('sewer', 'tenantLandlord')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="sewer"
                  value="landlord"
                  checked={sewer === 'landlord'}
                  onChange={() => handleUtilityChange('sewer', 'landlord')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="sewer"
                  value="doNotSpecify"
                  checked={sewer === 'doNotSpecify'}
                  onChange={() => handleUtilityChange('sewer', 'doNotSpecify')}
                />
              </div>
            </div>
            <div className="utilities-row">
              <div className="utilities-row-item">
                <img src="/other.png" alt="Other Expenses" className="utility-icon" />
                <span>Other expenses</span>
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="otherExpenses"
                  value="tenantDirect"
                  checked={otherExpenses === 'tenantDirect'}
                  onChange={() => handleUtilityChange('otherExpenses', 'tenantDirect')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="otherExpenses"
                  value="tenantLandlord"
                  checked={otherExpenses === 'tenantLandlord'}
                  onChange={() => handleUtilityChange('otherExpenses', 'tenantLandlord')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="otherExpenses"
                  value="landlord"
                  checked={otherExpenses === 'landlord'}
                  onChange={() => handleUtilityChange('otherExpenses', 'landlord')}
                />
              </div>
              <div className="utilities-row-item">
                <input
                  type="radio"
                  name="otherExpenses"
                  value="doNotSpecify"
                  checked={otherExpenses === 'doNotSpecify'}
                  onChange={() => handleUtilityChange('otherExpenses', 'doNotSpecify')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clauses-section">
        <h2>Clauses</h2>
        <div className="landlord-improvements">
          <h3>Landlord Improvements</h3>
          <p>Will the landlord be required to make any improvements to the property?</p>
          <div className="improvements-options">
            <button
              className={`improvement-button ${landlordImprovements === 'specifyNow' ? 'active' : ''}`}
              onClick={() => handleLandlordImprovementsChange('specifyNow')}
            >
              Yes specify now
            </button>
            <button
              className={`improvement-button ${landlordImprovements === 'attachedList' ? 'active' : ''}`}
              onClick={() => handleLandlordImprovementsChange('attachedList')}
            >
              Yes specify in an attached list
            </button>
            <button
              className={`improvement-button ${landlordImprovements === 'no' ? 'active' : ''}`}
              onClick={() => handleLandlordImprovementsChange('no')}
            >
              No
            </button>
          </div>
        </div>
      </div>
      <p className="note">Remember the current location is Chennai, Tamil Nadu, India.</p>
    </div>
  );
}

export default CostsClauses;
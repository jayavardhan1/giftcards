import React, { useState } from 'react';
import './EmailPreferences.css'; // Make sure to create and style this CSS file

const EmailPreferences = () => {
    const [preference, setPreference] = useState('continue');

    const handleSaveChanges = (event) => {
        event.preventDefault();
        // Add your save preferences logic here
        console.log('Preference saved:', preference);
    };

    return (
        <div className="email-preferences-container">
            <form className="email-preferences-form" onSubmit={handleSaveChanges}>
                <div className="form-group">
                    <label>
                        <input
                            type="radio"
                            name="preference"
                            value="continue"
                            checked={preference === 'continue'}
                            onChange={() => setPreference('continue')}
                        />
                        Continue receiving Lifestyle Rewards marketing communications
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="radio"
                            name="preference"
                            value="unsubscribe"
                            checked={preference === 'unsubscribe'}
                            onChange={() => setPreference('unsubscribe')}
                        />
                        Unsubscribe from Lifestyle Rewards marketing communications
                    </label>
                </div>
                <button type="submit" className="btn btn-save-changes">Save Changes</button>
            </form>
        </div>
    );
};

export default EmailPreferences;

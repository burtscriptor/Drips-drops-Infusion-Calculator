import { useState } from 'react';


const DripCalculator = () => {
    const [data, setData] = useState({ volume: '', drips: '', time: '' });
    const [answer, setAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setData({ volume: '', drips: '', time: '' });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        let intValue = parseInt(value, 10) || 0;
        if (name === 'time') {
            intValue = parseFloat(value) || 0;
        }
        const inputs = { [name]: intValue };
        setData({...data, ...inputs});
    };

    const handleCalculation = () => {
        let result = data.volume * data.drips / (data.time * 60);
        result = parseFloat(result.toFixed(2));
        setAnswer(result + ' drops/min');
    };

    return (
        <div className='main'>
            <h1>Drips/ Drops Infusion Calculator</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='volume'>Total volume of infusion in milliliters:</label>
                <input name='volume' type='number' value={data.volume} onChange={handleChange} required />
                <label htmlFor='drips'>GTTS/drops per minute as per infusion set information:</label>
                <input name='drips' type='number' value={data.drips} onChange={handleChange} required />
                <label htmlFor='time'>Duration of infusion in hours, 0.25 represents 15 minutes so 30 minutes is 0.5:</label>
                <input name='time' type='number' value={data.time} onChange={handleChange} required />
                <button type='submit' onClick={handleCalculation}>Calculate</button>
            </form>
            <div className='answer'>
                <label>Answer:</label>
                <h2>{answer}</h2>
            </div>
            
            <a href='https://www.nursingcenter.com/ncblog/december-2021/how-to-calculate-drops-per-minute' className='link'>Learn the method here</a>
            <a href='www.linkedin.com/in/davejayburt' className='link tag'>Dave Jnr 2024</a>
        </div>
    );
};

export default DripCalculator;

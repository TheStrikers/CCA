import '../App.css';

export default function HomeArea() {
    return <>
        <div className='container mt-3'>
            <div className='d-flex flex-wrap align-items-center justify-content-between'>
                <h4>Today's Match</h4>
                <h4 id='line'>---------------------------------------------------------------------------------</h4>
            </div>
            <div id='banner' className='container border'></div> {/*banner Image*/}
            <div className='d-flex flex-wrap justify-content-between align-items-center mt-3'>
                <h4>Highlight's</h4>
                <h4 id='line'>---------------------------------------------------------------------------------</h4>
            </div>
            <div className='d-flex flex-wrap align-items-center justify-content-around'>
                <div id='homeCard' className='card border'>
                    <div>
                        <h6>CSK vs KKR (yesterday)</h6>
                        <p>Chennai Super Kings beat KKR by 2 wickets to claim top spot.</p>
                    </div>
                </div>
                <div id='homeCard' className='card border'>
                    <div>
                        <h6>CSK vs KKR (yesterday)</h6>
                        <p>Chennai Super Kings beat KKR by 2 wickets to claim top spot.</p>
                    </div>
                </div>
                <div id='homeCard' className='card border'>
                    <div>
                        <h6>CSK vs KKR (yesterday)</h6>
                        <p>Chennai Super Kings beat KKR by 2 wickets to claim top spot.</p>
                    </div>
                </div>
                <div id='homeCard' className='card border'>
                    <div>
                        <h6>CSK vs KKR (yesterday)</h6>
                        <p>Chennai Super Kings beat KKR by 2 wickets to claim top spot.</p>
                    </div>
                </div>
            </div>
        </div >
    </>
}
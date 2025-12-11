export default function StageStep({ title, dsc, num, isEven = false }) {
    return (
        <article className={`Stage__Step ${isEven ? 'Stage__Step--even' : ''}`}>
            <div className="stageStep__wrap">
                <div className="stageStep__num">{num}</div>
                <div className="stageStep__out">
                    <div className="stageStep__h">
                        <h3>{title}</h3>
                    </div>
                    <div className="stageStep__dsc">{dsc}</div>
                </div>
            </div>
        </article>
    );
}

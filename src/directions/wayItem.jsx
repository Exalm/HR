export default function WayItem({ title, LiItem1, LiItem2, LiItem3, LiItem4, LiItem5, img, ITid }) {
    return (
        <div className="wayItem" id={ITid}>
            <div className="wayH">
                <p>{title}</p>
            </div>
            <div className="WayDsc">
                <ul>
                    <li>{LiItem1}</li>
                    <li>{LiItem2}</li>
                    <li>{LiItem3}</li>
                    <li>{LiItem4}</li>
                </ul>
            </div>
        </div>
    );
}

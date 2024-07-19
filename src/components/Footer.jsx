export default function Footer () {
    const currentHour = new Date().getHours();
    const start = 9;
    const end = 23;
    const isOpen = currentHour>=start && currentHour<=end;

    return <footer className="footer">
        {isOpen && (
            <div className="order">
                <p>We are open. Please order.</p>
                <button className="btn">Order</button>
            </div>
        )}
    </footer>
}
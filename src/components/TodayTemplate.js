import './scss/TodayTemplate.scss';

export default function TodayTemplate({children}) {
    return (
        <div className="TodayTemplate">
            <div className="content">{children}</div>
        </div>
    );
}
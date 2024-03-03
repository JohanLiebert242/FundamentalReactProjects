import JobDuties from "./JobDuties";

function JobInfo({ data, currentIndex }) {
    const {title, dates, duties, company } = data[currentIndex];
    return (
        <div>
            <h3>{title}</h3>
            <span className="job-company">{company}</span>
            <p className="job-date">{dates}</p>
            <JobDuties duties={duties} />
        </div>
    );
}

export default JobInfo;

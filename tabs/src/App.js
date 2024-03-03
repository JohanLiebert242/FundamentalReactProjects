import { useEffect, useState } from "react";
import "./App.css";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";
import Loading from "./Loading";

const url = "https://course-api.com/react-tabs-project";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchApi = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setIsLoading(false);
            setItems(data);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    if(isLoading) {
      return(
        <section className="job-center">
            <Loading />
        </section>
      )
    }

    return (
        <section className="job-center">
                <BtnContainer currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}  data={items} />
                <JobInfo data={items} currentIndex={currentIndex} />
        </section>
    );
}

export default App;

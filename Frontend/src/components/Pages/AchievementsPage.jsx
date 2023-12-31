import { useState, useEffect } from 'react';
import axios from 'axios';

import img2 from "../../assets/teamwork.png";
import img3 from "../../assets/growth.png";
import img4 from "../../assets/calendar.png";
import img5 from "../../assets/graduation.png";
import img6 from "../../assets/graduated.png";
import img1 from "../../assets/mortarboard.png";

function AchievementsPage() {
  const [achievements, setAchievements] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get('http://localhost:8080/achievements');
        setAchievements(response.data);
      } catch (error) {
        console.log('Error fetching achievements:', error);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold mb-8">Our Achievements</h1>
        <div className="flex flex-wrap justify-center items-center">
          {achievements ? (
            <>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img src={img1} alt="img1" className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mt-4 text-center">{achievements.aecGraduates}</h3>
                  <p className="text-gray-600 text-center">AEC Graduates</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img src={img5} alt="img5" className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mt-4 text-center">{achievements.becGraduates}</h3>
                  <p className="text-gray-600 text-center">BEC Graduates</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img src={img6} alt="img6" className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mt-4 text-center">{achievements.totGraduates}</h3>
                  <p className="text-gray-600 text-center">ToT Graduates</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img src={img4} alt="img4" className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mt-4 text-center">{achievements.events}</h3>
                  <p className="text-gray-600 text-center">Events</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img src={img2} alt="img2" className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mt-4 text-center">{achievements.incubatees}</h3>
                  <p className="text-gray-600 text-center">Incubatees</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img src={img3} alt="img3" className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mt-4 text-center">{achievements.startups}</h3>
                  <p className="text-gray-600 text-center">Startups</p>
                </div>
              </div>
            </>
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AchievementsPage;

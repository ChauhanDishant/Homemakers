import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { XOctagon } from "lucide-react";

const AllCitiesLocation = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [areaData, setAreaData] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);

    // You would typically fetch area data based on the city selection here.
    // Mocking area data for now:
    const areas = {
      Ahmedabad: [
        "Ambawadi",
        "Amraiwadi",
        "Asarwa",
        "Ashram Road",
        "Aslali",
        "Astodia",
        "Bapunagar",
        "Bardolpura",
        "Behrampura",
        "Bhadra",
        "Bodakdev",
        "Bopal",
        "CG Road",
        "Chandkheda",
        "Chandlodia",
        "Changodar",
        "CTM",
        "CTM Char Rasta",
        "Dani Limbada",
        "Dariapur",
        "Delhi Chakla",
        "Delhi Darwaja",
        "Drive In Road",
        "Dudheshwar",
        "Dudheshwar Road",
        "Ellis Bridge",
        "Gandhi Road",
        "Geeta Mandir",
        "Geeta Mandir Road",
        "Ghatlodia",
        "Gheekanta",
        "Gheekanta Road",
        "Ghodasar",
        "Gomtipur",
        "Gota",
        "Gulbai Tekra",
        "Gurukul",
        "Hatkeshwar",
        "Income Tax",
        "Isanpur",
        "Jamalpur",
        "Jasodanagar",
        "Jivraj Park",
        "Jodhpur",
        "Juhapura",
        "Juna Wadaj",
        "Kalupur",
        "Kankaria",
        "Kankaria Road",
        "Kathwada",
        "Khadia",
        "Khamasa",
        "Khanpur",
        "Khokhara",
        "Krishnanagar",
        "Kuber Nagar",
        "Madhupura",
        "Manek Chowk",
        "Maninagar",
        "Meghani Nagar",
        "Memnagar",
        "Mirzapur",
        "Mirzapur Road",
        "Naranpura",
        "Naroda",
        "Naroda GIDC",
        "Naroda road",
        "Narol",
        "Nava Wadaj",
        "Navarangpura Gam",
        "Nikol",
        "Nirnay Nagar",
        "Odhav",
        "Odhav GIDC",
        "Odhav Road",
        "Paldi",
        "Pankore Naka",
        "Patharkuva",
        "Patthar Kuva",
        "Raipur",
        "Rakhial",
        "Ranip",
        "Ranna Park",
        "Ratan Pole",
        "Revdi Bazaar",
        "Sabarmati",
        "Sahijpur Bogha",
        "Sarangpur",
        "Saraspur",
        "Sardar Nagar",
        "Sarkej",
        "Sarkhej Gandhinagar Highway",
        "Satellite",
        "Satellite Road",
        "Shah Alam Road",
        "Shahibagh",
        "Shahibaug Road",
        "Shahpur",
        "Sola",
        "Sola Road",
        "Subhash Bridge",
        "Tavdipura",
        "Teen Darwaja",
        "Thakkarbapa Nagar",
        "Thaltej",
        "Usmanpura",
        "Vasna",
        "Vastral",
        "Vastrapur",
        "Vatva",
        "Vatva GIDC",
        "Vejalpur",
      ],
      Vadodara: [
        "Alkapuri",
        "Vadodara Railway Station",
        "Fatehgunj",
        "Sayajigunj",
        "Vasna",
        "Makarpura",
        "Gotri",
        "Jambusar Road",
        "Ajwa Road",
        "Tarsali",
        "Raopura",
        "Dandiya Bazar",
        "Vadodara Airport",
      ],
      Rajkot: [
        "Kalavad Road",
        "150 Feet Ring Road",
        "Mavdi",
        "Raiya Road",
        "Madhapar",
        "University Road",
        "Nana Mava",
        "Mota Mava",
        "Kothariya",
        "Ghanteshwer",
        "Bhakti Nagar",
        "Railnagar",
        "Race Course",
        "Gandhigram",
        "Gondal Road",
        "Upleta",
        "Jagnath Plot",
        "Raiya",
        "Junction Plot",
        "Munjka",
        "Vavdi",
        "Dharam Nagar",
        "Yagnik Road",
        "Yogi Nagar",
        "Jasdan",
        "Radhika Park",
        "Ambika Park",
        "Gundavadi",
        "Mavdi Chowkdi",
        "Manhar Plot",
      ],
    };

    setAreaData(areas[city] || []);
  };

  return (
    <div className="max-w-6xl mx-auto m-3 p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-end space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex-1">
          <label
            htmlFor="city-select"
            className="block text-sm font-medium text-blue-700 mb-1 sm:mb-2"
          >
            Select a City:
          </label>
          <select
            id="city-select"
            className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            onChange={handleCityChange}
            value={selectedCity}
          >
            <option value="">--Select a City--</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Vadodara">Vadodara</option>
          </select>
        </div>

        {selectedCity && (
          <div className="flex-1">
            <label
              htmlFor="area-select"
              className="block text-sm font-medium text-green-600 mb-1 sm:mb-2"
            >
              Area in {selectedCity}:
            </label>
            <select
              id="area-select"
              className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out"
            >
              <option value="">--Select an Area--</option>
              {areaData.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCitiesLocation;

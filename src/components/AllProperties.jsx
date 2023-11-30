    import Header from './Header';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import PropertyCart from './PropertyCart';
import { Context } from './ContextApi';
import { BsEmojiFrown } from 'react-icons/bs';
export default function AllProperty() {
    const { properties,isloading,searchResult, showSearchHandler, hideSearchBar}  = useContext(Context);
    const [bathrooms, setBathrooms] = useState([
        {
            value: 1,
            selected: false
        },
        {
            value: 2,
            selected: false
        },
        {
            value: 3,
            selected: false
        },
        {
            value: 4,
            selected: false
        }
    ]);
    const [beds, setBeds] = useState([
        {
            value: 1,
            selected: false
        },
        {
            value: 2,
            selected: false
        },
        {
            value: 3,
            selected: false
        },
        {
            value: 4,
            selected: false
        },
        {
            value: 5,
            selected: false
        },
        {
            value: 6,
            selected: false
        }
    ]);
    const [agents, setAgents] = useState([
        {
            value: "John Smith",
            selected: false
        },
        {
            value: "Jane Doe",
            selected: false
        },
        {
            value: "Robert Johnson",
            selected: false
        },
        {
            value: "Emily White",
            selected: false
        },
        {
            value: "Michael Brown",
            selected: false
        },
        {
            value: "Sarah Adams",
            selected: false
        },
        {
            value: "David Wilson",
            selected: false
        },
        {
            value: "William Johnson",
            selected: false
        },
        {
            value: "Laura Davis",
            selected: false
        },
    ]);
    const [propTitles, setPropTitles] = useState([
        {
            value: "Cozy Downtown Apartment",
            selected: false
        },
        {
            value: "Spacious Family House",
            selected: false
        },
        {
            value: "Modern Beachfront Villa",
            selected: false
        },
        {
            value: "Charming Cottage",
            selected: false
        },
        {
            value: "Luxury Penthouse",
            selected: false
        },
        {
            value: "Mountain View Retreat",
            selected: false
        },
        {
            value: "Riverside Mansion",
            selected: false
        },
        {
            value: "Elegant Townhouse",
            selected: false
        },
        {
            value: "Lakefront Cabin",
            selected: false
        },
        {
            value: "Contemporary Loft",
            selected: false
        },
    ]);
    const [cities, setCities] = useState([
        {
            value: "New York",
            selected: false
        },
        {
            value: "Los Angeles",
            selected: false
        },
        {
            value: "Miami",
            selected: false
        },
        {
            value: "Seattle",
            selected: false
        },
        {
            value: "Chicago",
            selected: false
        },
        {
            value: "Denver",
            selected: false
        },
        {
            value: "San Francisco",
            selected: false
        },
        {
            value: "Boston",
            selected: false
        },
        {
            value: "Minneapolis",
            selected: false
        },
        {
            value: "Austin",
            selected: false
        },
    ]);
    const [states, setState] = useState([
        {
            value: "NY",
            selected: false
        },
        {
            value: "CA",
            selected: false
        },
        {
            value: "FL",
            selected: false
        },
        {
            value: "WA",
            selected: false
        },
        {
            value: "IL",
            selected: false
        },
        {
            value: "CO",
            selected: false
        },
        {
            value: "MA",
            selected: false
        },
        {
            value: "MN",
            selected: false
        },
        {
            value: "TX",
            selected: false
        },
    ]);
    const [sizes, setSizes] = useState([
        {
            value: "800",
            selected: false
        },
        {
            value: "900",
            selected: false
        },
        {
            value: "1000",
            selected: false
        },
        {
            value: "1200",
            selected: false
        },
        {
            value: "1500",
            selected: false
        },
        {
            value: "2000",
            selected: false
        },
        {
            value: "2600",
            selected: false
        },
        {
            value: "2800",
            selected: false
        },
        {
            value: "3500",
            selected: false
        },
        {
            value: "5000",
            selected: false
        }
    ]);
    function onChaneBathroom(event) {
        // console.log(event.target.checked);
        const checkValue = event.target.value;
        bathrooms[checkValue]['selected'] = event.target.checked;
        setBathrooms([...bathrooms]);
    }
    function onChangeBeds(event) {
        let numberOfBeds = event.target.value;
        for (let i = 0; i < beds.length; i++) {
            let bed = beds[i].value;
            if (numberOfBeds == bed) {
                beds[i].selected = event.target.checked;
                setBeds([...beds]);
            }
        }
    }
    function onChangeAgent(event) {
        let agentName = event.target.value;
        for (let i = 0; i < agents.length; i++) {
            let agent = agents[i].value;
            if (agentName == agent) {
                agents[i].selected = true;
            }
            else {
                agents[i].selected = false;
            }
        }
        setAgents([...agents]);
    }
    function onChangePropTitles(event) {
        let propTitleName = event.target.value;
        // console.log(propTitleName)
        for (let i = 0; i < propTitles.length; i++) {
            let proptitleList = propTitles[i].value;
            if (propTitleName == proptitleList) {
                propTitles[i].selected = true;
            }
            else {
                propTitles[i].selected = false
            }
        }
        setPropTitles([...propTitles]);
    }
    function onChangeCities(event) {
        let cityValue = event.target.value;
        for (let i = 0; i < cities.length; i++) {
            let cityList = cities[i].value;
            if (cityValue == cityList) {
                cities[i].selected = true
            }
            else {
                cities[i].selected = false
            }
            setCities([...cities]);
        }
    }
    function onChangeState(event) {
        let stateValue = event.target.value;
        //    console.log(stateValue)
        states.forEach((state, i) => {
            if (stateValue == state.value) {
                states[i].selected = true;
            }
            else {
                states[i].selected = false;
            }
            setState([...states])
        })
    }
    function onChangeSize(event) {
        let sizeValue = event.target.value;
        // console.log(sizeValue)
        sizes.forEach((size) => {
            if (sizeValue == size.value) {
                size.selected = true
            }
            else {
                size.selected = false
            }
        })
        setSizes([...sizes])
    }
    let bathroomArry =[];
    bathrooms.forEach((bathroom) => {
        if (bathroom.selected == true) {
            bathroomArry.push(bathroom.value);
        }
    })
    let bedroomArry = [];
    beds.forEach((bed) => {
        if (bed.selected == true) {
            bedroomArry.push(bed.value)
        }
    })
    let agentName = ""; 
    agents.forEach((agent) => {
        if (agent.selected == true) {
            agentName = agent.value;
        }
    });
    let proptitle = "";
    propTitles.forEach((singleProp) => {
        if (singleProp.selected == true) {
            proptitle = singleProp.value
        }
    });
    let city = "";
    cities.forEach((singleCity) => {
        if (singleCity.selected == true) {
            city = singleCity.value
        }
    }) 
    let state = "";
    states.forEach((singleState) => {
        if (singleState.selected == true) {
            state = singleState.value;
        }
    })
    let size = "";
    sizes.forEach((singleSize) => {
        if (singleSize.selected == true) {
            size = parseInt(singleSize.value);
        }
    })

        let propertyListFilter = properties.filter((property) => {
            if ((agentName == "" || property.agent.name === agentName) && 
            (proptitle == "" || property.title === proptitle) && 
            (city == "" || property.city === city) && 
            (state == "" || property.state === state) && 
            (size == "" || property.size_in_sf_yard === size)&&
            (bathroomArry.length === 0 || bathroomArry.indexOf(property.bathrooms) != -1) &&
            (bedroomArry.length === 0 || bedroomArry.indexOf(property.bedrooms) != -1) &&
            (searchResult.length === 0 ||  property.title.toLowerCase().indexOf(searchResult)!=-1)
            ) {
                return true
        }
        return false;
    });
    const propertyList = propertyListFilter.map((property) => {
        return <PropertyCart singleProp={property} key={property.id} />
    })
    useEffect(()=>{
        showSearchHandler();
        return function(){
            hideSearchBar();
        }
    }, [])
    return <div className='extend-margin'>
        <div className='container'>
            {isloading && <p className='mt-2 alert alert-warning'>Please wait, we are getting properties for you</p>}
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-2 col-lg-2 col-sm-4 mt-lg-2 mt-md-2 mt-5'>
                    <div className='fw-bold'>
                        <form>
                            <h5>Bathroom</h5>
                            {
                                bathrooms.map((item, index) => {
                                    return <div key={item.value}>
                                        {item.value}. &nbsp;
                                        <input className="form-check-input fs-5 border border-dark me-2" type="checkbox" id="checkboxNoLabel" value={index} checked={item.selected} onChange={onChaneBathroom} aria-label="..." />
                                    </div>
                                })
                            }
                            <h5 className='mt-3'>Bedroom</h5>
                            {
                                beds.map((item) => {
                                    return <div key={item.value}>
                                        {item.value}. &nbsp;
                                        <input id='beds' className="form-check-input fs-5 border border-dark" type="checkbox" value={item.value} checked={item.selected} onChange={onChangeBeds} aria-label="..." />
                                    </div>
                                })
                            }
                            <h5 className='mt-3'><label htmlFor='agent'>Select Agent</label></h5>
                            {
                                <select id='agent' className='form-control' onChange={onChangeAgent}>
                                    <option>Select Agent</option>
                                    {
                                        agents.map((item, i) => {
                                            return <option key={item.value} value={item.value}>{item.value}</option>
                                        })
                                    }
                                </select>
                            }
                            <h5 className='mt-3'><label htmlFor='propTitles'>PropTitles</label></h5>
                            {
                                <select id='propTitles' className='form-control' onChange={onChangePropTitles}>
                                    <option>Select PropTitle</option>
                                    {
                                        propTitles.map((item) => {
                                            return <option key={item.value} value={item.value}>{item.value}</option>
                                        })
                                    }
                                </select>
                            }
                            <h5 className='mt-3'><label htmlFor='cities'>Cities</label></h5>
                            {
                                <select id='cities' className='form-control' onChange={onChangeCities}>
                                    <option>Select City</option>
                                    {
                                        cities.map((item) => {
                                            return <option key={item.value} value={item.value}>{item.value}</option>
                                        })
                                    }
                                </select>
                            }
                            <h5 className='mt-3'><label htmlFor='state'>State</label></h5>
                            {
                                <select id='state' className='form-control' onChange={onChangeState}>
                                    <option>Select State</option>
                                    {
                                        states.map((item) => {
                                            return <option key={item.value} value={item.value}>{item.value}</option>
                                        })
                                    }
                                </select>
                            }
                            <h5 className='mt-3'><label htmlFor='sizes'>Size</label></h5>
                            {
                                <select id='sizes' className='form-control' onChange={onChangeSize}>
                                    <option>Select Size</option>
                                    {
                                        sizes.map((item) => {
                                            return <option key={item.value} value={item.value} checked={item.selected}>{item.value}</option>
                                        })
                                    }
                                </select>
                            }
                        </form>
                    </div>
                </div>
                <div className='col-md-10 col-lg-10 col-sm-8'>
                    <div className='row'>
                        {isloading || propertyList.length > 0 ? propertyList :<h5 className='text-danger'>'There is no property agains your filters'</h5>}
                    </div>
                </div>
            </div>
        </div>
    </div >
}
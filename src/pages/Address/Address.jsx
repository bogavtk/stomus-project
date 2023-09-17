import cl from './Address.module.css';
import {AddressIcon} from "../../assets/icons/icons";
import classNames from "classnames";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Address = () => {
    const [chosenAddress, setChosenAddress] = useState();
    const [chosenAddressId, setChosenAddressId] = useState();

    const navigate = useNavigate();

    const handleAddressSubmit = function (){
        localStorage.setItem('chosenPlace', chosenAddress);
        navigate('/')
    }

    const addresses = [
        {
            id: 1,
            city: 'Kazan',
            street: 'Kremlevskaya',
            house: 35,
        },
        {
            id: 2,
            city: 'Innopolis',
            street: 'Centralnaya',
            house: 1,
        }
    ]

    return (
        <ul className={cl.addresses}>
            {
                addresses.map((address) => {
                    return (
                        <li key={address.id}
                            onClick={() =>{
                                setChosenAddress(`г.${address.city}, ул. ${address.street}, д. ${address.house}`)
                                setChosenAddressId(address.id)
                            }

                        }
                            className={classNames(cl.address,
                                {
                                    [cl.active]: address.id === chosenAddressId
                                }
                            )}
                        >
                            <div className={cl.address_text}>
                                <p>Город: {address.city}</p>
                                <p>Улица: {address.street}</p>
                                <p>Дом: {address.house}</p>
                            </div>
                            <span>
                                <AddressIcon/>
                            </span>
                        </li>
                    )
                })
            }
            <button className={cl.address__confirm_button}
                    onClick={handleAddressSubmit}>Подтвердить</button>
        </ul>

    );
};

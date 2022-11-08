import { faPhone, faClock, faLocationCrosshairs, faMotorcycle, faSeedling, faPizzaSlice, faUtensils, faPeopleArrows} from '@fortawesome/free-solid-svg-icons';
import { faStar, faFaceSmile  } from '@fortawesome/free-regular-svg-icons';

export const dataServices = [
    {
        icono: faPhone,
        info: 'phone_number',
        textInfo: 'telephone_consultations'
    },
    {
        icono: faClock,
        info: 'exact_address',
        textInfo: 'business_direction'
    },
    {
        icono: faLocationCrosshairs,
        info: 'business_hours',
        textInfo: 'business_hours_two'
    },
];


export const dataOurServices = [
    {
        icono: faMotorcycle,
        info: 'our_services_second_service_title',
        textInfo: 'our_services_service_text'
    },
    {
        icono: faSeedling,
        info: 'our_services_first_service_title',
        textInfo: 'our_services_service_text'
    },
    {
        icono: faPizzaSlice,
        info: 'our_services_third_service_title',
        textInfo: 'our_services_service_text'
    },
];

export const dataStadistic = [
    {
        icono: faFaceSmile,
        quantity: 10.567,
        text: 'counter_three'
    },
    {
        icono: faUtensils,
        quantity: 900,
        text: 'counter_one'
    },
    {
        icono: faStar,
        quantity: 85,
        text: 'counter_two'
    },
    {
        icono: faPeopleArrows,
        quantity: 100,
        text: 'counter_four'
    },
];


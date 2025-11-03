import genericItemsData from '../data/items/items.json';
import mensItemsData from '../data/items/mens-items.json';
import flightItemsData from '../data/items/flight-items.json';
import womenItemsData from '../data/items/women-shirt.json';
import outerItemsData from '../data/items/outer-items.json';
import kidsItemsData from '../data/items/kids-shirt.json';
import kidsOuterData from '../data/items/kids-outer.json';
import accsItemsData from '../data/items/accs-items.json';

export interface ProductItem {
    id: string | number;
    name: string;
    price: number;
    description?: string[];
}

const items: ProductItem[] = [
    ...genericItemsData,
    ...mensItemsData,
    ...flightItemsData,
    ...womenItemsData,
    ...outerItemsData,
    ...kidsItemsData,
    ...kidsOuterData,
    ...accsItemsData,
];

export default items;
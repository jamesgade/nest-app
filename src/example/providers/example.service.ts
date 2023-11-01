import { Injectable } from "@nestjs/common";
import { Item } from "../item";

@Injectable()
export class ExampleService {
    items: Item[] = [];

    getAllItems(): Item[] {
        return this.items;
    }

    addItem(): string {
        this.items.push({
            id: this.items.length + 1,
            name: `Item ${this.items.length + 1}`
        })
        return 'Item added';
    }

    getItemById(itemId: any): Item | string  {
        const reqItem = this.items.filter(item => item.id == itemId);
        if(reqItem.length == 1) {
            return reqItem[0];
        }else {
            return `Could not find Item with id ${itemId}`;
        }
    }

    updateItem(): string {
        return 'Item updated'
    }

    updateItemValue(): string {
        return 'Item value updated';
    }

    deleteItem(): string {
        return 'Item deleted'
    }
}

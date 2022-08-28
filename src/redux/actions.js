import {NEW_CATEGORY} from "./types";

export function createCategory(category){
    return{
        type: NEW_CATEGORY,
        payload: category
    }
}
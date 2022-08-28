import {combineReducers} from "redux";
import {SectionsReducer} from "./sectionsReducer";

export const rootReducer = combineReducers({
    sections: SectionsReducer
})
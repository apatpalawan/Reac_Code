import axios from "axios";
import { serverUrl } from "../../../constants";

export const getStoreAllFetch = async () => {
    try {
        const result = await axios.get(serverUrl + `/get-store-all`);
        if (result.data.isSuccess) {
            return result.data.formData;
        } else {
            return [];
        }
    } catch (err) { // status 404
        return [];
    }
}
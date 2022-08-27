import axios from "axios";
import { serverUrl } from "../../../constants";

export const getStoreByIdFetch = async (id) => {
    try {
        const result = await axios.get(serverUrl + `/get-store-by-id/${id}`);
        if (result.data.isSuccess) {
            return result.data.formData;
        } else {
            return null;
        }
    } catch (err) { // status 404
        return null;
    }
}
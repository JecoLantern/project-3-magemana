import axios from "axios";

export default {
    // Get charsheet by id
    getCharSheet: function(id) {
        return axios.get("/api/c/charsheet/" + id);
        // return axios.get("/api/c/charsheet");
    },
    // Get all charsheets
    getCharSheets: function() {
        return axios.get("/api/c/charsheet");
    },
    // Delete charsheet by id
    deleteCharSheet: function(id) {
        return axios.delete("/api/c/charsheet/" + id);
    },
    // Save
    saveCharSheet: function(charsheetData, id) {
        return axios.put(`/api/c/charsheet/${id}`, charsheetData);
    },
    

}
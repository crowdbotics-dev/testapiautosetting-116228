import axios from "axios"
const newConnector = axios.create({
  baseURL: "https://cbtcms.herokuapp.com/runs/5641/?status_id=5",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}

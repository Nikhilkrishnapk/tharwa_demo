import apiClient from "./apiClient";

export const getServiceCategoryList = () => {
    try {
        const response = apiClient.get('/aakri-impact/list-service-category/');
        return response;
    } catch (error) {
        throw error;
        
    }
};
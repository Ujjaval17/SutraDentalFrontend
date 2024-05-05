import { generatePath } from "react-router";
                                               
export const indexPattern = "/";
export const getIndexRoute = () => {
    return generatePath(indexPattern);
};

export const adminPanelPattern = "/admin-panel";
export const getAdminPanel = () => {
    return generatePath(adminPanelPattern);
};

export const aboutPattern = "/about-me";
export const getAboutRoute = () => {
    return generatePath(aboutPattern);
};

export const allTreatmentsPattern = "/all-treatments";
export const getAllTreatmentsRoute = () => {
    return generatePath(allTreatmentsPattern);
};


export const blogsPattern = "/blogs";
export const getBlogsRoute = () => {
    return generatePath(blogsPattern);
};

export const blogDetailPattern = "/blogs/:slug";
export const getBlogDetailRoute = (slug) => {
    return generatePath(blogDetailPattern,{slug});
};

export const treatmentDetailPattern = "/treatments/:slug";
export const getTreatmentDetailRoute = (slug) => {
    return generatePath(treatmentDetailPattern,{slug});
};

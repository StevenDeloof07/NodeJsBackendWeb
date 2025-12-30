/**
 * 
 * @param {Request} req Request used to get the protocol and the host of the site
 * @param {string} route Route required for the url (after the host)
 * @param {number, string} index Can be used to get a specific index in a route, standard an empty string
 * @returns A url in form of a string
 */
const generateUrl = (req, route, index = '') => {
    return `${req.protocol}://${req.get('host')}/${route}/${index}`
}

export {generateUrl}
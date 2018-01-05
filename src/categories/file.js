"use strict"

const Teamwork = require('../teamwork')

class File extends Teamwork {

    /**
     * Get a File Category
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(category_id) {
        if (!category_id) {
            return this.handleError('No category id provided')
        }

        return this.query({
            path: `/fileCategories/${category_id}.json`
        })
    }

    /**
     * Update a File Category
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(category_id, category_object = {}) {
        if (!category_id || !Object.keys(category_object).length) {
            return this.handleError('No category id or category request object provided')
        }

        return this.query({
            method: 'PUT',
            path: `/fileCategories/${category_id}.json`
        }, category_object)
    }

    /**
     * Delete a File Category
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(category_id) {
        if (!category_id) {
            return this.handleError('No category id provided')
        }

        return this.query({
            method: 'DELETE',
            path: `/fileCategories/${category_id}.json`
        })
    }

}

module.exports = File
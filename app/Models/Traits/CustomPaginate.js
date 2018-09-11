'use strict'

class CustomPaginate {
  register(Model, customOptions = {}) {
    const defaultOptions = {
      page: 1, // default pagination page
      limit: 1, // default pagination limit per page
      maxLimit: 50 // maximum limit per page
    }

    const options = Object.assign(defaultOptions, customOptions)

    Model.queryMacro('customPaginate', function (getVars = {}) {

      const pagination = {
        page: Number(getVars.page >= 1 ? getVars.page : options.page),
        limit: Number((getVars.limit >= 1 && getVars.limit <= options.maxLimit) ? getVars.limit : options.limit)
      }

      return this.paginate(pagination.page, pagination.limit)
    })

  }
}

module.exports = CustomPaginate

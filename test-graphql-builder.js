import { graphql, buildSchema } from 'graphql'

class GraphQLQueryBuilder {
    // Is it query or mutation
    // MUTATION
        // need params for change/auth/keylookup
        // need fields data back
    // QUERY
        // need params for auth/keylookup
        // fields required for data back

    /*
        queryParams = {
            incomingParamName: '',
            gqlParamName: '',
            schemaType: {
                isRequired: false,
                type: ''
            },
            incomingValue: undefined
        }

        fields = {
            isObject: false,
            name: ''
        }
    */

    constructor({ fields, queryParams, queryName, objects  }) {
        this.QUERY = 'query'
        this.MUTATION = 'mutation'
        this.fields = fields
        this.queryParams = queryParams
        this.queryName = queryName
    }

    queryBuilder() {

        return 
    }


}
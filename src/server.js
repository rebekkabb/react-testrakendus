import {createServer, Model} from "miragejs"

export function makeServer({environment = "development"} = {}) {
    let server = createServer({
        environment,

        models: {
            recipe: Model,
        },

        seeds(server) {
            server.create("recipe", {title: "Eggs", type: "Breakfast", time: 15, ingredients: "text", steps: "text"})
            server.create("recipe", {
                title: "Salad",
                type: "Lunch/Dinner",
                time: 30,
                ingredients: "text",
                steps: "test"
            })
        },

        routes() {
            this.namespace = "api"

            this.get("/recipes", (schema) => {
                return schema.recipes.all()
            })

            this.post("/recipes", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)

                return schema.recipes.create(attrs)
            })

            this.patch("/recipes/:id", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let id = request.params.id
                let recipe = schema.recipes.find(id)

                return recipe.update(attrs)
            })

            this.delete("/recipes/:id", (schema, request) => {
                let id = request.params.id

                return schema.recipes.find(id).destroy()
            })
        },
    })

    return server
}
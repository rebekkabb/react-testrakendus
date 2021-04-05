import {createServer, Model} from "miragejs"

export function makeServer({environment = "development"} = {}) {
    let server = createServer({
        environment,

        models: {
            recipe: Model,
        },

        seeds(server) {
            server.create("recipe", {
                title: "Eggs",
                type: "Breakfast",
                time: 15,
                ingredients: "Butter, egg, salt, pepper",
                steps: "1. Heat up the pan. 2. Melt butter on pan. 3. Crack the egg onto the pan. 4. Let the egg cook for a few minutes."
            })
            server.create("recipe", {
                title: "Manhattani toorjuustukook",
                type: "Dessert",
                time: 60,
                ingredients: " Põhi: \n" +
                    "8 digestive küpsist (u 110g)\n" +
                    "50g sulatatud võid\n" +
                    "Toorjuustukate:\n" +
                    "400g toorjuustu\n" +
                    "75g suhkrut\n" +
                    "2 muna\n" +
                    "1 tl vanilliektrakti\n" +
                    "Hapukoorekate:\n" +
                    "250g 20%list hapukoort\n" +
                    "2 sl suhkrut\n" +
                    "0,5 tl vanilliektrakti",
                steps: " Põhja tegemiseks tampisin küpsised pudrunuiaga puruks, segasin juurde sulatatud või ja surusin segu koogivormi põhja. Panin hetkeks külmkappi tahenema.\n" +
                    "\n" +
                    "Segasin toorjuustu suhkru ja vanilliekstraktiga pehmemaks, siis lisasin munad ja segasin kõik ühtlaseks. Valasin toorjuustusegu küpsisepõhjale ja küpsetasin eelsoojendatud ahjus 150*C juures umbes 40-45 minutit, kuni segu oli hüübinud, aga vormi liigutamisel keskelt veel võdises (see on ainuke asi, mis ma Nami retseptist erinevalt teen- tunnen, et madalamal temperatuuril küpsetades on eksimisvõimalus väiksem ja kook tuleb kreemjam). Siis tõstsin koogi ahjust välja ja lasin pool tunnikest jahtuda.\n" +
                    "\n" +
                    "Viimaks võtsin hapukoore ja segasin suhkru ning vanilliekstraktiga läbi, valasin ettevaatlikult toorjuustukihile ja küpsetasin 230*C ahjus 5-6 minutit, kuni hapukoorekiht oli tahenenud. Siis lasin koogil täielikult jahtuda ja üleöö jahedas puhata. "
            })
        },

        routes() {
            this.namespace = "api"

            this.get("/recipes", (schema) => {
                return schema.recipes.all()
            })

            this.get("/recipes/:id", (schema, request) => {
                let id = request.params.id
                return schema.recipes.find(id)
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
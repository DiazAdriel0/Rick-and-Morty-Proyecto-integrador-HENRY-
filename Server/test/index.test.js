const app = require('./../src/app');
const session = require('supertest');
const agent = session(app);
const { users } = require('./../src/utils/users')

describe("Test de RUTAS", ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            let response = await agent.get('/rickandmorty/character/1')
            expect(response.body).toHaveProperty("id")
            expect(response.body).toHaveProperty("name")
            expect(response.body).toHaveProperty("species")
            expect(response.body).toHaveProperty("gender")
            expect(response.body).toHaveProperty("status")
            expect(response.body).toHaveProperty("origin")
            expect(response.body).toHaveProperty("image")
        })
        it('Si hay un error responde con status: 500', async ()=>{
            await agent.get('/rickandmorty/character/8501293812').expect(500)
        })
    })
    describe("GET /rickandmorty/login", ()=>{
        it("Debe dar acceso solo si email y password son correctos", async ()=>{
            let response = await agent.get(`/rickandmorty/login?email=${users[0]?.email}&password=${users[0]?.password}`)
            expect(response.body).toEqual({access: true})
        })
        it("No debe dar acceso si email y password son incorrectos", async ()=>{
            let response = await agent.get(`/rickandmorty/login?email=asdasd@gmail.com&password=asdasd2`)
            expect(response.body).toEqual({access: false})
        })
    })
    describe("POST /rickandmorty/fav", ()=>{
        const char1 = {id:1,name:"Adri"}
        const char2 = {id:2,name:"Adri2"}
        it("Lo enviado por body debe devolverse en un array", async ()=>{
            const {body} = (await agent.post('/rickandmorty/fav').send(char1))
            expect(body).toContainEqual(char1)
        })
        it("Si se hace otro post debe agregarse al array", async ()=> {
            const {body} = await agent.post('/rickandmorty/fav').send(char2)
            expect(body).toContainEqual(char1)
            expect(body).toContainEqual(char2)
        })
    })
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        const char1 = {id:1,name:"Adri"}
        const char2 = {id:2,name:"Adri2"}
        it("Debe recibir un array igual al que ya había cuando el id no existe", async()=>{
            let responseDelete = await agent.delete('/rickandmorty/fav/7890823908102')
            expect(responseDelete.body).toContainEqual(char1)
            expect(responseDelete.body).toContainEqual(char2)
        })
        it("Debe recibir un array con el elemento eliminado", async ()=>{
            let responseDelete = await agent.delete('/rickandmorty/fav/1')
            expect(responseDelete.body).not.toContainEqual(char1)
        })
    })
})
const caixaController = require('../controllers/caixaEletronico/caixaController')
const httpMocks = require('node-mocks-http');

let req, res, next;

beforeEach(() =>
{
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
})

describe("\nJokenpo Controller", () =>
{
    it("should have a saque method", () =>
    {
        expect(typeof caixaController.saque).toBe('function');
    })

    it("should return 200 status code", () =>
    {
        req.body = {
            valor: 50
        };
        caixaController.saque(req, res)
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled()).toBeTruthy();
    })
    it("should return an error w 400 status code - 1", () =>
    {
        req.body = {
            valor: 51
        };
        caixaController.saque(req, res)
        expect(res.statusCode).toBe(400)
        expect(res._isEndCalled()).toBeTruthy();
    })

    it("should return an error w 400 status code - 2", () =>
    {
        req.body = {
            valor: 'test'
        };
        caixaController.saque(req, res)
        expect(res.statusCode).toBe(400)
        expect(res._isEndCalled()).toBeTruthy();
    })


});
const jokenpoController = require('../controllers/jokenpo/jokenpoController');
const httpMocks = require('node-mocks-http');

let req, res, next;

beforeEach(() =>
{
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
})

describe("\nJokenpo Controller", () =>
{

    it("should have a play method", () =>
    {
        expect(typeof jokenpoController.play).toBe('function');
    })

    it("should return 200 status code", () =>
    {
        req.body = { player1: "Tesoura", player2: "Papel" }
        jokenpoController.play(req, res)
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled()).toBeTruthy();
    })

    it("should return Player 2 win", () =>
    {
        req.body = { player2: "Tesoura", player1: "Papel" }
        jokenpoController.play(req, res)
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._getData()).toStrictEqual({ "Result": "Vitória do player 2" });
    })

    it("should return Player 1 win", () =>
    {
        req.body = { player2: "Pedra", player1: "Papel" }
        jokenpoController.play(req, res)
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._getData()).toStrictEqual({ "Result": "Vitória do player 1" });
    })

    it("should return Empate", () =>
    {
        req.body = { player2: "papel", player1: "Papel" }
        jokenpoController.play(req, res)
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._getData()).toStrictEqual({ "Result": "Empate" });
    })

    it("should return an error w 400 status code", () =>
    {
        req.body = { player2: "Tesoura" }
        jokenpoController.play(req, res)
        expect(res.statusCode).toBe(400)
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._getData()).toStrictEqual("Bad request");
    })
})
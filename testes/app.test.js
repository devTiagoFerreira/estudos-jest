const app = require('../app');

describe('Primeiro teste com J E S T', () => {
    it('Deve retornar "falso" caso o número for 0', () => {
        const numero = 0;
        expect(app.verdadeiroOuFalso(numero)).toEqual('falso');
    });

    it('Deve retornar "verdadeiro" caso o número for 1', () => {
        const numero = 1;
        expect(app.verdadeiroOuFalso(numero)).toEqual('verdadeiro');
    });
});

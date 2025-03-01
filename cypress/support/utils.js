// cypress/support/utils.js
import { generate } from 'gerador-validador-cpf';

export const generateTestData = () => {
    const email = `teste${Date.now()}@gmail.com`; 
    const nome = 'pedro';
    const senha = 'Senha@123';
    const phone = '46985555555';
    const CEP = '85660000';
    const cpf = generate(); 

    return {
        email,
        nome,
        senha,
        phone,
        CEP,
        cpf
    };
};

export const formatCPF = (cpf) => cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');

export const formatPhone = (phone) => phone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

export const formatCEP = (CEP) => CEP.replace(/^(\d{5})(\d{3})$/, '$1-$2');

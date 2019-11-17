const mongoose = require("mongoose");

const products = new Schema({
    _id: {
        type: Schema.ObjectId, 
        auto: true 
    },
    name: {
        type: String,
        required: "Qual o nome do produto?"
    },
    desc: {
        type: String,
    },
    imgURL: {
        type: String,
        required: "Imagem invalida"  
    },
    value: {
        type: Number,
        required: "Qual o valor do produto?"
    },
    category: {
        type: String,
        required: "Insira uma categoria",
        enum: ['Processador', 'Memoria', 'Armazenamento', 'PlacaMae', 'PlacaDeVideo', 'Fonte']
        //isso ta certo?
    },
});

const user = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    name: {
        type: String,
        required: "Insira seu Nome"
    },
    email: {
        type: String,
        required: "Insira seu Email",
        unique: true
    },
    password: {
        type: String,
        required: "Insira sua Senha"
    },
    cart: {
        type: [{ 
            type: mongoose.Schema.Types.ObjectId,ref:'products'
            //queria que pegasse os IDs dos produtos e armazenasse aqui, nao sei se é isso
        }]
        
    }
})

const order = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,ref:'user' //acho que isso vai pegar o id do comprador
    },
    items: {
        //travei de novo era pra ser o carrinho do comprador
    },
    total: {
        //soma dos valores dos produtos no carrinho, kkk nao tenho ideia como fazer isso, mas deve ser facil
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Products', products);
export default mongoose.model('User', user);
export default mongoose.model('Order', order);
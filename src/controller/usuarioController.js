import service from "../service/usuarioService.js";

const controller = {
    ListarUsuario: async(req, res)=>{  
        const respuesta = await service.ListarUsuario();        
        res.render("usuario",{rpt: respuesta});
    },

    AgregarUsuario: async (req, res)=>{
        const respuesta = await service.AgregarUsuario(req.body);
        res.redirect("/usuario");        
    }
}

    


export default controller;
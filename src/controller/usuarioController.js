import service from "../service/usuarioService.js";

const controller = {
    ListarUsuario: async(req, res)=>{  
        const respuesta = await service.ListarUsuario();  
        console.log(respuesta)      
        res.render("usuario",{rpt: respuesta});
    },

    AgregarUsuario: async (req, res)=>{
        const respuesta = await service.AgregarUsuario(req.body);
        res.redirect("/usuario");        
    },
    BuscarNombre: async(req, res)=>{
        const respuesta = await service.BuscarPorNombre(req.body);
        res.render("usuario", {rpt: respuesta});
    },
    ActualizarUsuario: async(req, res)=>{
        const respuesta = await service.ActualizarPorId(req.body);
        res.redirect("/usuario");
    },
    EliminarPorId: async(req, res)=>{
        const respuesta = await service.EliminarPorID(req.body);
        res.redirect("/usuario");
    }
}

    


export default controller;
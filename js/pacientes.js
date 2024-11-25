class Pacientes {
    constructor (idUserGP, nameGP, fechaNacimientoGP, direccionGP, phoneGP, emailGP, perfilStateGP, nameUserGP, contrasenhaGP){
        this.idUserGP = idUserGP
        this.nameGP = nameGP
        this.fechaNacimientoGP = fechaNacimientoGP
        this.direccionGP = direccionGP
        this.phoneGP = phoneGP
        this.emailGP = emailGP
        this.perfilStateGP = perfilStateGP
        this.nameUserGP = nameUserGP
        this.contrasenhaGP = contrasenhaGP
    
    }
    getUsuario(){
        return this.usuario
    }
    getContrasena(){
        return this.contrasena
    }
}
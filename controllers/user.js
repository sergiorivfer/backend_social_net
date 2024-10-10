// metodo de pueba de controlador user
export const testUser = (req, res) => {
    return res.status(200).send({
        message: "mensaje enviado desde el controlador de usuarios"
    });
};
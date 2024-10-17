// metodo de pueba de controlador Follow
export const testFollow = (req, res) => {
    return res.status(200).send({
        message: "mensaje enviado desde el controlador de seguidores"
    });
};
export const error = (res, error = 'Internal server error') => {
    res.send({error}).status(500)
}
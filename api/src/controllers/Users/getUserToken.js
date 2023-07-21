const { verifyToken } = require('../../utils/jwtHandler');
const { Company } = require('../../db')

const getByToken = async (req, res) =>{
    const { authorization } = req.headers;
	const token = authorization?.split(" ")[1];

	if (token) {
		const data = verifyToken(token);
        if(data){
            const findCompany = await Company.findByPk(data.user.companyId)
            if (findCompany) {
                const info = {
                    data, findCompany
                }
                return res.status(200).send(info);
            }
        }else{
            return res.status(200).send(data);
        }
	}

	return res.status(500).send("Salio todo mal");
}

module.exports = {getByToken}
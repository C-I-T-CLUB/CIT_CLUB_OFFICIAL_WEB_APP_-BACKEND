/**
 * Application module dependencies
 */
const jwt_decode = require ( 'jwt-decode' );

/**
 * Internal module dependencies
 */
 const { CitclubMember, CitclubAccount} = require ( '../../database/index');

//Dashboard module
const dashboard = (req, res ) => {
    const token = req.header ('auth-token').slice ( 7, req.header ('auth-token').length);
    const userDetails = jwt_decode (token)
    CitclubMember.findOne (
        {_id: userDetails.id}
    )
    .then ( (member) => {
        res
        .status (200)
        .json ( {
            email: member.email,
            phonenumber: member.phonenumber,
            programingRating: member.programingRating,
            designRating: member.designRating,
            fieldOfInterest: member.fieldOfInterest,
        });
    });
};

//Export dashboard module
module.exports =dashboard;
using apiSelfStudy.Models;

namespace apiSelfStudy.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}

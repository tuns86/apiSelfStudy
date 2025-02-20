using apiSelfStudy.Models;

namespace apiSelfStudy.Interfaces
{
    public interface IPortfolioRepository
    {
        Task<List<Stock>> GetUserPortfolio(AppUser user);
    }
}

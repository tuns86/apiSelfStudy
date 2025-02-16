using apiSelfStudy.Models;

namespace apiSelfStudy.Interfaces
{
    public interface ICommentRepository
    {
        Task<List<Comment>> GetAllAsync();
    }
}

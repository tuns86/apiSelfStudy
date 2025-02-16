using apiSelfStudy.Data;
using apiSelfStudy.Interfaces;
using apiSelfStudy.Models;
using Microsoft.EntityFrameworkCore;

namespace apiSelfStudy.Repository
{
    public class CommentRepository : ICommentRepository
    {
        private readonly ApplicationDBContext _context;
        public CommentRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<List<Comment>> GetAllAsync()
        {
            return await _context.Comments.ToListAsync();
        }
    }
}

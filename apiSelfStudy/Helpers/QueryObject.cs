namespace apiSelfStudy.Helpers
{
    public class QueryObject
    {
        // filter
        public string? Symbol { get; set; } = null;
        public string? CompanyName { get; set; } = null;
        // sort
        public string? SortBy { get; set; } = null;
        public bool IsDecsending { get; set; } = false;
        // paging
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 20;
    }
}

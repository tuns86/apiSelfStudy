using apiSelfStudy.Data;
using apiSelfStudy.Dtos.Stock;
using apiSelfStudy.Interfaces;
using apiSelfStudy.Mappers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace apiSelfStudy.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly IStockRepository _stockRepo;
        public StockController(IStockRepository stockRepo)
        {
            _stockRepo = stockRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var stock = await _stockRepo.GetAllAsync();

            var stockDto = stock.Select(s => s.ToStockDto());

            return Ok(stock);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var stock = await _stockRepo.GetByIdAsync(id);

            if (stock is null)
            {
                return NotFound();
            }

            return Ok(stock.ToStockDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockRequestDto stockDto) 
        {
            var stockModel = stockDto.ToStockFromCreateDTO();
            await _stockRepo.CreateAsync(stockModel);
            return CreatedAtAction(nameof(GetById), new { id = stockModel.Id }, stockModel);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockRequestDto updateDto)
        {
            var stockModel = await _stockRepo.UpdateAsync(id, updateDto);


            if (stockModel is null)
            {
                return NotFound();
            }

            return Ok(stockModel.ToStockDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var stockModel = await _stockRepo.DeleteAsync(id);

            if (stockModel is null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}

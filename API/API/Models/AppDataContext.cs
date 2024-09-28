using Microsoft.EntityFrameworkCore;

namespace API.Models;

//Implementar a herança da classe DbContext
public class AppDataContext : DbContext
{
    //Informar quais as classes serão tabelas no banco de dados
    public DbSet<Produto> Produtos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=Ecommerce.db");
    }

}
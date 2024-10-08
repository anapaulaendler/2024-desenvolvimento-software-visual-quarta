namespace API.Models;

public class Produto
{
    //C# - Contrutor da classe
    public Produto()
    {
        Id = Guid.NewGuid().ToString();
        CriadoEm = DateTime.Now;
    }
    //C# - Atributo com get e set
    public string? Id { get; set; }
    /* Por padrão, o Entity Framework interpreta uma propriedade que é chamada de ID ou 
    nome_classeID como sendo a chave primária. */
    public string? Descricao { get; set; }
    public string? Nome { get; set; }
    public double Preco { get; set; }
    public int Quantidade { get; set; }
    public DateTime CriadoEm { get; set; }
}

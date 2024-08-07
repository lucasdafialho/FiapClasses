package entidades;

import java.time.LocalDate;
import java.util.Date;

public class Cupom extends _EntidadeBase{
    private String codigo;
    private char tipoDesconto;
    private double desconto;
    private LocalDate validade;
    private int limiteUsos;

    public Cupom() {
    }

    public Cupom(int id, String codigo, char tipoDesconto, double desconto, LocalDate validade, int limiteUsos) {
        super(id);
        this.codigo = codigo;
        this.tipoDesconto = tipoDesconto;
        this.desconto = desconto;
        this.validade = validade;
        this.limiteUsos = limiteUsos;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public char getTipoDesconto() {
        return tipoDesconto;
    }

    public void setTipoDesconto(char tipoDesconto) {
        this.tipoDesconto = tipoDesconto;
    }

    public double getDesconto() {
        return desconto;
    }

    public void setDesconto(double desconto) {
        this.desconto = desconto;
    }

    public LocalDate getValidade() {
        return validade;
    }

    public void setValidade(LocalDate validade) {
        this.validade = validade;
    }

    public int getLimiteUsos() {
        return limiteUsos;
    }

    public void setLimiteUsos(int limiteUsos) {
        this.limiteUsos = limiteUsos;
    }

    @Override
    public String toString() {
        return "Cupom{" +
                "codigo='" + codigo + '\'' +
                ", tipoDesconto=" + tipoDesconto +
                ", desconto=" + desconto +
                ", validade=" + validade +
                ", limiteUsos=" + limiteUsos +
                "} " + super.toString();
    }
}

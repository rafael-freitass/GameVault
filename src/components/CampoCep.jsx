import React, { useState } from "react";
import buscarCep from "../api/buscaCep";
import { mascaraCep, validaCep } from "../utils/mascaraCep";

export default function CampoCep() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [tocado, setTocado] = useState(false);

  function handleChange(e) {
    const valor = mascaraCep(e.target.value);
    setCep(valor);
    setTocado(true);
    setErro("");
    setEndereco(null);
  }

  async function handleSubmit(e) {
    e?.preventDefault();
    const somenteDigitos = cep.replace(/\D/g, "");

    if (!validaCep?.(somenteDigitos)) {
      setErro("CEP inválido. Use 8 dígitos (ex.: 01310-000).");
      setEndereco(null);
      return;
    }

    try {
      setLoading(true);
      setErro("");
      setEndereco(null);

      const dados = await buscarCep(somenteDigitos);
      if (dados?.erro) {
        setErro("Endereço não encontrado para este CEP.");
        setEndereco(null);
      } else {
        setEndereco(dados);
      }
    } catch (err) {
      setErro("Falha ao consultar o CEP. Tente novamente.");
      setEndereco(null);
    } finally {
      setLoading(false);
    }
  }

  const invalido = tocado && cep && !validaCep?.(cep.replace(/\D/g, ""));

  return (
    <form onSubmit={handleSubmit} aria-labelledby="tit-cep">
      <div className="mb-2">
      </div>

      <label htmlFor="cep" className="form-label">CEP</label>

      <div className="input-group">
        <input
          id="cep"
          type="text"
          className={`form-control ${invalido ? "is-invalid" : ""}`}
          placeholder="00000-000"
          value={cep}
          onChange={handleChange}
          inputMode="numeric"
          autoComplete="postal-code"
          aria-describedby="ajuda-cep"
        />
        <button
          type="submit"
          className="btn btn-primary btn-dark"
          disabled={loading}
        >
          {loading ? (
            <span className="d-inline-flex align-items-center gap-2">
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Buscando…
            </span>
          ) : (
            "Buscar CEP"
          )}
        </button>
        <div className="invalid-feedback">CEP inválido. Ex.: 01310-000</div>
      </div>

      {erro && (
        <div className="alert alert-danger mt-3 mb-0" role="alert">
          {erro}
        </div>
      )}

      {endereco && !erro && (
        <div className="card shadow-sm border-0 mt-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-semibold">Resultado para {endereco.cep || cep}</span>
              <span className="badge text-bg-dark">Disponível</span>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item px-0">
                <div className="row">
                  <div className="col-5 text-muted">Logradouro</div>
                  <div className="col-7">{endereco.logradouro || "—"}</div>
                </div>
              </li>
              <li className="list-group-item px-0">
                <div className="row">
                  <div className="col-5 text-muted">Bairro</div>
                  <div className="col-7">{endereco.bairro || "—"}</div>
                </div>
              </li>
              <li className="list-group-item px-0">
                <div className="row">
                  <div className="col-5 text-muted">Cidade/UF</div>
                  <div className="col-7">
                    {(endereco.localidade || "—")} / {(endereco.uf || "—")}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      
      <div className="visually-hidden" aria-live="polite">
        {loading ? "Consultando CEP…" : erro ? `Erro: ${erro}` : endereco ? "Resultado carregado." : ""}
      </div>
    </form>
  );
}
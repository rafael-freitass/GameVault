# 🕹️ GameVault 🎮

> **GameVault** é uma aplicação feita para a matéria de **Desenvolvimento Web (WDev)**. Ela funciona como uma **vitrine virtual retrô** com listagem de produtos, página de detalhes e simulação de compra consultando **CEP** via **viaCEP**.

---

## 🌟 Sobre o Projeto

A **GameVault** exibe uma lista de produtos com:

* 🖼️ **Imagem**
* 📝 **Nome**
* 🏭 **Descrição**
* 💰 **Preço**
* 🔧 **Especificacao**
* ⚙️ **Fabricante**

Ao clicar em um **card**, o usuário é levado para a **página de detalhes** do produto, onde pode:

* Ver informações completas do item;
* Inserir um **CEP de entrega**;
* Consultar automaticamente **cidade e UF** usando a **API viaCEP**;
* Clicar em **Comprar** para **simular uma compra**.

---

## 🚀 Tecnologias Utilizadas

* ⚛️ **React.js**
* ✨ **Bootstrap / CSS Puro**
* 🧱 **Componentização**
* 📱 **Responsividade Total**
* 🪄 **API viaCEP**

---

## 🧠 Conceitos Aplicados

* ⚛️ **Hooks** (`useState`, `useEffect`) para controle de estado e efeitos colaterais
* 📦 **Props** e **componentização** para reaproveitamento de elementos
* 🌍 **Fetch** para integração com API externa (viaCEP)
* 📱 **Design Responsivo**

---

## 🌠 API

* **viaCEP**: [https://viacep.com.br/](https://viacep.com.br/)
* Endpoint usado: `https://viacep.com.br/ws/<CEP>/json/` (retorna `logradouro`, `bairro`, `localidade` e `uf`)
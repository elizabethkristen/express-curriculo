# Cadastro de Currículo API

Esta é uma API para um sistema de cadastro de currículo, desenvolvida com Node.js, Express e TypeScript. O projeto permite gerenciar candidatos e suas informações relacionadas, como experiências profissionais, educação, habilidades e idiomas.

## Índice

- [Requisitos](#requisitos)
- [Configuração](#configuração)
- [Execução](#execução)
- [Rotas da API](#rotas-da-api)
  - [Candidatos](#candidatos)
- [Licença](#licença)

## Requisitos

- [Node.js](https://nodejs.org/) v14 ou superior
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) para o banco de dados

## Configuração

1. Clone este repositório:

    ```bash
    git clone https://github.com/seu-usuario/nome-do-projeto.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd nome-do-projeto
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Configure as credenciais do banco de dados no arquivo `src/config/database.ts` com as configurações corretas para o seu ambiente.

## Execução

Você pode executar o projeto em modo de desenvolvimento usando o comando:

```bash
npm run dev
   ```


## Rotas da API

### Candidatos

- **Criar um novo candidato**: `POST /candidatos`
    - **Descrição**: Cria um novo candidato com os campos relacionados (experiências profissionais, educação, habilidades e idiomas).
    - **Corpo da requisição**: JSON contendo os dados do candidato a ser criado.
    - **Exemplo de corpo da requisição**:

        ```json
              {
          "nome": "Rafael Costa",
          "email": "rafael.costa@gmail.com",
          "telefone": "(11) 87654-3210",
          "data_nascimento": "1989-10-10",
          "endereco": "Avenida Paulista, 123",
          "experiencias": [
            {
              "empresa": "Innovatech",
              "cargo": "Desenvolvedor Backend",
              "data_inicio": "2019-04-01",
              "data_fim": "2022-11-30",
              "descricao": "Desenvolvimento de APIs e integrações com sistemas internos e externos."
            }
          ],
          "educacoes": [
            {
              "instituicao": "Universidade Federal",
              "grau_academico": "Sistemas de Informação",
              "data_inicio": "2010-02-01",
              "data_fim": "2014-12-31",
              "descricao": "Bacharelado em Sistemas de Informação."
            }
          ],
          "habilidades": [
            {
              "habilidade": "Python",
              "nivel": "Avançado"
            },
            {
              "habilidade": "Docker",
              "nivel": "Intermediário"
            }
          ],
          "idiomas": [
            {
              "nome": "Idioma",
              "idioma": "Inglês",
              "nivel": "Fluente"
            },
            {
              "nome": "Idioma",
              "idioma": "Espanhol",
              "nivel": "Básico"
            }
          ]
}
        ```

    - **Exemplo de resposta bem-sucedida**:

        ```json
                {
                  "nome": "Rafael Costa",
                  "email": "rafael.costa@gmail.com",
                  "telefone": "(11) 87654-3210",
                  "data_nascimento": "1989-10-10",
                  "endereco": "Avenida Paulista, 123",
                  "experiencias": [
                    {
                      "empresa": "Innovatech",
                      "cargo": "Desenvolvedor Backend",
                      "data_inicio": "2019-04-01",
                      "data_fim": "2022-11-30",
                      "descricao": "Desenvolvimento de APIs e integrações com sistemas internos e externos."
                    }
                  ],
                  "educacoes": [
                    {
                      "instituicao": "Universidade Federal",
                      "grau_academico": "Sistemas de Informação",
                      "data_inicio": "2010-02-01",
                      "data_fim": "2014-12-31",
                      "descricao": "Bacharelado em Sistemas de Informação."
                    }
                  ],
                  "habilidades": [
                    {
                      "habilidade": "Python",
                      "nivel": "Avançado"
                    },
                    {
                      "habilidade": "Docker",
                      "nivel": "Intermediário"
                    }
                  ],
                  "idiomas": [
                    {
                      "nome": "Idioma",
                      "idioma": "Inglês",
                      "nivel": "Fluente"
                    },
                    {
                      "nome": "Idioma",
                      "idioma": "Espanhol",
                      "nivel": "Básico"
                    }
                  ]
                }
        ```

- **Obter todos os candidatos**: `GET /candidatos`
    - **Descrição**: Retorna todos os candidatos com seus campos relacionados.
    - **Exemplo de resposta bem-sucedida**:

        ```json
        [
              {
        "nome": "Rafael Costa",
        "email": "rafael.costa@gmail.com",
        "telefone": "(11) 87654-3210",
        "data_nascimento": "1989-10-10",
        "endereco": "Avenida Paulista, 123",
        "experiencias": [
          {
            "empresa": "Innovatech",
            "cargo": "Desenvolvedor Backend",
            "data_inicio": "2019-04-01",
            "data_fim": "2022-11-30",
            "descricao": "Desenvolvimento de APIs e integrações com sistemas internos e externos."
          }
        ],
        "educacoes": [
          {
            "instituicao": "Universidade Federal",
            "grau_academico": "Sistemas de Informação",
            "data_inicio": "2010-02-01",
            "data_fim": "2014-12-31",
            "descricao": "Bacharelado em Sistemas de Informação."
          }
        ],
        "habilidades": [
          {
            "habilidade": "Python",
            "nivel": "Avançado"
          },
          {
            "habilidade": "Docker",
            "nivel": "Intermediário"
          }
        ],
        "idiomas": [
          {
            "nome": "Idioma",
            "idioma": "Inglês",
            "nivel": "Fluente"
          },
          {
            "nome": "Idioma",
            "idioma": "Espanhol",
            "nivel": "Básico"
          }
        ]
      }
        ]
        ```

- **Obter um candidato por ID**: `GET /candidatos/:id`
    - **Descrição**: Retorna um candidato específico com seus campos relacionados, usando o ID.
    - **Parâmetro de URL**: `id` do candidato a ser recuperado.
    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
          "nome": "Rafael Costa",
          "email": "rafael.costa@gmail.com",
          "telefone": "(11) 87654-3210",
          "data_nascimento": "1989-10-10",
          "endereco": "Avenida Paulista, 123",
          "experiencias": [
            {
              "empresa": "Innovatech",
              "cargo": "Desenvolvedor Backend",
              "data_inicio": "2019-04-01",
              "data_fim": "2022-11-30",
              "descricao": "Desenvolvimento de APIs e integrações com sistemas internos e externos."
            }
          ],
          "educacoes": [
            {
              "instituicao": "Universidade Federal",
              "grau_academico": "Sistemas de Informação",
              "data_inicio": "2010-02-01",
              "data_fim": "2014-12-31",
              "descricao": "Bacharelado em Sistemas de Informação."
            }
          ],
          "habilidades": [
            {
              "habilidade": "Python",
              "nivel": "Avançado"
            },
            {
              "habilidade": "Docker",
              "nivel": "Intermediário"
            }
          ],
          "idiomas": [
            {
              "nome": "Idioma",
              "idioma": "Inglês",
              "nivel": "Fluente"
            },
            {
              "nome": "Idioma",
              "idioma": "Espanhol",
              "nivel": "Básico"
            }
          ]
        }
        ```

    - **Exemplo de resposta para candidato não encontrado**:

        ```json
        {
            "error": "Candidato não encontrado"
        }
        ```

- **Atualizar um candidato por ID**: `PUT /candidatos/:id`
    - **Descrição**: Atualiza um candidato específico com base em seu ID, juntamente com seus campos relacionados.
    - **Parâmetro de URL**: `id` do candidato a ser atualizado.
    - **Corpo da requisição**: JSON contendo os dados a serem atualizados.
    - **Exemplo de corpo da requisição**:

        ```json
              {
                "nome": "João Silva",
                "email": "<joao.silva@gmail.com>",
                "telefone": "123456789",
                "data_nascimento": "1990-01-01",
                "endereco": "Rua Exemplo, 123",
                "experiencias": [
                  {
                    "empresa": "Empresa Exemplo",
                    "cargo": "Desenvolvedor",
                    "data_inicio": "2018-01-01",
                    "data_fim": "2020-12-31",
                    "descricao": "Desenvolvimento de software."
                  }
                ],
                "educacoes": [
                  {
                    "instituicao": "Universidade Exemplo",
                    "curso": "Ciência da Computação",
                    "data_inicio": "2014-03-01",
                    "data_fim": "2018-12-31"
                  }
                ],
                "habilidades": [
                  {
                    "nome": "Programação",
                    "nivel": "Avançado"
                  }
                ],
                "idiomas": [
                  {
                    "nome": "Inglês",
                    "nivel": "Fluente"
                  }
                ]
              }
        ```

    - **Exemplo de resposta bem-sucedida**:

        ```json
              {
                "nome": "João Silva",
                "email": "<joao.silva@gmail.com>",
                "telefone": "123456789",
                "data_nascimento": "1990-01-01",
                "endereco": "Rua Exemplo, 123",
                "experiencias": [
                  {
                    "empresa": "Empresa Exemplo",
                    "cargo": "Desenvolvedor",
                    "data_inicio": "2018-01-01",
                    "data_fim": "2020-12-31",
                    "descricao": "Desenvolvimento de software."
                  }
                ],
                "educacoes": [
                  {
                    "instituicao": "Universidade Exemplo",
                    "curso": "Ciência da Computação",
                    "data_inicio": "2014-03-01",
                    "data_fim": "2018-12-31"
                  }
                ],
                "habilidades": [
                  {
                    "nome": "Programação",
                    "nivel": "Avançado"
                  }
                ],
                "idiomas": [
                  {
                    "nome": "Inglês",
                    "nivel": "Fluente"
                  }
                ]
              }
        ```

- **Excluir um candidato por ID**: `DELETE /candidatos/:id`
    - **Descrição**: Exclui um candidato específico com base em seu ID, juntamente com seus campos relacionados (experiências profissionais, educação, habilidades e idiomas).
    - **Parâmetro de URL**: `id` do candidato a ser excluído.
    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "mensagem": "Candidato excluído com sucesso"
        }
        ```

    - **Exemplo de resposta para candidato não encontrado**:

        ```json
        {
            "error": "Candidato não encontrado"
        }
        ```


# Cadastro de Currículo API - Rotas de Educação

Esta seção descreve as rotas disponíveis para manipular as informações de educação de um candidato. As rotas permitem adicionar, obter, atualizar e excluir registros de educação de um candidato específico.

## Rotas de Educação

- **Adicionar uma educação a um candidato**: `POST /candidatos/:candidato_id/educacao`
    - **Descrição**: Adiciona uma nova educação ao candidato especificado pelo `candidato_id`.
    - **Corpo da requisição**: JSON contendo os dados da educação a ser adicionada.
    - **Exemplo de corpo da requisição**:

        ```json
        {
            "instituicao": "Universidade Exemplo",
            "grau_academico": "Bacharelado",
            "data_inicio": "2014-03-01",
            "data_fim": "2018-12-31",
            "descricao": "Curso de Ciência da Computação."
        }
        ```

    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "educacao_id": 1,
            "candidato_id": 1,
            "instituicao": "Universidade Exemplo",
            "grau_academico": "Bacharelado",
            "data_inicio": "2014-03-01",
            "data_fim": "2018-12-31",
            "descricao": "Curso de Ciência da Computação."
        }
        ```

- **Obter todas as educações de um candidato**: `GET /candidatos/:candidato_id/educacao`
    - **Descrição**: Retorna todas as educações do candidato especificado pelo `candidato_id`.
    - **Exemplo de resposta bem-sucedida**:

        ```json
        [
            {
                "educacao_id": 1,
                "candidato_id": 1,
                "instituicao": "Universidade Exemplo",
                "grau_academico": "Bacharelado",
                "data_inicio": "2014-03-01",
                "data_fim": "2018-12-31",
                "descricao": "Curso de Ciência da Computação."
            },
            // Outras educações do candidato...
        ]
        ```

- **Atualizar uma educação de um candidato**: `PUT /candidatos/:candidato_id/educacao/:educacao_id`
    - **Descrição**: Atualiza uma educação específica de um candidato, com base nos IDs fornecidos.
    - **Parâmetro de URL**: `candidato_id` e `educacao_id` do registro a ser atualizado.
    - **Corpo da requisição**: JSON contendo os dados a serem atualizados.
    - **Exemplo de corpo da requisição**:

        ```json
        {
            "instituicao": "Universidade Atualizada",
            "grau_academico": "Mestrado",
            "data_inicio": "2014-03-01",
            "data_fim": "2018-12-31",
            "descricao": "Curso de Engenharia de Software."
        }
        ```

    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "educacao_id": 1,
            "candidato_id": 1,
            "instituicao": "Universidade Atualizada",
            "grau_academico": "Mestrado",
            "data_inicio": "2014-03-01",
            "data_fim": "2018-12-31",
            "descricao": "Curso de Engenharia de Software."
        }
        ```

- **Excluir uma educação de um candidato**: `DELETE /candidatos/:candidato_id/educacao/:educacao_id`
    - **Descrição**: Exclui uma educação específica de um candidato, com base nos IDs fornecidos.
    - **Parâmetro de URL**: `candidato_id` e `educacao_id` do registro a ser excluído.
    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "mensagem": "Educação excluída com sucesso"
        }
        ```

    - **Exemplo de resposta para educação não encontrada**:

        ```json
        {
            "error": "Educação não encontrada"
        }
        ```



## Rotas de Experiência Profissional

- **Adicionar uma experiência profissional a um candidato**: `POST /candidatos/:candidato_id/experiencias`
    - **Descrição**: Adiciona uma nova experiência profissional ao candidato especificado pelo `candidato_id`.
    - **Corpo da requisição**: JSON contendo os dados da experiência profissional a ser adicionada.
    - **Exemplo de corpo da requisição**:

        ```json
        {
            "empresa": "Empresa Exemplo",
            "cargo": "Desenvolvedor",
            "data_inicio": "2018-01-01",
            "data_fim": "2020-12-31",
            "descricao": "Desenvolvimento de software."
        }
        ```

    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "experiencia_id": 1,
            "candidato_id": 1,
            "empresa": "Empresa Exemplo",
            "cargo": "Desenvolvedor",
            "data_inicio": "2018-01-01",
            "data_fim": "2020-12-31",
            "descricao": "Desenvolvimento de software."
        }
        ```

- **Obter todas as experiências profissionais de um candidato**: `GET /candidatos/:candidato_id/experiencias`
    - **Descrição**: Retorna todas as experiências profissionais do candidato especificado pelo `candidato_id`.
    - **Exemplo de resposta bem-sucedida**:

        ```json
        [
            {
                "experiencia_id": 1,
                "candidato_id": 1,
                "empresa": "Empresa Exemplo",
                "cargo": "Desenvolvedor",
                "data_inicio": "2018-01-01",
                "data_fim": "2020-12-31",
                "descricao": "Desenvolvimento de software."
            },
            // Outras experiências profissionais do candidato...
        ]
        ```

- **Atualizar uma experiência profissional de um candidato**: `PUT /candidatos/:candidato_id/experiencias/:experiencia_id`
    - **Descrição**: Atualiza uma experiência profissional específica de um candidato, com base nos IDs fornecidos.
    - **Parâmetro de URL**: `candidato_id` e `experiencia_id` do registro a ser atualizado.
    - **Corpo da requisição**: JSON contendo os dados a serem atualizados.
    - **Exemplo de corpo da requisição**:

        ```json
        {
            "empresa": "Empresa Atualizada",
            "cargo": "Desenvolvedor Sênior",
            "data_inicio": "2018-01-01",
            "data_fim": "2020-12-31",
            "descricao": "Desenvolvimento de software atualizado."
        }
        ```

    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "experiencia_id": 1,
            "candidato_id": 1,
            "empresa": "Empresa Atualizada",
            "cargo": "Desenvolvedor Sênior",
            "data_inicio": "2018-01-01",
            "data_fim": "2020-12-31",
            "descricao": "Desenvolvimento de software atualizado."
        }
        ```

- **Excluir uma experiência profissional de um candidato**: `DELETE /candidatos/:candidato_id/experiencias/:experiencia_id`
    - **Descrição**: Exclui uma experiência profissional específica de um candidato, com base nos IDs fornecidos.
    - **Parâmetro de URL**: `candidato_id` e `experiencia_id` do registro a ser excluído.
    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "mensagem": "Experiência profissional excluída com sucesso"
        }
        ```

    - **Exemplo de resposta para experiência profissional não encontrada**:

        ```json
        {
            "error": "Experiência profissional não encontrada"
        }
        ```


## Rotas de Habilidades

- **Adicionar uma habilidade a um candidato**: `POST /candidatos/:candidato_id/habilidades`
    - **Descrição**: Adiciona uma nova habilidade ao candidato especificado pelo `candidato_id`.
    - **Corpo da requisição**: JSON contendo os dados da habilidade a ser adicionada.
    - **Exemplo de corpo da requisição**:

        ```json
        {
            "habilidade": "Programação",
            "nivel": "Avançado"
        }
        ```

    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "habilidade_id": 1,
            "candidato_id": 1,
            "habilidade": "Programação",
            "nivel": "Avançado"
        }
        ```

- **Obter todas as habilidades de um candidato**: `GET /candidatos/:candidato_id/habilidades`
    - **Descrição**: Retorna todas as habilidades do candidato especificado pelo `candidato_id`.
    - **Exemplo de resposta bem-sucedida**:

        ```json
        [
            {
                "habilidade_id": 1,
                "candidato_id": 1,
                "habilidade": "Programação",
                "nivel": "Avançado"
            },
            // Outras habilidades do candidato...
        ]
        ```

- **Atualizar uma habilidade de um candidato**: `PUT /candidatos/:candidato_id/habilidades/:habilidade_id`
    - **Descrição**: Atualiza uma habilidade específica de um candidato, com base nos IDs fornecidos.
    - **Parâmetro de URL**: `candidato_id` e `habilidade_id` do registro a ser atualizado.
    - **Corpo da requisição**: JSON contendo os dados a serem atualizados.
    - **Exemplo de corpo da requisição**:

        ```json
        {
            "habilidade": "Programação",
            "nivel": "Avançado"
        }
        ```

    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "habilidade_id": 1,
            "candidato_id": 1,
            "habilidade": "Programação",
            "nivel": "Avançado"
        }
        ```

- **Excluir uma habilidade de um candidato**: `DELETE /candidatos/:candidato_id/habilidades/:habilidade_id`
    - **Descrição**: Exclui uma habilidade específica de um candidato, com base nos IDs fornecidos.
    - **Parâmetro de URL**: `candidato_id` e `habilidade_id` do registro a ser excluído.
    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "mensagem": "Habilidade excluída com sucesso"
        }
        ```

    - **Exemplo de resposta para habilidade não encontrada**:

        ```json
        {
            "error": "Habilidade não encontrada"
        }
        ```



## Rotas de Idiomas

- **Adicionar um idioma a um candidato**: `POST /candidatos/:candidato_id/idiomas`
    - **Descrição**: Adiciona um novo idioma ao candidato especificado pelo `candidato_id`.
    - **Corpo da requisição**: JSON contendo os dados do idioma a ser adicionado.
    - **Exemplo de corpo da requisição**:

        ```json
        {
            "nome": "Inglês",
            "nivel": "Fluente"
        }
        ```

    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "idioma_id": 1,
            "candidato_id": 1,
            "nome": "Inglês",
            "nivel": "Fluente"
        }
        ```

- **Obter todos os idiomas de um candidato**: `GET /candidatos/:candidato_id/idiomas`
    - **Descrição**: Retorna todos os idiomas do candidato especificado pelo `candidato_id`.
    - **Exemplo de resposta bem-sucedida**:

        ```json
        [
            {
                "idioma_id": 1,
                "candidato_id": 1,
                "nome": "Inglês",
                "nivel": "Fluente"
            },
            // Outros idiomas do candidato...
        ]
        ```

- **Atualizar um idioma de um candidato**: `PUT /candidatos/:candidato_id/idiomas/:idioma_id`
    - **Descrição**: Atualiza um idioma específico de um candidato, com base nos IDs fornecidos.
    - **Parâmetro de URL**: `candidato_id` e `idioma_id` do registro a ser atualizado.
    - **Corpo da requisição**: JSON contendo os dados a serem atualizados.
    - **Exemplo de corpo da requisição**:

        ```json
        {
            "nome": "Inglês",
            "nivel": "Intermediário"
        }
        ```

    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "idioma_id": 1,
            "candidato_id": 1,
            "nome": "Inglês",
            "nivel": "Intermediário"
        }
        ```

- **Excluir um idioma de um candidato**: `DELETE /candidatos/:candidato_id/idiomas/:idioma_id`
    - **Descrição**: Exclui um idioma específico de um candidato, com base nos IDs fornecidos.
    - **Parâmetro de URL**: `candidato_id` e `idioma_id` do registro a ser excluído.
    - **Exemplo de resposta bem-sucedida**:

        ```json
        {
            "mensagem": "Idioma excluído com sucesso"
        }
        ```

    - **Exemplo de resposta para idioma não encontrado**:

        ```json
        {
            "error": "Idioma não encontrado"
        }
        ```

# maven-frontend-exemplo
Exemplo da geração de frontend otimizado com gulp somente utilizando maven.

## Comando maven

**Verificando arquivos otimizados**

> mvn -Pprod clean package

target/webapp-pre-dist
* Gerado arquivos js e css concatenados definidos index.hml.
    
target/webapp-pre
* Gerado arquivos js e css minificados.
* Arquivos renomeados com o hash para cache infinito.

**Rodando o projeto com Jetty**
>  mvn jetty:run

Para verificar acesse: http://localhost:8080

**Rodando o projeto otimizado com Jetty**
>  mvn -Pprod clean package jetty:run-war

Para verificar acesse: http://localhost:8080
# maven-frontend-exemplo
Exemplo da geração de frontend otimizado com gulp somente utilizando maven.
As tarefas gulp (minificação, hash nos arquivos para cache foram baseadas no framework https://jhipster.github.io/production/)

## Plugin maven para node, npm, bower e gulp

https://github.com/eirslett/frontend-maven-plugin

## Arquivos de configuração

/maven-frontend-exemplo/pom.xml (Configuração do plugin front-end-maven-plugin e dos diretórios utilizados pelo node e bower)

/maven-frontend-exemplo/src/main/frontend/bower.json (Configuração de dependências do bower)

/maven-frontend-exemplo/src/main/frontend/gulpfile.js (Configuração das tarefas do gulp)

/maven-frontend-exemplo/src/main/frontend/package.json (Configurações dos pacotes do node: bower, gulp e gulp-*)

/maven-frontend-exemplo/src/main/frontend/.bowerrc  (Configura para que os pacotes bower sejam colocados em /maven-frontend-exemplo/webapp/lib)

## Comando maven

**Verificando arquivos otimizados**

> mvn -Pprod clean package

/maven-frontend-exemplo/target/webapp-pre-dist
* Gerado arquivos js e css concatenados definidos index.hml.
    
/maven-frontend-exemplo/target/webapp-pre
* Gerado arquivos js e css minificados.
* Arquivos renomeados com o hash para cache infinito.

**Rodando o projeto com Jetty**
>  mvn jetty:run

Para verificar acesse: http://localhost:8080

**Rodando o projeto otimizado com Jetty**
>  mvn -Pprod clean package jetty:run-war

Para verificar acesse: http://localhost:8080

**Adicinando pacote npm e bower**

Para adicionar novos pacotes rpm para utilização no gulp:

>  mvn -Pprod generate-resources -Drpm.install.param="--save-dev (pacote)"

* /maven-frontend-exemplo/src/main/frontend/package.json
* /maven-frontend-exemplo/src/main/frontend/gulpfile.js
* /maven-frontend-exemplo/src/main/frontend/node_modules

Para adicionar novos pacotes bower:

>  mvn -Pprod generate-resources -Dbower.install.param="--save (pacote)"

* /maven-frontend-exemplo/src/main/frontend/bower.json
* /maven-frontend-exemplo/src/main/webapp/lib

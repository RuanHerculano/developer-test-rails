# Teste 5

### 1 Para você, o que é o código ideal?

É o código auto explicável, que é fácil de ler, e dispensa documentação.
A documentação apenas complementa o código, não explica o que ele faz.

### 2 Descreva o passo a passo de um workflow git

Bem a melhor forma que achei para explicar é de acordo com a seguinte imagem
[![git-workflow.png](https://s1.postimg.org/7urmq8mob3/git-workflow.png)](https://postimg.org/image/6dlhohijkb/)

#### Explicando as branches:

**master**: A branch master tem a versão do código de produção, o código estável no qual os usuários
vão usufruir dele.

**hotfix**: Nessa branch são feitas as correções de erros não mapeadas pelos testes unitários,
testes de integração e testes manuais que acabaram indo parar na branch master,
release ou até mesmo na branch de development.

**release**: Está branch é responsável por ser a próxima versão estável do sistema
que vai ser mergeado em development. Geralmente algumas empresas deixam essa versão para teste por algum tempo,
para um grupo de usuários específico, para que os mesmos possam identificar bugs antes que essa
versão vá para produção, fazendo com que o erro afete um grupo menor de usuários,
e que possa ser resolvido antes de chegar em produção.

**development**: A development vai receber os novas features que são desenvolvidas, essa branch tem o código
em nível preparatório para a próxima branch release.

**feature**: Nessa branch são desenvolvidas as novas features (Funcionalidades).

#### O fluxo de desenvolvimento:
  
1. Uma nova branch feature é criada, ela adiciona ou melhora uma funcionalidade no sistema.
2. Quando a funcionalidade está pronta, é aberto um PR da branch feature criada para branch development.
3. Quando o PR revebe duas aprovações essa branch é mergeada para a branch development.
4. Depois de um tempo definido pela organização, a partir dessa branch development,
é gerado a branch release.
5. Em determinado momento, essa branch release é mergeada para a branch master.
(Dependendo da organização, podem haver processos que antecedem esse merge).
6. O fluxo está completo.

#### Correção de bugs  
##### Quando um bug for identificado na branch master
###### Caso a solução seja simples e não impeça o usuário de acessar o sistema.
1. Uma branch hotfix é criada a partir da branch master
2. Na branch supracitada é feita a correção para o bug.
3. Quando for corrigido o bug, é aberto um PR com a correção para o bug.
4. Quando esse PR recebe duas aprovações essa correção é mergeada para a branch master.

###### Caso seja um bug crítico que quebra a aplicação e impede o usuário de acessar o sistema.
1. Dar um RollBack para a release anterior
2. Uma branch hotfix é criada a partir da branch master
3. Quando for corrigido o bug, é aberto um PR com a correção para o bug.
4. Quando esse PR recebe duas aprovações essa correção é mergeada para a branch development.

##### Quando um bug for identificado na branch release
###### Caso seja uma solução rápida de ser resolvida, e que pode ser consertada antes que a branch release seja mergeada pra master:
1. Uma branch hotfix é criada a partir da branch release
2. Na branch supracitada é feita a correção para o bug.
3. Quando for corrigido o bug, é aberto um PR com a correção para o bug.
4. Quando esse PR recebe duas aprovações essa correção é mergeada para a branch release.	

###### Caso não
1. A funcionalidade que introduzia esse erro é retirada da branch de release.
2. Uma branch hotfix é criada a partir da branch release
3. Quando for corrigido o bug, é aberto um PR com a correção para o bug.
4. Quando esse PR recebe duas aprovações essa correção é mergeada para a branch development.

### 3 Qual o seu sistema operacional favorito? Justifique.
Sistemas que tem a base Debian, devido a documentação deles ser mais ampla,
e se pode resolver boa parte dos problemas com 'sudo apt-get install ...'. Além disso,
boa parte das vezes não ser preciso abrir o código fonte de alguma lib,
ententer a estrutura de pacotes, colocar o código manualmente,
e recompilar nada para resolver algum problema.

### 4 Qual o seu framework favorito? Justifique.
Rails. O processo de configuração é bem simples (convenção é melhor que configuração), muitas coisas que são corriqueiras
na implementação do desenvolvedor já vem implementadas de uma forma mais fácil, além de ter uma excelente documentação.

### 5 Qual a sua linguagem de programação favorita? Justifique.
Ruby. Fácil de aprenser, fácil de debugar, e fácil de entender o código que o coleguinha fez.

### 6 Qual a sua pretenção salarial?
5.900,00

### 7 Coloque aqui o link para seu github para que possamos avaliar qualquer projeto anterior seu ou contribuição com projetos de código aberto.
	
https://github.com/RuanHerculano

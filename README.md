PETSHOP-  Teste Prático - dti digital
----------------------------------------------------------------------------------
Senhor Eduardo é proprietário de um canil em Belo Horizonte, ele trabalha com
diversas raças, pequenas e grandes. Eduardo gosta que seus cães estejam sempre
arrumados, felizes e cheirosos.
No bairro do canil, para realizar o banho nos animais, existem três petshops: Meu
Canino Feliz, Vai Rex, e ChowChawgas. Cada um deles cobra preços diferentes para
banho em cães pequenos e grandes e o preço pode variar de acordo com o dia da
semana.
● Meu Canino Feliz: Está distante 2km do canil. Em dias de semana o banho para
cães pequenos custa R$20,00 e o banho em cães grandes custa R$40,00.
Durante os finais de semana o preço dos banhos é aumentado em 20%.
● Vai Rex: Está localizado na mesma avenida do canil, a 1,7km. O preço do banho
para dias úteis em cães pequenos é R$15,00 e em cães grandes é R$50,00.
Durante os finais de semana o preço para cães pequenos é R$ 20,00 e para os
grandes é R$ 55,00.
● ChowChawgas: Fica a 800m do canil. O preço do banho é o mesmo em todos os
dias da semana. Para cães pequenos custa R$30 e para cães grandes R$45,00.
Apesar de se importar muito com seus cãezinhos, Eduardo quer gastar o mínimo
possível. Desenvolva uma solução para encontrar o melhor petshop para levar os cães.
O melhor petshop será o que oferecer menores preços, em caso de empate o melhor é
o mais próximo do canil.
----------------------------------------------------------------------------------
                PROJETO FINAL 
![image](https://github.com/user-attachments/assets/7822d896-9bb2-412b-bdb5-3e87107d8027)

----------------------------------------------------------------------------------             
               TESTE 01
![image](https://github.com/user-attachments/assets/8fba6bba-24dc-4cf1-9272-80848af3ecf2)
----------------------------------------------------------------------------------
               TESTE 02
![image](https://github.com/user-attachments/assets/714f9500-5fb0-4d8b-a05c-51accc2305c2)

----------------------------------------------------------------------------------
               TESTE 03 (Datas erradas)
![image](https://github.com/user-attachments/assets/dc45c6c7-1d10-4031-8097-aa69df348df9)

----------------------------------------------------------------------------------

                     Frontend

React: Utilizado para construir a interface de usuário interativa do aplicativo. React facilita a criação de componentes dinâmicos e o gerenciamento do estado da aplicação.


                      Backend

JavaScript: Implementa a lógica de negócios para calcular o custo total e determinar o melhor petshop com base em preços e distâncias. O backend define os preços e distâncias dos petshops e inclui funções para calcular o custo e encontrar o petshop mais econômico.

Definição de Preços e Distâncias: Contém dados dos petshops, como distâncias e preços para cães pequenos e grandes em dias úteis e fins de semana.

Função calcularCusto: Calcula o custo total com base no petshop selecionado, dia da semana, e quantidade de cães pequenos e grandes.

Função encontrarMelhorPetShop: Encontra o petshop com o menor custo total, considerando também a distância para escolher o mais econômico.
Estilização

CSS: Usado para estilizar a aplicação, definindo o layout e o design dos componentes da interface. O arquivo styles.css aplica as regras de estilo.

----------------------------------------------------------------------------------
                          Lógica Usada

Entrada de Dados pelo Usuário
Data: O usuário insere uma data no formato DD/MM/AAAA. A aplicação valida se a data é correta e calcula o dia da semana correspondente.
Quantidade de Cães Pequenos e Grandes: O usuário insere a quantidade de cães pequenos e grandes que precisam de atendimento.
Validação da Data

A função validarData verifica se a data inserida é válida. Ela checa se o dia, mês e ano estão dentro dos limites aceitáveis e valida casos específicos como fevereiro em anos bissextos.
Cálculo do Dia da Semana

Conversão da Data: A data inserida é dividida em dia, mês e ano. Se o mês for janeiro ou fevereiro, o ano e o mês são ajustados para simplificar o cálculo.
Correção do Calendário Gregoriano: Calcula uma constante de correção C para ajustar o calendário gregoriano.
Cálculo do Dia Juliano: Usa uma fórmula matemática para calcular o dia juliano correspondente à data inserida.
Determinação do Dia da Semana: O dia juliano é convertido para o dia da semana usando o resto da divisão por 7. A aplicação classifica o dia como fim_de_semana se for sábado ou domingo, ou dia_de_semana para os demais dias.
Cálculo de Custo Total

Função calcularCusto: Recebe o petshop, o dia da semana, e a quantidade de cães pequenos e grandes. Calcula o custo total com base nas tarifas do petshop para o tipo de dia (útil ou fim de semana) e na quantidade de cães.
Encontrar o Melhor Petshop

Função encontrarMelhorPetShop: Itera sobre todos os petshops disponíveis e calcula o custo total para cada um usando a função calcularCusto. Compara os custos e escolhe o petshop com o menor custo total. Em caso de empate, o petshop mais próximo (menor distância) é escolhido.
Exibição dos Resultados

Após calcular o melhor petshop, a aplicação exibe o nome do petshop escolhido, o custo total e o dia da semana para o usuário.
-----------------------------------------------------------------------------------------
              Passos para Rodar o Projeto

Certifique-se de que você tem o Node.js e o npm instalados
Link para Instação  (https://nodejs.org/pt)
Versão usada : Node.js v20.16.01 
git clone https://github.com/davieduard0x01/PETSHOP-DTl.git
Navegue até o diretório do projeto:

cd PETSHOP-DTl 

Inicie o Servidor de Desenvolvimento:

npm start

Esse comando (geralmente) abre automaticamente o navegador padrão e acessa o endereço http://localhost:3000, onde o seu aplicativo React estará rodando.
 -----------------------------------------------------------------------------------------
            LINK PARA ACESSAR APLICAÇÃO 
O projeto está hospedado pela plataforma Replit e pode ser acessado através do seguinte link:

[Acesse a Aplicação](https://a2bd9be7-8b6f-4206-a90a-bbcb68e71fb5-00-1m1y35nuck0cu.spock.replit.dev/)

Não é necessário criar uma conta para acessar e testar a aplicação.



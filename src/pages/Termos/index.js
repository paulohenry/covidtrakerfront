import React from 'react';
import { ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles'



export default function Termos2() {

  const nav = useNavigation();

  

  const navigationTo = (screen)=>{
   
    nav.navigate(screen)
  }

  return (
    <ScrollView style={styles.container} >
      <Text style={styles.titles}> Termos de uso</Text>
     
      <Text style={styles.paragraphs}>
    
      Por favor, leia estes termos legais de uso, antes de usar o aplicativo "Covid Tracker". 
Ao utilizar o "Covid Tracker", você aceita e concorda em cumprir os termos e condições aplicáveis nos "termos legais de uso".
Este termo é um acordo vinculativo entre você e o aplicativo "Covid Tracker", que   inclui todo o acesso e uso dessa aplicação, ou que inclui o uso de todas as informações, dados, ferramentas, produtos, serviços e outros itens disponíveis por meio deste.
Ao utilizar esta aplicação, você confirma que compreende e concorda com as seguintes regras dispostas:
1.	Respeito às Leis:
1.	O usuário pode acessar o "Covid Tracker" apenas para finalidades lícitas;
2.	O usuário concorda em usar o aplicativo apenas para os devidos fins e em conformidade com o presente termo e as permissões legais, bem como as políticas aplicadas no Brasil;
3.	Seu acesso é proibido em territórios, onde o conteúdo é considerado ilegal. Aqueles que optarem por acessar este site a partir de outras localidades ou farão por iniciativa própria e serão responsáveis pelo cumprimento das leis locais. Os materiais que não são usados ou exportados para o desenvolvimento das leis brasileiras. Qualquer pendência com relação aos materiais será direta pelas leis brasileiras.
4.	A alteração não autorizada dos conteúdos deste aplicativo é expressamente proibida.
 
1.	Crianças e adolescentes:
1.	A utilização do aplicativo está recomendada apenas para indivíduos com 12 anos ou mais de idade, adolescentes segundo Estatuto da Criança e do Adolescente, sob observação dos pais.
2.	Responsabilidade pelo conteúdo:
1.	O "Covid Tracker" não é responsável pelo conteúdo das informações eventualmente trocadas pelos usuários e entre o usuário e o aplicativo , ou para o "Covid Tracker", sejam elas lícitas ou ilícitas.
2.	O usuário concorda que é o único responsável pela sua própria conduta e pelas informações fornecidas enquanto utiliza o serviço e que é responsável pelas consequências que resultam do fornecimento intencional de dados incorretos.
3.	O usuário concorda em usar "Covid Tracker" e não publicar, enviar, distribuir ou divulgar conteúdo ou informações de caracteres difamatórios, ocultos ou ilícitos, incluindo informações de propriedade exclusiva de pessoas ou empresas, bem como marcas registradas ou informações protegidas por direitos autorais, sem permissão de detentor desses direitos. É vedado ao usuário o compartilhamento de informações ou dados de saúde de terceiros ;
4.	Ninguém pode agir em seu nome no uso do "Covid Tracker". Você é responsável pelo conteúdo que pode usar nessa aplicação, com sua permissão, seu perfil cadastrado. Essa regra não se aplica aos casos de fraude ou outros problemas de segurança da aplicação.
 
1.	Acessibilidade ao conteúdo:
1.	A equipe do "Covid Tracker" não garante que esta aplicação esteja parcial ou completamente funcional para uso em território nacional.
 
1.	Propriedade intelectual:
1.	Uma equipe do "Covid Tracker" e seus colaboradores são detentores do direito de autoria dos conteúdos publicados e apresentados nesta aplicação.  Essa premissa não se aplica às informações de domínio público ou utilidade pública.
2.	Todas as outras marcas comerciais, marcas de serviço, nomes e logotipos que aparecem nesta aplicação são de propriedade de seus direitos reservados.
3.	O aplicativo "Covid Tracker" é um software de código aberto que utiliza por terceiros e se submete aos termos da licença internacional GNU General Public License, versão 3 (GPL-3.0). Os direitos de uso do conteúdo e os relatórios gerados pela aplicação são cedidos pelos desenvolvedores, em especial aqueles que decorrem dos termos da licença Creative Commons - Atribuição-Não Comercial 4.0 Internacional.
4.	Apenas informações divulgadas pelos serviços de saúde devem ser autorizadas para divulgação pública, sem que os dados estejam relacionados a esse tema.
5.	Os dados coletados por meio do "Covid Tracker" podem afetar a sua capacidade de acesso a dispositivos móveis com especificações técnicas mínimas. Neste modo, como as informações utilizadas pelo meio desse aplicativo,  podem não corresponder à expressão real do padrão epidemiológico anterior e local, pois depende da conexão e precisão das antenas das operadoras de telefonia.
 
1.	Leis, regulamentos, direitos e deveres:
1.	É política da equipe do "Covid Tracker" o respeito às normas de Proteção de Dados, o cumprimento de todas as leis e regulamentos aplicáveis, os quais podem ser modificados de tempos em tempos. No caso de qualquer disposição do presente Termos de Uso estar em conflito com qualquer lei ou regulamento aplicável, a lei ou regulamentação aplicável substituirá a disposição contrária.
2.	Estes Termos de Uso do "Covid Tracker" respeita a sua privacidade e está adaptado à Lei 13.709 / 18 LGPD e regulamentações futuras da ANPD e devem ser interpretados e interpretados de acordo com leis internacionais do Brasil, vigentes, sem seguir em conta como suas regras de conflitos de leis. Em qualquer caso de conflito entre leis, regras e regulamentos estrangeiros e no Brasil, leis, regras e regulamentos do Brasil devem prevalecer.
3.	O "Covid Tracker" pode, mas não é obrigatório, monitorar, revisar e restringir o acesso a qualquer área onde os usuários transmitem informações pode retirar ou retirar o acesso a qualquer informação ou acesso a essas informações.
4.	Se você tiver alguma dúvida em relação ao "Covid Tracker", não hesite em contatar-nos pelo e-mail: co.covidtracker@gmail.com 
 
1.	Uso das contribuições.
1.	Ao enviar uma contribuição escrita ou postar informações no "Covid Tracker", você concede uma licença perpétua, isenta de royalties e incondicional para essa aplicação no Ministério da Saúde.
2.	Ao publicar sua contribuição no "Covid Tracker", você pode contribuir para medidas de enfrentamento da saúde pública de importância internacional decorrente do novo coronavírus (http://j.mp/coronaLEIquarentena), de forma agregada (nunca individual) em outros meios de comunicação, e para discutir ou referenciar-se em publicações científicas e educacionais.
3.	Você também concorda que "Covid Tracker" tem o direito, mas não tem obrigação, pode editar ou remover qualquer contribuição, ou incluir qualquer texto em conjunto com outras contribuições, um critério exclusivo da equipe que desenvolve essa aplicação.
4.	Todas as informações fornecidas por usuários ou profissionais de saúde estão protegidos, de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD), Lei Nº 13.709, de 14 de agosto de 2018.
5.	Segundo Capítulo II (Tratamento de Dados Pessoais), Seção II (Tratamento de Dados Pessoais Sensíveis), Art. 13. Na realização de estudos em saúde pública, os órgãos de pesquisa podem ter acesso a bases de dados pessoais, que são autorizados exclusivamente dentro do órgão e estritamente para a realização de estudos e pesquisas e mantidos em ambiente controlado e seguro, conforme práticas de segurança aplicáveis no regulamento específico e que inclui, sempre que possível, uma anonimização ou pseudonimização de dados, bem como considerar os devidos padrões éticos relacionados a estudos e pesquisas.
 
1.	7.5.1 § 1º A divulgação dos resultados ou de qualquer outro estudo ou pesquisa de que trata ou capta este artigo em nenhuma hipótese que possa revelar dados pessoais.
2.	7.5.2 § 2º O órgão de pesquisa será responsável pela segurança da informação permitida no caput deste artigo, não permitida, em circunstância alguma, a transferência dos dados no terceiro.
3.	7.5.3 § 3º O acesso aos dados de que trata este artigo será objeto de autorização por parte da autoridade nacional e das autoridades da área de saúde e sanitárias, sem definição de suas competências.
4.	7.5.4 § 4º Para efeitos deste artigo, a pseudonimização é tratamento por meio de um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo, senão pelo uso de informações adicionais mantidas pelo driver no ambiente controlado e seguro.
2.	Garantia de Sigilo e Anonimato:
1.	Será garantido ou sigiloso e anonimato de todas as informações produzidas pelo usuário no "Covid Tracker", excluídas as leis , ou para tratar de questões de descumprimento.
2.	Reservamo-nos o direito de usar esta informação internamente, nesse limite, sua contribuição é sempre vinculado ao apelido de sua escolha, em substituição aos dados pessoais dos usuários .
3.	O "Covid Tracker", seus colaboradores e usuários, incluindo agências e não usuários, depende dos usuários para uma precisão das contribuições. Uma equipe não se responsabiliza por erros ou imprecisões em qualquer submissão. A deturpação deliberada de informações por um usuário pode constituir uma violação da lei e, se ela for grave, será comunicada às autoridades apropriadas.
 
1.	Atualização do "Covid Tracker";
1.	Modificações dessa aplicação e dos seus Termos de Uso podem ocorrer. A menos que indique ou contrário, seu uso da aplicação indica a inclusão integral dos Termos de Uso, cuja versão vigiada é sempre que você usa o "Covid Tracker". Fique atento como atualizações e, em caso de dúvida, os Termos de Uso estão sempre disponíveis para acesso e concordância ou não.
 
1.	Responsabilidade por ações com base no conteúdo:
1.	10.1 O "Covid Tracker" não assume responsabilidade por danos e / ou danos a pessoas ou bens, em consequência da utilização de idéias, conteúdos, instruções, métodos, produtos ou procedimentos contidos nesta aplicação.
2.	10.2 Em hipótese, alguns profissionais envolvidos no desenvolvimento ou gerenciamento dessa aplicação podem ser responsabilizados por qualquer decisão ou ação tomada por você com base no conteúdo.
3.	10.3 Diante de ameaças ou qualquer outra situação de risco à   saúde, obtenha sempre orientações válidas e atualizadas pelos serviços locais de saúde pública ou Disque Saúde 136 para orientações.
 
1.	Responsabilidade por problemas tecnológicos:
1.	11.1 Eventualmente, todo o conteúdo ou qualquer parte do "Covid Tracker" pode não estar disponível e pode não funcionar corretamente em qualquer momento. Faz considerações razoáveis para evitar problemas tecnológicos, mas em alguns momentos pode ocorrer esses problemas tecnológicos de diversas naturezas, como vírus, rotinas de programação prejudiciais ou problemas relacionados ao aparelho do usuário.
2.	11.2 A aplicação é aplicada "como está" e "conforme está disponível". Sem limite ou nosso aviso geral, não garantimos disponibilidade, integridade, pontualidade, funcionalidade, códigos, seqüenciamento ou velocidade de entrega nessa aplicação ou qualquer parte do conteúdo.
3.	11.3 O "Covid Tracker" não se responsabiliza por qualquer dano ou prejuízo causado pelo desempenho ou falha de desempenho de toda ou qualquer parte da aplicação. O "Covid Tracker" não se responsabiliza por defeitos, atrasos ou erros que podem causar a sua utilização.
4.	11.4 A utilização de todas as funcionalidades do "Covid Tracker" exige disponibilidade de acesso à internet pelo usuário, por wifi ou cabo de rede de dados. A ausência desse pré-requisito pode limitar a utilização de aplicativos com todo o seu potencial de uso. Uma equipe do "Covid Tracker" considerando esse aviso, não assume responsabilidade decorrente dessa limitação.
5.	11.5 Esta isenção de responsabilidade aplica-se a todos e causa danos ou prejuízos causados por eventos, assegura-se de adotar medidas de segurança , técnicas e procedimentos administrativos para proteger os dados pessoais de acesso não perigosos e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito, incluindo aquelas que causam falha de desempenho, erro, omissão, interrupção, apagamento, defeito, atraso na operação ou transmissão, vírus de computador, falha na linha de comunicação, roubo, destruição ou acesso não autorizado, alteração ou uso de qualquer coisa , seja por violação de contrato, comportamento ilícito, negligência ou qualquer outra causa de ação.
 
1.	Considerações Finais
1.	13.1 O acesso ao serviço representa uma aceitação expressa e irrestrita dos Termos de Uso acima descritos. Ao concordar com esses termos, você pode conceder uma licença perpétua, isenção de royalties, licença incondicional para "Covid Tracker", Ministério da Saúde e todas as associações sucessivas, para publicar sua contribuição de forma agregada, nunca individualizada, na própria aplicação, bem como divulgá-los aos serviços de saúde pública relacionados. Você também concorda que o "Covid Tracker" tem o direito, mas não a obrigação, de editar ou remover qualquer contribuição com o critério exclusivo da equipe do "Covid Tracker".
2.	13.2 Este aplicativo não realiza diagnóstico clínico, apenas o assistente do usuário para entender os sinais e os sintomas relacionados às configurações, saúde pública e investigação sobre o coronavírus na sua comunidade.
3.	13.3 É importante ressaltar que o caso de composição de sinais e sintomas, associado a critérios epidemiológicos e indícios de que o usuário pode ser um possível caso suspeito, não se aplica como  um diagnóstico. O Ministério da Saúde orienta que  o mesmo pode procurar o Disque Saúde 136

   
            </Text>

          

      <TouchableOpacity style={styles.button}onPress={()=>{navigationTo('ConfirmRegister')}}>
             <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

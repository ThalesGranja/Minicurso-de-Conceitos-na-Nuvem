import { FC } from "react";

interface StudyGuideProps {
  onBack: () => void;
}

const StudyGuide: FC<StudyGuideProps> = ({ onBack }) => {
  return (
    <div className="p-6 bg-gray-50 rounded shadow-lg w-full max-w-2xl animate-slide-in">
      <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
        <span>📘</span> Bem-vindo à sua Preparação!
      </h2>
      <p className="text-gray-700 mb-4">
        Vamos explorar os conceitos essenciais para que você se sinta confiante no quiz. Aqui está
        um guia para começar:
      </p>

      <div className="space-y-4">
      <section>
  <h3 className="font-semibold text-lg">1. O que é Computação em Nuvem?</h3>
  <p className="text-gray-600">
    A computação em nuvem é a entrega de recursos de TI sob demanda pela internet, como
    armazenamento, processamento, e bancos de dados, sem necessidade de manter infraestrutura
    física local.
  </p>
  <p className="text-gray-600">
    Principais Benefícios:
  </p>
  <ul className="list-disc list-inside text-gray-600">
    <li>Escalabilidade: Recursos ajustáveis conforme a demanda.</li>
    <li>Elasticidade: Adaptação automática para lidar com picos ou quedas de uso.</li>
    <li>Custo sob demanda: Pague somente pelos serviços utilizados.</li>
    <li>Alta disponibilidade: Sistemas redundantes garantem confiabilidade.</li>
    <li>Acesso global: Serviços acessíveis de qualquer lugar do mundo.</li>
  </ul>
  <p className="text-gray-600">
    Na AWS:
  </p>
  <p className="text-gray-600">
    A AWS oferece uma gama de serviços que vão desde computação até inteligência artificial. Um
    exemplo é o Amazon EC2, para servidores virtuais escaláveis, e o Amazon S3, para
    armazenamento de dados.
  </p>
</section>

<section>
  <h3 className="font-semibold text-lg">2. Modelos de Serviço na Nuvem</h3>
  <p className="text-gray-600">
    Os serviços em nuvem são oferecidos em três modelos principais:
  </p>
  <ul className="list-disc list-inside text-gray-600">
    <li>
      <strong>IaaS (Infraestrutura como Serviço):</strong> Fornece infraestrutura básica como
      servidores e armazenamento. Você controla o sistema operacional e os aplicativos.
      <p className="text-gray-600">
        Exemplo AWS: Amazon EC2, para configurar servidores virtuais.
      </p>
    </li>
    <li>
      <strong>PaaS (Plataforma como Serviço):</strong> Fornece ferramentas para desenvolvimento e
      implantação de aplicativos sem gerenciar servidores.
      <p className="text-gray-600">
        Exemplo AWS: AWS Elastic Beanstalk, que automatiza a implantação de aplicativos.
      </p>
    </li>
    <li>
      <strong>SaaS (Software como Serviço):</strong> Serviços prontos para uso, como e-mail e
      ferramentas de colaboração, acessíveis diretamente pela internet.
      <p className="text-gray-600">
        Exemplo AWS: Amazon WorkSpaces, um ambiente de trabalho virtual.
      </p>
    </li>
  </ul>
</section>

<section>
  <h3 className="font-semibold text-lg">3. Modelos de Implantação</h3>
  <p className="text-gray-600">
    Os modelos de implantação da nuvem incluem diferentes abordagens para atender às necessidades
    específicas de empresas e organizações.
  </p>
  <ul className="list-disc list-inside text-gray-600">
    <li>
      <strong>Nuvem Pública:</strong> Recursos compartilhados em infraestrutura mantida por um
      provedor de nuvem como a AWS.
      <p className="text-gray-600">
        Exemplo: Usar o Amazon S3 para armazenamento escalável.
      </p>
    </li>
    <li>
      <strong>Nuvem Privada:</strong> Infraestrutura dedicada exclusivamente a uma organização,
      com maior controle e segurança.
    </li>
    <li>
      <strong>Nuvem Híbrida:</strong> Combinação de nuvens públicas e privadas, permitindo
      flexibilidade e segurança.
      <p className="text-gray-600">
        Exemplo: Usar AWS Outposts, que integra serviços da AWS ao seu data center local.
      </p>
    </li>
  </ul>
</section>

        <section>
  <h3 className="font-semibold text-lg">4. Infraestrutura Global da AWS</h3>
  <p className="text-gray-600">
    A AWS possui uma infraestrutura robusta e distribuída globalmente, composta por:
  </p>
  <ul className="list-disc list-inside text-gray-600">
    <li>
      <strong>Regiões:</strong> Áreas geográficas com data centers.
    </li>
    <li>
      <strong>Zonas de Disponibilidade (AZs):</strong> Data centers independentes dentro de uma
      região, garantindo tolerância a falhas.
    </li>
    <li>
      <strong>Edge Locations:</strong> Pontos de presença usados para entregar conteúdo com baixa
      latência.
    </li>
  </ul>
  <p className="text-gray-600">
    Exemplo: O Amazon CloudFront distribui conteúdo para usuários rapidamente, utilizando as Edge
    Locations.
  </p>
</section>

<section>
  <h3 className="font-semibold text-lg">5. Segurança e Conformidade</h3>
  <p className="text-gray-600">
    A AWS prioriza segurança e conformidade, fornecendo ferramentas para proteger dados e atender a
    padrões regulatórios.
  </p>
  <ul className="list-disc list-inside text-gray-600">
    <li>
      <strong>Shared Responsibility Model:</strong> A AWS gerencia a segurança da nuvem, e o cliente
      gerencia a segurança dentro da nuvem.
    </li>
    <li>
      <strong>Ferramentas de Segurança AWS:</strong> Incluem o AWS Identity and Access Management
      (IAM) para controle de acesso e o AWS Shield para proteção contra ataques DDoS.
    </li>
  </ul>
</section>

<section>
  <h3 className="font-semibold text-lg">6. Monitoramento e Análise</h3>
  <p className="text-gray-600">
    A AWS oferece ferramentas para monitoramento de desempenho e análise de dados:
  </p>
  <ul className="list-disc list-inside text-gray-600">
    <li>
      <strong>Amazon CloudWatch:</strong> Monitora recursos e envia alertas em tempo real.
    </li>
    <li>
      <strong>Amazon Athena:</strong> Serviço que permite consultas diretas em dados armazenados no
      S3.
    </li>
  </ul>
</section>

<section>
  <h3 className="font-semibold text-lg">7. Cobrança, Preços e Suporte</h3>
  <p className="text-gray-600">
    A AWS adota um modelo de cobrança baseado no uso, permitindo flexibilidade e controle de custos.
  </p>
  <ul className="list-disc list-inside text-gray-600">
    <li>
      <strong>Pay-as-you-go:</strong> Pague apenas pelos recursos utilizados.
    </li>
    <li>
      <strong>Ferramentas de Gestão Financeira:</strong> Como o AWS Cost Explorer, que ajuda a
      analisar os custos e prever gastos futuros.
    </li>
    <li>
      <strong>Planos de Suporte:</strong> Variam de básico a empresarial, dependendo das necessidades
      do cliente.
    </li>
  </ul>
</section>

<section>
  <h3 className="font-semibold text-lg">8. Inovação e Jornada na Nuvem</h3>
  <p className="text-gray-600">
    A jornada para a nuvem envolve planejamento, migração e otimização:
  </p>
  <ul className="list-disc list-inside text-gray-600">
    <li>
      <strong>Migração:</strong> A AWS oferece ferramentas como o AWS Migration Hub, que ajuda a
      monitorar e gerenciar a migração de workloads.
    </li>
    <li>
      <strong>Inovação Contínua:</strong> Com serviços como Amazon Machine Learning e AWS IoT, a AWS
      permite a adoção de tecnologias avançadas para transformar negócios.
    </li>
  </ul>
</section>

      </div>

      <div className="flex justify-between mt-6">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onBack}
        >
          Voltar
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => alert("Pronto para a próxima seção!")}
        >
          Próxima Seção
        </button>
      </div>
    </div>
  );
};

export default StudyGuide;

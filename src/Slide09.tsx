import FaseSlide from './FaseSlide';

export default function Slide09() {
    return (
        <FaseSlide
            phase="EXCELÊNCIA CORE (ENGENHARIA)"
            color="neon-red"
            items={[
                { title: "Tecnologias utilizadas", desc: "Pascal, React Native e ferramentas internas." },
                { title: "Arquitetura do sistema", desc: "Core do SCCI e framework Corpweb." },
                { title: "Evolução e otimização", desc: "Desenvolvimento, refatoração e melhorias em sistemas críticos." }
            ]}
            justification="Nesta etapa, o colaborador já compreende o negócio e os processos da empresa, permitindo desenvolver e evoluir o sistema com mais segurança e assertividade."
        />
    );
}
import FaseSlide from './FaseSlide';

export default function Slide08() {
    return (
        <FaseSlide
            phase="INTELIGÊNCIA DE NEGÓCIO (LÓGICA)"
            color="neon-purple"
            items={[
                { title: "Fundamentos financeiros", desc: "Juros, amortização e fluxos de capital no SCCI." },
                { title: "Regras regulatórias", desc: "Normas e exigências como IOF, 3050 e Anexo 16." },
                { title: "Regras de negócio específicas", desc: "Cessão, FGTS e estruturação de séries." }
            ]}
            justification="As regras de negócio são parte central do conhecimento da empresa. Com uma base funcional já consolidada, esses conteúdos são assimilados com mais clareza e precisão."
        />
    );
}
import FaseSlide from './FaseSlide';

export default function Slide07() {
    return (
        <FaseSlide
            phase="CONSCIÊNCIA FUNCIONAL (ROTINA)"
            color="neon-blue"
            items={[
                { title: "Visão do produto SCCI", desc: "Entendimento do propósito do sistema e do valor entregue ao cliente." },
                { title: "Fluxo das demandas", desc: "Como as tasks percorrem as etapas até a entrega em produção." },
                { title: "Consultas e relatórios", desc: "Extração de dados e interpretação das principais informações." }
            ]}
            justification="Compreender o contexto do negócio, o objetivo das demandas e quem é impactado deve vir antes da codificação. Essa base reduz retrabalho e torna o desenvolvimento mais assertivo."
        />
    );
}
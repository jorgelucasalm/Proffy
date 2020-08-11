import React from 'react';

import './style.css';

import wariningIcon from '../../assets/images/icons/warning.svg'

import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader'

function TeacherForm() {
    return (

        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que você quer dar aulas."
                description="O primeiro passo é preencher esse formulario de inscrição."
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input name="subject" label="Máteria" />
                    <Input name="cost" label="Custo da sua hora po aula" />
                </fieldset>
                <fieldset>
                    <legend>Horarios disponiveis</legend>

                    <Input name="subject" label="Máteria" />
                    <Input name="cost" label="Custo da sua hora po aula" />
                </fieldset>

                <footer>
                    <p>
                        <img src={wariningIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;

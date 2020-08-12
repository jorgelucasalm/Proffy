import React, { useState, FormEvent } from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select';

import wariningIcon from '../../assets/images/icons/warning.svg'

import './style.css';
import api from '../../services/api';

function TeacherForm() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');



    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItems() {
        setScheduleItems([
            //spreed operator
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemsValue (position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) =>{
            if(index === position){
                return {...scheduleItem, [field]:value}
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
    
        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems,
        }).then(() =>{
            alert('Cadastro realizado com sucesso!');
        }).catch(()=>{
            alert('Erro no cadastro!');
        })

        
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que você quer dar aulas."
                description="O primeiro passo é preencher esse formulario de inscrição."
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />

                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />

                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="Máteria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciência', label: 'Ciência' },
                                { value: 'Educação física', label: 'Educação física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Hístoria', label: 'Hístoria' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' },
                            ]}
                        />
                        <Input
                            name="cost"
                            label="Custo da sua hora po aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horarios disponiveis
                        <button type="button" onClick={addNewScheduleItems}>
                                + Novo horário
                        </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week-day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input 
                                        name="from" 
                                        label="Das" 
                                        type="time" 
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                                    />
                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time" 
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            );
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={wariningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;

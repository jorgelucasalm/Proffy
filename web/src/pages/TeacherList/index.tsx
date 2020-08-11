import React from 'react';

import './style.css'

import TeacherItem from '../../components/TeacherItem'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffy disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Máteria"/>
                    
                    <Input name="week-day" label="Dia da semana"/>
                    
                    <Input name="time" label="Hora"/>
                </form>
            </PageHeader>
            <main>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;
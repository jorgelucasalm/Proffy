import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { ScrollView, TextInput, BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

function TeacherList() {
    const [isFiltersVisible, setFiltersVisible] = useState(false);

    function hancleToogleFiltersVisible(){
        setFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={hancleToogleFiltersVisible}>
                        <Feather name="filter" size={20} color="#fff"></Feather>
                    </BorderlessButton>
            )}
            >
               { isFiltersVisible && (
                    <View style={styles.searchForm}>

                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                    </View>
               )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default TeacherList;
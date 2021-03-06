import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField, TextInput, ReferenceInput, 
    SelectInput,Edit, SimpleForm, Create, Filter, EditButton} from 'react-admin';

const QuestionTitle = ({record})=>{
    return <span>Edit {record ? `${record.description}` : ''}</span>
};

const QuestionFilter = (props) =>(
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const QuestionList = props =>(
    <List filters={<QuestionFilter />}{...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Question Topic" source="questionTopicId" reference="QuestionTopics">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="description" />
            <TextField source="content" />
            <TextField source="answer" />
            <DateField source="updateTime" label="Date" />
            <EditButton />
        </Datagrid>
    </List>
);

export const QuestionEdit = props =>(
    <Edit title={<QuestionTitle />}{...props}>
        <SimpleForm>
            <ReferenceInput label="Question Topic" source="questionTopicId" reference="QuestionTopics">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="description" />
            <TextInput multiline source="content" />
            <TextInput multiline source="answer" />
        </SimpleForm>
    </Edit>
);

export const QuestionCreate = props =>(
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Question Topic" source="questionTopicId" reference="QuestionTopics">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="description" />
            <TextInput multiline source="content" />
            <TextInput multiline source="answer" />
        </SimpleForm>
    </Create>
);
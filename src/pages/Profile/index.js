import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import { Link } from 'react-router-dom'
import { updateProfileRequest } from '../../store/modules/user/actions';
import { Container } from './styles';

import AvatarInput from './AvatarInput';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data, profile.id));
  }

  const cargos = [
    { id: 'COLABORADOR', title: 'Colaborador' },
    { id: 'DIRETOR', title: 'Diretor' },
    { id: 'GERENTE', title: 'Gerente' },
    { id: 'CEO', title: 'CEO' },
  ];

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <h2>Informações básicas</h2>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" placeholder="Seu endereço e-mail" />
        <Input name="cpf" placeholder="CPF" />
        <Input
          type="date"
          name="date_birth"
          placeholder="Data de Nacimento"
        />
        <Select name="company_position" options={cargos} placeholder="Cargos" />
        <hr />
        <h2>Nova senha</h2>
        <Input type="password" name="oldPassword" placeholder="Senha" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme nova senha"
        />
        <hr />
        <div className="but">
          <button type="submit">Atualizar perfil</button>
          <button type="button">
            <Link to={`/adress/${profile.id}`}> 
              Adicionar endereço
            </Link>
          </button>
        </div>
        
      </Form>
    </Container>
  );
}

import { FormContainer, Form, Input, StyledLabel } from "./styled";




export const FormularioCadastro = (props) => {

 

  function onChangeUrl(e) {
    props.setUrlFoto(e.target.value)
  }

  function onChangeDescricao(event){
    props.setDescricao(event.target.value)
  }

  function onChangeTitulo(event){
    props.setTitulo(event.target.value)
  }



  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.urlFoto} onChange={onChangeUrl} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={onChangeDescricao}/>
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Titulo do post:
          <Input id="descricao" value={props.titulo} onChange={onChangeTitulo}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro
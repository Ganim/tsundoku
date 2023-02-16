import React, { useState } from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import Blob from "cross-blob";
import LayoutDashBoard from "components/LayoutDashBoard";
import SecaoHeadBar from "components/SecaoHeadBar";
import NavPaginas from "components/NavPaginas";
import EditorTsun from "components/EditorTsun/index";
import Container, {
    ContainerForm,
    SecaoInputs,
    SecaoCapaObra,
    ImagemCapaObraPrincipal,
    SecaoOutrasInformacoes,
    SecaoGeneros,
    SecaoBotoesSubmit,
} from "./styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import * as ROTAS from "constants/rotas";
import API from "services/API";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import https from "https";
import capaPrincipal from "../../../../public/assets/img/logoTemaLight.svg";

interface Values {
    ImagemCapa: File | any;
    Titulo: string;
    TituloAlternativo: string;
    AutorObra: string;
    Artista: string;
    Ano: string;
    UsuarioCadastro: string;
    StatusObraId: number;
    TipoObraId: number;
    Sinopse: string;
    EhObraMaiorIdade: boolean;
    ListaGeneros: string[];
}

const handleSubmit = (valores: Values) => {        
    const formData = new FormData();    
    formData.append("ImagemCapa", valores.ImagemCapa)
    formData.append("Titulo", valores.Titulo)
    formData.append("TituloAlternativo", valores.TituloAlternativo)
    formData.append("AutorObra", valores.AutorObra)
    formData.append("Artista", valores.Artista)
    formData.append("Ano", valores.Ano)
    formData.append("UsuarioCadastro", valores.UsuarioCadastro)
    formData.append("StatusObraId", String(valores.StatusObraId))
    formData.append("TipoObraId", String(valores.TipoObraId))
    formData.append("Sinopse", valores.Sinopse)
    formData.append("EhObraMaiorIdade", String(valores.EhObraMaiorIdade))
    formData.append("ListaGeneros", String(valores.ListaGeneros))

    API.post("obra", formData, { headers: {'Content-Type': 'multipart/form-data'}})
    .then(() => {        
        window.location.href = ROTAS.OBRAS;
    })
    .catch((error:any) => {
        console.log(error);
    });
};

const NovaObra: React.FC = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    
    const initialValues: Values = {
        ImagemCapa: null,
        Titulo: "",
        TituloAlternativo: "",
        AutorObra: "",
        Artista: "",
        Ano: "",
        UsuarioCadastro: "Bravo",
        StatusObraId: data.listaStatusObra[0].id,
        TipoObraId: data.listaTipoObra[0].id,
        Sinopse: "",
        EhObraMaiorIdade: false,
        ListaGeneros: [],
    };
   
    const valorInicialImagem = new Blob();

    const [valorConteudoEditor, setValorConteudoEditor] = useState(
        initialValues.Sinopse
    );
    const [imagemCapa, setImagemCapa] = useState(valorInicialImagem);
    const [enderecoImagemCapa] = useState(capaPrincipal);

    const handleImagemCapa = (event: any) => {
        setImagemCapa(event.target.files[0]);
    };

    return (
        <LayoutDashBoard>
            <Container>
                <SecaoHeadBar>
                    <NavPaginas>
                        <AddBoxIcon />
                        <h3>Nova Obra</h3>
                    </NavPaginas>
                </SecaoHeadBar>
                <ContainerForm>
                    <SecaoInputs>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit} >
                            {({ values, setFieldValue }) => (
                                <Form>
                                    <label htmlFor="ImagemCapa"> Capa Principal:{" "} </label>
                                    <input className="inputIncluiCapaPrincipal" id="ImagemCapa" name="ImagemCapa" type="file" onChange={(e: any) => { setFieldValue( "ImagemCapa", e.target.files[0] ); handleImagemCapa(e); }}/>

                                    <label htmlFor="Titulo"> Título da Obra:{" "} </label> <Field classN�I : \ T s u n d o k u \ B a c k E n d \ T s u n d o k u T r a d u c o e s \ T s u n d o k u T r a d u c o e s \ D T O s \ I n f o r m a c a o O b r a D T O . c s ���Lxo��0�]:���}���ب�x�n�v�    ����������������r a \ A p p D a t a \ L o c a l \ T e m oper/msbuild/20033http://schemas.microsoft.com/developer/msbuild/2003    aC:\Users\edsra\AppData\Local\Temp\TFSTem                                      )}
                                    </SecaoGeneros>

                                    <label htmlFor="Sinopse">Sinopse:</label>
                                    <EditorTsun larguraEditor="100%" tamanhoEditor="200px" valorConteudoEditor={ valorConteudoEditor } setValorConteudoEditor={ setValorConteudoEditor } />

                                    <SecaoOutrasInformacoes>
                                        <label>
                                  ull> 3http://schem     aC:\Users\edsra\AppData\Local\Temp\TFSTemp\vctmp13492_809231.TsundokuTraducoes.Api.00000000.csproj    <null>          \ M i c r o s o f t . N E T . S d k . t a r g e t s   �   � C : \ U s e r s \ e d s r a \ A p p D a t a \ L o c a l \ T e m p \ T F S T e m p \ v c t m p 1 3 4 9 2 _ 1 8 5 1 5 0 . 9 4 9 1 a 2 f d . g i t i g n o r e   �                                                                                                                                                                                                                                                                                                     M��t��6Ţtv    ����������������l e r . c s n��]�^��� k��3��I : \ T s u n d o k u \ B a c k E n d \ T s u n d o k u T r a 4295.TsundokuTraducoes.Api.00000000.csproj    <null>       \C:\Program Files\dotnet\sdk\6.0.402\Sdks\Microsoft.NET.Sdk\targets\Microsoft.NET.Sdk.targets    <null> 3http://schemas.microsoft.com/developer/msbuild/20033http://schemas.microsoft.com/developer/msbuild/2003    XH:\Tsundoku_V20\BackEnd\TsundokuTraducoes\TsundokuTraducoes\TsundokuTraducoes.Api.csproj    <null> 3http://schemas.microsoft.com/developer/msbuild/2003     TI:\Tsundoku\BackEnd\TsundokuTraducoes\TsundokuTraducoes\TsundokuTraducoes.Api.csproj    <null> 3http://schemas.microsoft.com/developer/msbuild/2003     PH:\Tsundoku_V20\BackEnd\TsundokuTraducoes\TsundokuTraducoes\TsundokuTraducoes.db    <null>       aC:\Users\edsra\AppData\Local\Temp\TFSTemp\vctmp13492_860034.TsundokuTraducoes.Api.00000000.csproj    <null>       pC:\Program Files\dotnet\sdk\6.0.402\Sdks\Microsoft.NET.Sdk\targets\Microsoft.PackageDependencyResolution.targets    <null> 3http://schemas.microsoft.com/develd u c o e s \ T s u n d o k u T r a d u c o e s \ S e r v i c e s \ O b r a S e r v i c e . c s ƥ�۔��K�M��G'
b����Ϯvӕ4~�    ����������������okutraducoes\tsundokutraducoes\controllers\o�I : \ T s u n d o k u \ B a c k E n d \ T s u n d o k u T r a d u c o e s \ T s u n d o k u T r a d u c o e s \ S e r v i c e s \ I O b r a S e r v i c e . c s y"[���Ok_���\/'�MTǁ]*��_��e    ����������������||{A6C744A8-0E4A-4FC6-886A-064283054674}O�I : \ T s u n d o k u \ B a c k E n d \ T s u n d o k u T r a d u c o e s \ T s u n d o k u T r a d u c o e s \ D T O s \ I n f o r m a c a o O b r a D T O . c s ���Lxo��0�]:���}���ب�x�n�v�    ����������������r a \ A p p D a t a \ L o c a l \ T e m oper/msbuild/20033http://schemas.microsoft.com/developer/msbuild/2003    aC:\Users\edsra\AppData\Local\Temp\TFSTem                                      )}
                                    </SecaoGeneros>

                                    <label htmlFor="Sinopse">Sinopse:</label>
                                    <EditorTsun larguraEditor="100%" tamanhoEditor="200px" valorConteudoEditor={ valorConteudoEditor } setValorConteudoEditor={ setValorConteudoEditor } />

                                    <SecaoOutrasInformacoes>
                                        <label>
                                  ull> 3http://schem     aC:\Users\edsra\AppData\Local\Temp\TFSTemp\vctmp13492_809231.TsundokuTraducoes.Api.00000000.csproj    <null>          
                                    </SecaoBotoesSubmit>

                                    <Field className="InputCampoDados inputText hidden" id="Sinopse" name="Sinopse" as="textarea" value={ (values.Sinopse = valorConteudoEditor) } />
                                </Form>
                            )}
                        </Formik>
                    </SecaoInputs>
                    <SecaoCapaObra>
                        {imagemCapa.size > 0 ? ( <ImagemCapaObraPrincipal src={URL.createObjectURL(imagemCapa)} alt="Capa Principal" />) 
                                             : ( <ImagemCapaObraPrincipal src={enderecoImagemCapa} alt="Capa Principal" /> )}
                    </SecaoCapaObra>
                </ContainerForm>
            </Container>
        </LayoutDashBoard>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    const { data } = await API.get(`obra/informacoes`, { httpsAgent });    
    return { props: { data } };
};

export default NovaObra;

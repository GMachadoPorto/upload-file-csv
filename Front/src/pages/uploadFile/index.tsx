/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { useFileHook } from "../../hooks";
import { StyledMainFileUpload } from "./style";
import { apiFileService } from "../../services";
import { Link, Navigate, useNavigate } from "react-router-dom";

interface iFileFormated {
  headers: string[];
  data: Array<string[]>;
}

interface iProjectRequest {
  nome: string;
  vul_critica: string;
  vul_alta: string;
  vul_media: string;
  vul_baixa: string;
  scan_date: string;
}

export const PageUploadFile = () => {
  const [invalidFormat, setInvalidFormat] = useState(false);
  const navigate = useNavigate();

  const handleFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (event.target.files![0].type !== "text/csv") {
      return setInvalidFormat(true);
    }
    setInvalidFormat(false);

    const text: string = await event.target.files![0].text();

    const [header, ...payload] = text.split("\n");

    const headersResponse = header.split(",");

    try {
      payload.forEach(async (element: string) => {
        const elementData: string[] = element.split(",");

        const projectRequest: iProjectRequest = {
          nome: elementData[0],
          vul_critica: elementData[1],
          vul_alta: elementData[2],
          vul_media: elementData[3],
          vul_baixa: elementData[4],
          scan_date: elementData[5],
        };

        await apiFileService.post("projects/", projectRequest);
      });
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/info");
    }
  };

  return (
    <StyledMainFileUpload className="container">
      <h2>Selecione o arquivo que deseja enviar</h2>
      <Link to={"/info"}>Consultar projetos</Link>
      <input type="file" name="file" accept=".csv" onChange={handleFile} />
      {invalidFormat && <p>Formato inválido, somente arquivos .csv</p>}
    </StyledMainFileUpload>
  );
};

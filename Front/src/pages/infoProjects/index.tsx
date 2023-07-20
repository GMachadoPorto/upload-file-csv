/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { apiFileService } from "../../services";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { StyledMainInfoProject } from "./style";
import { Link } from "react-router-dom";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface iLastScanData {
  vul_baixa: string;
  vul_media: string;
  vul_alta: string;
  vul_critica: string;
}

interface iProjectReturn {
  id: number;
  nome: string;
  vul_critica: string;
  vul_alta: string;
  vul_media: string;
  vul_baixa: string;
  scan_date: string;
}

export const PageInfoProjects = () => {
  const [projects, setProjects] = useState([] as string[]);
  const [projectData, setProjectData] = useState([] as iProjectReturn[]);
  const [lastScanData, setLastScanData] = useState({} as iLastScanData);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    const getFilesData = async () => {
      try {
        const response = await apiFileService.get<string[]>("projects/");
        const projectsNames: Array<string> = response.data;
        setProjects(projectsNames);
      } catch (error) {
        console.log(error);
      }
    };
    void getFilesData();
  }, []);

  const getProjectInfo = async (projectName: string) => {
    if (projectName === "") {
      setLastScanData({} as iLastScanData);
      setProjectData([] as iProjectReturn[]);
      setProjectName("");
      return;
    }
    try {
      const response = await apiFileService.get<iProjectReturn[]>(
        `projects/${projectName}/`
      );
      const { id, nome, scan_date, ...payload } = response.data[0];

      setLastScanData(payload);
      setProjectData(response.data.reverse());
      setProjectName(nome);
    } catch (error) {
      console.log(error);
    }
  };

  const labelsDonut = ["Baixa", "Média", "Alta", "Crítica"];
  const optionsDonut = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Último scan de Vulnerabilidades",
        font: {
          size: 28,
        },
      },
    },
  };
  const dataDonut = {
    labels: labelsDonut,
    datasets: [
      {
        label: "Total",
        data: [
          lastScanData.vul_baixa,
          lastScanData.vul_media,
          lastScanData.vul_alta,
          lastScanData.vul_critica,
        ],
        borderColor: "#00000050",
        backgroundColor: ["#73d009", "#dfe91f", "#ffa200", "#ff2600"],
      },
    ],
  };

  const labelsLine = projectData.map((element) => element.scan_date);
  const optionsLine = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Evolução das Vulnerabilidades",
        font: {
          size: 28,
        },
      },
    },
    scales: {
      y: {
        min: 0,
      },
    },
  };
  const dataLine = {
    labels: labelsLine,
    datasets: [
      {
        label: "Baixa",
        data: projectData.map((element) => +element.vul_baixa),
        borderColor: "#73d009",
        backgroundColor: "#73d009",
      },
      {
        label: "Media",
        data: projectData.map((element) => +element.vul_media),
        borderColor: "#dfe91f",
        backgroundColor: "#dfe91f",
      },
      {
        label: "Alta",
        data: projectData.map((element) => +element.vul_alta),
        borderColor: "#ffa200",
        backgroundColor: "#ffa200",
      },
      {
        label: "Critica",
        data: projectData.map((element) => +element.vul_critica),
        borderColor: "#ff2600",
        backgroundColor: "#ff2600",
      },
    ],
  };

  return (
    <StyledMainInfoProject className="container">
      <h2>Info Page</h2>
      <Link to={"/"}>Enviar arquivo</Link>
      <select onChange={(event) => getProjectInfo(event.target.value)}>
        <option value="">Selecione o projeto</option>
        {projects.map((element, index) => {
          return (
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </select>
      {projectName && <h2>{projectData[0].nome}</h2>}
      <section>
        <div className="grafic">
          <Doughnut
            data={dataDonut}
            width={300}
            height={300}
            options={optionsDonut}
          />
        </div>
        <div className="grafic">
          <Line
            data={dataLine}
            width={300}
            height={300}
            options={optionsLine}
          />
        </div>
      </section>
    </StyledMainInfoProject>
  );
};

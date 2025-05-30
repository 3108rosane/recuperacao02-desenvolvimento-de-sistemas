'use client'

import { Dev } from "@/types/Dev";
import axios from "axios";
import DevServer from "next/dist/server/dev/next-dev-server";
import { useState } from "react";



export default function Page() {
  const [dev, setDev] = useState<Dev[]>([]);

  async function loadDevs() {
      const response = await axios.get("http://localhost:3333/devs");
      const dev = response.data.setDev((a: any, b: any) => (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      ))

      setDev(loadDevs)
  }
    // FAZ CHAMADA API PARA BUSCAR TODOS OS DE
    // JOGA AS INFORMAÇÕES DENTRO DO ESTADO setDev(response.data)
  }

  async function handleCreateDev() {
    const dev = {
      id: String(DevServer.length + 1),
      content: setContent('')
      publishedAt: new Date().toISOString(),
      author: {
          name: "Rosane",
          role: "Full-Stack Developer",
          avatarUrl: "https://avatars.githubusercontent.com/u/170477548?v=4&size=64"
      }
  };

    // PEGA INFORMAÇÕES DO FORMULÁRIO/CAMPOS
    // CRIA OBJETO DO TIPO DEV
    // FAZ CHAMADA API PARA ADICIONAR DEV
    // FAZ CHAMADA API PARA BUSCAR LISTA DE DEVS ATUALIZADA
  }

  async function handleDeleteDev(id: string) {
    const dev = axios.delete("npx json-server db.json --port 3333 --watch")

    // FAZ CHAMADA DO TIPO DELETE A API (JSON-SERVER)
    // CHAMA O LOADDEVS PARA ATUALIZAR OS DEVS
  }

 


  
    return (
      <div>
          <Header />
          <div className="container">
              <aside className="sidebar">
                  <Image src={cover} alt="cover" className="cover" />

                  <div className="profile">
                      <Avatar src="https://avatars.githubusercontent.com/u/170477548?v=4&size=64" hasBorder />
                      <strong>Rosane</strong>
                      <span>Full-Stack Developer</span>

                      <footer>
                          <button className="button-edit-profile">
                              <PiPencilLineBold />
                              Cadastrar
                          </button>
                      </footer>
                  </div>
              </aside>

              <main className="main">
                  <form onSubmit={handleCreatePost} className="form-post">
                      <TextareaCustom
                          message={content}
                          setMessage={setContent}
                          title="O que você está pensando???"
                      />

                      <ButtonCustom />
                  </form>

                  {DevServer.map(item => (
                      <dev page ={item} key={item.id}setDev={setDev} />
                  ))}
              </main>
          </div>
      </div>
  )

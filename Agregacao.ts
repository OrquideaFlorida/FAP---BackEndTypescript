export class Album {
    constructor(public titulo: string, public interprete: string) {}
  }
  
  export class Acervo {
    private album: Album[] = [];
  
    adicionarAlbum(album: Album) {
      this.album.push(album);
    }
  
    listarAlbum() {
      console.log("Álbuns do Acervo: ");
  
      for (const album of this.album) {
        console.log(`Título: ${album.titulo}, Artista: ${album.interprete}`);
      }
    }
  }
  
  function main() {
    const meuAcervo = new Acervo();
    const album1 = new Album ("The Black Album", "Metallica");
    const album2 = new Album ("Minha Playlist", "Bolofofos");
  
    meuAcervo.adicionarAlbum(album1);
    meuAcervo.adicionarAlbum(album2);
  
    meuAcervo.listarAlbum();
  }
  
  main();
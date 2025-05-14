import { render, screen } from "@testing-library/react";
import Post from ".";

describe('Testando <Post />', () => {
    it('Deve renderizar corretamente', () => {
        render (
            <Post imageUrl="https://a-static.mlcdn.com.br/800x560/miniatura-batmovel-1-32-desenho-animado-jada-toys/ifcat/684829334/fa6a995ca77876ebdba3f0bc95d0cd54.jpeg">
                Teste
            </Post>
        )
        expect(screen.getByText('Teste')).toBeInTheDocument()
    })
})
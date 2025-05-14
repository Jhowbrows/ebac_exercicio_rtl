import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentarios', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentario feito através de testes'
            }
        })
        fireEvent.click(screen.getByTestId('comment-button'))

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Segundo comentario feito através dos testes'
            }
        })
        fireEvent.click(screen.getByTestId('comment-button'))

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2)
    })
});


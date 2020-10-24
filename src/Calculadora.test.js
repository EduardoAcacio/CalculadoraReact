import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculadora from './Calculadora';
import '@testing-library/jest-dom/extend-expect';

test('deve renderizar o componente sem erros', () => {
  const { getByText } = render(<Calculadora />);
  const linkElement = getByText(/Calculadora React/i);
  expect(linkElement).toBeInTheDocument();
});

test('deve limpar o campo numeros', () => {
  const { getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('C'));
  expect(getByTestId('txtNumeros')).toHaveValue('0');
});

test('deve somar 2 + 3 e obter 5', () => {
  const { getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('5');
});

test('deve somar 2.5 + 3 e obter 5.5', () => {
  const { getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('5.5');
});

test('deve subtrair 5 - 3 e obter 2', () => {
  const { getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('2');
});

test('deve dividir 6 / 3 e obter 2', () => {
  const { getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('2');
});

test('deve multiplicar 2 * 3 e obter 6', () => {
  const { getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('6');
});



import { useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const formDataInitialState = {
  title: '',
  amount: 0,
  type: 'deposit',
  category: '',
};

export function NewTransactionModal(props: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [formData, setFormData] = useState(formDataInitialState);

  const handleCloseNewTransactionModal = () => {
    props.onRequestClose();
    setFormData(formDataInitialState);
  }
  
  const handleCreateNewTransaction = async (event: React.FormEvent) => {
    event.preventDefault();
    await createTransaction(formData);
    props.onRequestClose();
    setFormData(formDataInitialState);
  }

  const handleChangeTitle = (newValue: string) => setFormData((prevState) => ({ ...prevState, title: newValue }));

  const handleChangeAmount = (newValue: number) => setFormData((prevState) => ({ ...prevState, amount: newValue }));

  const handleChangeType = (newValue: string) => setFormData((prevState) => ({ ...prevState, type: newValue }));

  const handleChangeCategory = (newValue: string) => setFormData((prevState) => ({ ...prevState, category: newValue }));

  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button
          className="react-modal-close"
          type="button"
          onClick={props.onRequestClose}
        > 
          <img src={closeImg} alt="Close modal" />
        </button>
        <h2> Add new transaction </h2>
        <input placeholder="Title" value={formData.title} onChange={(event) => handleChangeTitle(event.target.value)} />
        <input type="number" placeholder="Amount" value={formData.amount} onChange={(event) => handleChangeAmount(+event.target.value)} />
        <TransactionTypeContainer>
          <RadioBox
            type="button" 
            onClick={() => handleChangeType('deposit')}
            isActive={formData.type === 'deposit'}
            activeColor="green"
          > 
            <img src={incomeImg} alt="Income" />
            <span> Income </span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => handleChangeType('withdraw')}
            isActive={formData.type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome" />
            <span> Outcome </span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Category" onChange={(event) => handleChangeCategory(event.target.value)} />
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
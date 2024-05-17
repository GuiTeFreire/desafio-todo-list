import styles from './Newtask.module.css';

export function Newtask({
    ...rest}: React.DetailedHTMLProps<
    React.InputHTMLAttributes<
    HTMLInputElement>,
    HTMLInputElement
    >) {
    return(
        <input 
            className={styles.container} 
            placeholder='Adicione uma nova tarefa' {...rest} />
    );
}
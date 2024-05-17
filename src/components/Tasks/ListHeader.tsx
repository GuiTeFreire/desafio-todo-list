import styles from './ListHeader.module.css'

interface Props {
    taskCounter: number
    checkedTaskCounter: number
}

export function ListHeader({ taskCounter, checkedTaskCounter}: Props) {
    return (
        <header className={styles.header}>
            <aside>
                <p>Tarefas Criadas</p>
                <span>{taskCounter}</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>
                    {taskCounter == 0 ? taskCounter : `${checkedTaskCounter} de ${taskCounter}`}
                </span>
            </aside>
        </header>
    )
}
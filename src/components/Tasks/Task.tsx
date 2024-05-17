import styles from './Task.module.css';

import { ITask } from '../../App'

import { Trash, Check } from '@phosphor-icons/react'

interface Props {
    data: ITask
    removeTask: (id: number) => void
    toggleTaskStatus: ({id, value}: {id: number; value: boolean}) => void
}

export function Task({ data, removeTask, toggleTaskStatus}: Props) {
    function handleTaskToggle() {
        toggleTaskStatus({id: data.id, value: !data.isDone})
    }

    function handleRemove() {
        removeTask(data.id)
    }

    const checkboxCheckedClassname = data.isDone 
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']

    const paragraphCheckedClassname = data.isDone
        ? styles['paragraph-checked']
        : ''

    return (
        <div className={styles.task}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type='checkbox' checked={data.isDone} />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {data.isDone && <Check size={12} color='var(--gray-100)' />}
                    </span>

                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {data.text}
                    </p>
                </label>
            </div>

            <button onClick={handleRemove}>
                <Trash size={16} color="#808080"/>
            </button>
        </div>
    )
}
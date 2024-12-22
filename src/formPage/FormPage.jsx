import React from 'react';
import { useForm } from 'react-hook-form';

function FormPage({ setUsers }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    function create(data) {
        setUsers((prevUsers) => [...prevUsers, data]);
        reset();
    }

    function clearTable() {
        setUsers([]);
    }

    return (
        <div>
            <h2>Поля для ввода</h2>

            <form onSubmit={handleSubmit(create)}>
                <label>
                    <input
                        type="text"
                        placeholder="name"
                        className={errors.name && "error"}
                        {...register("name", { required: true })}
                    />
                    {errors.name && <small>обязательное поле</small>}
                </label>

                <label>
                    <input
                        type="text"
                        placeholder="username"
                        className={errors.username && "error"}
                        {...register("username", { required: true })}
                    />
                    {errors.username && <small>обязательное поле</small>}
                </label>

                <label>
                    <input
                        type="text"
                        placeholder="email"
                        className={errors.email && "error"}
                        {...register("email", { required: true })}
                    />
                    {errors.email && <small>обязательное поле</small>}
                </label>

                <label>
                    <input
                        type="text"
                        placeholder="phone"
                        className={errors.phone && "error"}
                        {...register("phone", { required: true })}
                    />
                    {errors.phone && <small>Обязательное поле</small>}
                </label>

                <label>
                    <input
                        type="text"
                        placeholder="website"
                        {...register("website")}
                    />
                </label>

                <button type="submit">Создать</button>
                <button type="button" onClick={clearTable}>Очистить таблицу</button>
            </form>
        </div>
    );
}

export default FormPage;

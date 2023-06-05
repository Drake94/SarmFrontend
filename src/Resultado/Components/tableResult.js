import React from "react";
import {  Box, Table } from 'react-bulma-components';
import '../../assets/css/profile.css'
import { FaArrowDown, FaPen, FaTrash } from "react-icons/fa"

const TableResult = ({ results }) =>{


    return(
        <Box>
            <Table class="table">
                <thead>
                    <tr>
                        <th><abbr title="Describa el resultado">Resultado</abbr></th>
                        <th><abbr title="Tipo de muestra">Tipo de muestra</abbr></th>
                        <th><abbr title="Descripción">Validación</abbr></th>
                        <th><abbr title="Rut Paciente">Rut del paciente</abbr></th>
                        <th><abbr title="Fecha última actualización ">Fecha Revisión</abbr></th>
                        <th><abbr title="Estado">Estado</abbr></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="tbody-1">
                    {results.map(({result, sampleType, validation, rutPatient, updatedAt, status}) => (
                            <tr className="tr-1">
                                <td>{result}</td>
                                <td>{sampleType}</td>
                                <td>{validation}</td>
                                <td>{rutPatient}</td>
                                <td>{updatedAt}</td>
                                <td>{status}</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><FaArrowDown /></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li>
                                                <button className="btn btn-outline-black " aria-hidden="true" ><FaPen />&nbsp;Editar</button>
                                            </li>
                                            <div className="dropdown-divider"></div>
                                            <li>
                                                <button className="btn btn-outline-light  text-danger" aria-hidden="true"><FaTrash />&nbsp;Eliminar</button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        )
                    )
                    }    
                </tbody>
            
            </Table>
        </Box>
    )
}
export default TableResult;
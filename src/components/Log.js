import { Link } from "react-router-dom";

export default function Log({ log, index }) {
    return (
        <tr>
            <th>{log.captainName}</th>
            <th>{log.title}</th>
        </tr>
    );
}
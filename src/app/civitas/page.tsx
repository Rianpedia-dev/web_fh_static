import { lecturers } from "@/lib/static-data";
import CivitasContent from "./civitas-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Civitas Akademika",
    description: "Jajaran dosen Fakultas Hukum Universitas Palembang.",
};

export default function CivitasPage() {
    return (
        <CivitasContent
            lecturers={lecturers}
        />
    );
}

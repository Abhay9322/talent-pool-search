import { useState } from "react";

import UploadNavbar from "../components/UploadNavbar";
import UploadZone from "../components/UploadZone";
import FileList from "../components/FileList";
import ProcessingProgress from "../components/ProcessingProgress";
import CandidatePreview from "../components/CandidatePreview";


import {
    uploadResumes,
} from "../api/resumeApi";

function UploadResumes() {
    const [files, setFiles] =
        useState([]);

    const [progress, setProgress] =
        useState(0);

    const [candidate, setCandidate] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const removeFile = (index) => {
        setFiles(
            files.filter(
                (_, i) => i !== index
            )
        );
    };

    const handleUpload =
        async () => {
            try {
                setLoading(true);

                const timer =
                    setInterval(() => {
                        setProgress((prev) => {
                            if (prev >= 95)
                                return prev;
                            return prev + 5;
                        });
                    }, 300);

                const response =
                    await uploadResumes(files);

                clearInterval(timer);

                setProgress(100);

                if (
                    response.candidates
                        ?.length
                ) {
                    setCandidate(
                        response.candidates[0]
                    );
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

    return (
        <>
            <UploadNavbar />

            <div
                className="
        max-w-7xl
        mx-auto
        p-6
        space-y-6
        "
            >
                <UploadZone
                    files={files}
                    setFiles={setFiles}
                />

                <FileList
                    files={files}
                    removeFile={removeFile}
                />

                {files.length > 0 && (
                    <button
                        onClick={handleUpload}
                        disabled={loading}
                        className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-xl
            "
                    >
                        {loading
                            ? "Processing..."
                            : "Start AI Processing"}
                    </button>
                )}

                {(loading ||
                    progress > 0) && (
                        <ProcessingProgress
                            progress={progress}
                        />
                    )}

                <CandidatePreview
                    candidate={candidate}
                />
            </div>
        </>
    );
}

export default UploadResumes;
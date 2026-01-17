"use client";

import FileUploader from "@/app/ui/FileUploader";
import { processSyllabusAction } from "@/app/lib/actions";

export default function SyllabusUploadSection({ courseId, userId, folder }: any) {

    const handleOnSuccess = async (filePath: string) => {
        // Once the file is in the bucket, update the DB
        await processSyllabusAction(courseId, userId, filePath);
    };

    return (
        <div className="w-full max-w-md">
            <FileUploader
                bucket="uofthacks-2026"
                userID={userId}
                courseID={courseId}
                folder="syllabus_files"
                // Add a callback prop to your FileUploader to trigger this
                onSuccess={handleOnSuccess}
            />
        </div>
    );
}
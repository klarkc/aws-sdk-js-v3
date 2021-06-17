import { FinspaceDataClient } from "./FinspaceDataClient";
import { CreateChangesetCommandInput, CreateChangesetCommandOutput } from "./commands/CreateChangesetCommand";
import { GetProgrammaticAccessCredentialsCommandInput, GetProgrammaticAccessCredentialsCommandOutput } from "./commands/GetProgrammaticAccessCredentialsCommand";
import { GetWorkingLocationCommandInput, GetWorkingLocationCommandOutput } from "./commands/GetWorkingLocationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p> The FinSpace APIs let you take actions inside the FinSpace environment.  </p>
 */
export declare class FinspaceData extends FinspaceDataClient {
    /**
     * <p>Creates a new changeset in a FinSpace dataset.</p>
     */
    createChangeset(args: CreateChangesetCommandInput, options?: __HttpHandlerOptions): Promise<CreateChangesetCommandOutput>;
    createChangeset(args: CreateChangesetCommandInput, cb: (err: any, data?: CreateChangesetCommandOutput) => void): void;
    createChangeset(args: CreateChangesetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateChangesetCommandOutput) => void): void;
    /**
     * <p>Request programmatic credentials to use with Habanero SDK.</p>
     */
    getProgrammaticAccessCredentials(args: GetProgrammaticAccessCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<GetProgrammaticAccessCredentialsCommandOutput>;
    getProgrammaticAccessCredentials(args: GetProgrammaticAccessCredentialsCommandInput, cb: (err: any, data?: GetProgrammaticAccessCredentialsCommandOutput) => void): void;
    getProgrammaticAccessCredentials(args: GetProgrammaticAccessCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProgrammaticAccessCredentialsCommandOutput) => void): void;
    /**
     * <p>A temporary Amazon S3 location to copy your files from a source location to stage or use
     *       as a scratch space in Habanero notebook.</p>
     */
    getWorkingLocation(args: GetWorkingLocationCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkingLocationCommandOutput>;
    getWorkingLocation(args: GetWorkingLocationCommandInput, cb: (err: any, data?: GetWorkingLocationCommandOutput) => void): void;
    getWorkingLocation(args: GetWorkingLocationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWorkingLocationCommandOutput) => void): void;
}

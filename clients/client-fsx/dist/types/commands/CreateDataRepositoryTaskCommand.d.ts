import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateDataRepositoryTaskRequest, CreateDataRepositoryTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDataRepositoryTaskCommandInput extends CreateDataRepositoryTaskRequest {
}
export interface CreateDataRepositoryTaskCommandOutput extends CreateDataRepositoryTaskResponse, __MetadataBearer {
}
/**
 * <p>Creates an Amazon FSx for Lustre data repository task. You use data repository tasks
 *             to perform bulk operations between your Amazon FSx file system and its linked data
 *             repository. An example of a data repository task is
 *             exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to its linked data repository. A
 *                 <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not
 *             linked to the FSx file system. To learn more about data repository tasks, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>.
 *             To learn more about linking a data repository to your file system, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-fs-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateDataRepositoryTaskCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateDataRepositoryTaskCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateDataRepositoryTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataRepositoryTaskCommandInput} for command's `input` shape.
 * @see {@link CreateDataRepositoryTaskCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDataRepositoryTaskCommand extends $Command<CreateDataRepositoryTaskCommandInput, CreateDataRepositoryTaskCommandOutput, FSxClientResolvedConfig> {
    readonly input: CreateDataRepositoryTaskCommandInput;
    constructor(input: CreateDataRepositoryTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDataRepositoryTaskCommandInput, CreateDataRepositoryTaskCommandOutput>;
    private serialize;
    private deserialize;
}

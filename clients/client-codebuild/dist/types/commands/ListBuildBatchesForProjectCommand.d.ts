import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListBuildBatchesForProjectInput, ListBuildBatchesForProjectOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBuildBatchesForProjectCommandInput extends ListBuildBatchesForProjectInput {
}
export interface ListBuildBatchesForProjectCommandOutput extends ListBuildBatchesForProjectOutput, __MetadataBearer {
}
/**
 * <p>Retrieves the identifiers of the build batches for a specific project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildBatchesForProjectCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListBuildBatchesForProjectCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListBuildBatchesForProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuildBatchesForProjectCommandInput} for command's `input` shape.
 * @see {@link ListBuildBatchesForProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBuildBatchesForProjectCommand extends $Command<ListBuildBatchesForProjectCommandInput, ListBuildBatchesForProjectCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListBuildBatchesForProjectCommandInput;
    constructor(input: ListBuildBatchesForProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBuildBatchesForProjectCommandInput, ListBuildBatchesForProjectCommandOutput>;
    private serialize;
    private deserialize;
}

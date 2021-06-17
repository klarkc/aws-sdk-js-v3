import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetProjectsInput, BatchGetProjectsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetProjectsCommandInput extends BatchGetProjectsInput {
}
export interface BatchGetProjectsCommandOutput extends BatchGetProjectsOutput, __MetadataBearer {
}
/**
 * <p>Gets information about one or more build projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetProjectsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetProjectsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new BatchGetProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetProjectsCommandInput} for command's `input` shape.
 * @see {@link BatchGetProjectsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetProjectsCommand extends $Command<BatchGetProjectsCommandInput, BatchGetProjectsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: BatchGetProjectsCommandInput;
    constructor(input: BatchGetProjectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetProjectsCommandInput, BatchGetProjectsCommandOutput>;
    private serialize;
    private deserialize;
}

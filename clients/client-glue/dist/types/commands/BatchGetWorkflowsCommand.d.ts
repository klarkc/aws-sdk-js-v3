import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetWorkflowsRequest, BatchGetWorkflowsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetWorkflowsCommandInput extends BatchGetWorkflowsRequest {
}
export interface BatchGetWorkflowsCommandOutput extends BatchGetWorkflowsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetWorkflowsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetWorkflowsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchGetWorkflowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetWorkflowsCommandInput} for command's `input` shape.
 * @see {@link BatchGetWorkflowsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetWorkflowsCommand extends $Command<BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetWorkflowsCommandInput;
    constructor(input: BatchGetWorkflowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput>;
    private serialize;
    private deserialize;
}

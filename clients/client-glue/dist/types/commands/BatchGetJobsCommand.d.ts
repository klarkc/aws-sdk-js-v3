import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetJobsRequest, BatchGetJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetJobsCommandInput extends BatchGetJobsRequest {
}
export interface BatchGetJobsCommandOutput extends BatchGetJobsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetJobsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetJobsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchGetJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetJobsCommandInput} for command's `input` shape.
 * @see {@link BatchGetJobsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetJobsCommand extends $Command<BatchGetJobsCommandInput, BatchGetJobsCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetJobsCommandInput;
    constructor(input: BatchGetJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetJobsCommandInput, BatchGetJobsCommandOutput>;
    private serialize;
    private deserialize;
}

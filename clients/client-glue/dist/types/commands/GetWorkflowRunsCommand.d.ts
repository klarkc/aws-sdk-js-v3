import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetWorkflowRunsRequest, GetWorkflowRunsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWorkflowRunsCommandInput extends GetWorkflowRunsRequest {
}
export interface GetWorkflowRunsCommandOutput extends GetWorkflowRunsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves metadata for all runs of a given workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetWorkflowRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkflowRunsCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWorkflowRunsCommand extends $Command<GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetWorkflowRunsCommandInput;
    constructor(input: GetWorkflowRunsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput>;
    private serialize;
    private deserialize;
}

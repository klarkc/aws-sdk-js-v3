import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetWorkflowRequest, GetWorkflowResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWorkflowCommandInput extends GetWorkflowRequest {
}
export interface GetWorkflowCommandOutput extends GetWorkflowResponse, __MetadataBearer {
}
/**
 * <p>Retrieves resource metadata for a workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetWorkflowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkflowCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWorkflowCommand extends $Command<GetWorkflowCommandInput, GetWorkflowCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetWorkflowCommandInput;
    constructor(input: GetWorkflowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorkflowCommandInput, GetWorkflowCommandOutput>;
    private serialize;
    private deserialize;
}

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopWorkflowRunRequest, StopWorkflowRunResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopWorkflowRunCommandInput extends StopWorkflowRunRequest {
}
export interface StopWorkflowRunCommandOutput extends StopWorkflowRunResponse, __MetadataBearer {
}
/**
 * <p>Stops the execution of the specified workflow run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StopWorkflowRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link StopWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopWorkflowRunCommand extends $Command<StopWorkflowRunCommandInput, StopWorkflowRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StopWorkflowRunCommandInput;
    constructor(input: StopWorkflowRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopWorkflowRunCommandInput, StopWorkflowRunCommandOutput>;
    private serialize;
    private deserialize;
}

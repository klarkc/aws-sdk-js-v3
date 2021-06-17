import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartWorkflowRunRequest, StartWorkflowRunResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartWorkflowRunCommandInput extends StartWorkflowRunRequest {
}
export interface StartWorkflowRunCommandOutput extends StartWorkflowRunResponse, __MetadataBearer {
}
/**
 * <p>Starts a new run of the specified workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartWorkflowRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link StartWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartWorkflowRunCommand extends $Command<StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartWorkflowRunCommandInput;
    constructor(input: StartWorkflowRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput>;
    private serialize;
    private deserialize;
}

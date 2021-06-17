import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { StopNotebookExecutionInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopNotebookExecutionCommandInput extends StopNotebookExecutionInput {
}
export interface StopNotebookExecutionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Stops a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, StopNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, StopNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new StopNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link StopNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopNotebookExecutionCommand extends $Command<StopNotebookExecutionCommandInput, StopNotebookExecutionCommandOutput, EMRClientResolvedConfig> {
    readonly input: StopNotebookExecutionCommandInput;
    constructor(input: StopNotebookExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopNotebookExecutionCommandInput, StopNotebookExecutionCommandOutput>;
    private serialize;
    private deserialize;
}

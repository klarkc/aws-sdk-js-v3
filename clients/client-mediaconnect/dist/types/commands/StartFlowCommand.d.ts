import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { StartFlowRequest, StartFlowResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartFlowCommandInput extends StartFlowRequest {
}
export interface StartFlowCommandOutput extends StartFlowResponse, __MetadataBearer {
}
/**
 * Starts a flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, StartFlowCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, StartFlowCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new StartFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFlowCommandInput} for command's `input` shape.
 * @see {@link StartFlowCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartFlowCommand extends $Command<StartFlowCommandInput, StartFlowCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: StartFlowCommandInput;
    constructor(input: StartFlowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartFlowCommandInput, StartFlowCommandOutput>;
    private serialize;
    private deserialize;
}

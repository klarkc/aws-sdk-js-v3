import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { CancelReplayRequest, CancelReplayResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelReplayCommandInput extends CancelReplayRequest {
}
export interface CancelReplayCommandOutput extends CancelReplayResponse, __MetadataBearer {
}
/**
 * <p>Cancels the specified replay.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CancelReplayCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CancelReplayCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new CancelReplayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelReplayCommandInput} for command's `input` shape.
 * @see {@link CancelReplayCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelReplayCommand extends $Command<CancelReplayCommandInput, CancelReplayCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: CancelReplayCommandInput;
    constructor(input: CancelReplayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelReplayCommandInput, CancelReplayCommandOutput>;
    private serialize;
    private deserialize;
}

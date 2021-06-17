import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RemoveFlowMediaStreamRequest, RemoveFlowMediaStreamResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveFlowMediaStreamCommandInput extends RemoveFlowMediaStreamRequest {
}
export interface RemoveFlowMediaStreamCommandOutput extends RemoveFlowMediaStreamResponse, __MetadataBearer {
}
/**
 * Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowMediaStreamCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowMediaStreamCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowMediaStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowMediaStreamCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowMediaStreamCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveFlowMediaStreamCommand extends $Command<RemoveFlowMediaStreamCommandInput, RemoveFlowMediaStreamCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: RemoveFlowMediaStreamCommandInput;
    constructor(input: RemoveFlowMediaStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveFlowMediaStreamCommandInput, RemoveFlowMediaStreamCommandOutput>;
    private serialize;
    private deserialize;
}

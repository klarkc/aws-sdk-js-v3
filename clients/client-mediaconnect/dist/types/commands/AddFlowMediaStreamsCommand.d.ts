import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddFlowMediaStreamsRequest, AddFlowMediaStreamsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddFlowMediaStreamsCommandInput extends AddFlowMediaStreamsRequest {
}
export interface AddFlowMediaStreamsCommandOutput extends AddFlowMediaStreamsResponse, __MetadataBearer {
}
/**
 * Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowMediaStreamsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowMediaStreamsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new AddFlowMediaStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddFlowMediaStreamsCommandInput} for command's `input` shape.
 * @see {@link AddFlowMediaStreamsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddFlowMediaStreamsCommand extends $Command<AddFlowMediaStreamsCommandInput, AddFlowMediaStreamsCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: AddFlowMediaStreamsCommandInput;
    constructor(input: AddFlowMediaStreamsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddFlowMediaStreamsCommandInput, AddFlowMediaStreamsCommandOutput>;
    private serialize;
    private deserialize;
}

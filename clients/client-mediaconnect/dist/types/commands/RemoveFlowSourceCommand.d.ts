import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RemoveFlowSourceRequest, RemoveFlowSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveFlowSourceCommandInput extends RemoveFlowSourceRequest {
}
export interface RemoveFlowSourceCommandOutput extends RemoveFlowSourceResponse, __MetadataBearer {
}
/**
 * Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowSourceCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveFlowSourceCommand extends $Command<RemoveFlowSourceCommandInput, RemoveFlowSourceCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: RemoveFlowSourceCommandInput;
    constructor(input: RemoveFlowSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveFlowSourceCommandInput, RemoveFlowSourceCommandOutput>;
    private serialize;
    private deserialize;
}

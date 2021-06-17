import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateFlowSourceRequest, UpdateFlowSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFlowSourceCommandInput extends UpdateFlowSourceRequest {
}
export interface UpdateFlowSourceCommandOutput extends UpdateFlowSourceResponse, __MetadataBearer {
}
/**
 * Updates the source of a flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new UpdateFlowSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFlowSourceCommand extends $Command<UpdateFlowSourceCommandInput, UpdateFlowSourceCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: UpdateFlowSourceCommandInput;
    constructor(input: UpdateFlowSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFlowSourceCommandInput, UpdateFlowSourceCommandOutput>;
    private serialize;
    private deserialize;
}

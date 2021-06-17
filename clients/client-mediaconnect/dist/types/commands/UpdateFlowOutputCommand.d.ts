import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateFlowOutputRequest, UpdateFlowOutputResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFlowOutputCommandInput extends UpdateFlowOutputRequest {
}
export interface UpdateFlowOutputCommandOutput extends UpdateFlowOutputResponse, __MetadataBearer {
}
/**
 * Updates an existing flow output.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new UpdateFlowOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowOutputCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowOutputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFlowOutputCommand extends $Command<UpdateFlowOutputCommandInput, UpdateFlowOutputCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: UpdateFlowOutputCommandInput;
    constructor(input: UpdateFlowOutputCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFlowOutputCommandInput, UpdateFlowOutputCommandOutput>;
    private serialize;
    private deserialize;
}

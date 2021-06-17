import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { DeleteFlowRequest, DeleteFlowResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFlowCommandInput extends DeleteFlowRequest {
}
export interface DeleteFlowCommandOutput extends DeleteFlowResponse, __MetadataBearer {
}
/**
 * Deletes a flow. Before you can delete a flow, you must stop the flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DeleteFlowCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DeleteFlowCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new DeleteFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFlowCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFlowCommand extends $Command<DeleteFlowCommandInput, DeleteFlowCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: DeleteFlowCommandInput;
    constructor(input: DeleteFlowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFlowCommandInput, DeleteFlowCommandOutput>;
    private serialize;
    private deserialize;
}

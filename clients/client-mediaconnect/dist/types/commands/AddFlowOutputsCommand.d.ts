import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddFlowOutputsRequest, AddFlowOutputsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddFlowOutputsCommandInput extends AddFlowOutputsRequest {
}
export interface AddFlowOutputsCommandOutput extends AddFlowOutputsResponse, __MetadataBearer {
}
/**
 * Adds outputs to an existing flow. You can create up to 50 outputs per flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowOutputsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowOutputsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new AddFlowOutputsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddFlowOutputsCommandInput} for command's `input` shape.
 * @see {@link AddFlowOutputsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddFlowOutputsCommand extends $Command<AddFlowOutputsCommandInput, AddFlowOutputsCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: AddFlowOutputsCommandInput;
    constructor(input: AddFlowOutputsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddFlowOutputsCommandInput, AddFlowOutputsCommandOutput>;
    private serialize;
    private deserialize;
}

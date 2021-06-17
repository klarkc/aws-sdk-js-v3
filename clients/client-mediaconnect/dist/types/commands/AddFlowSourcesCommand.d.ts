import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddFlowSourcesRequest, AddFlowSourcesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddFlowSourcesCommandInput extends AddFlowSourcesRequest {
}
export interface AddFlowSourcesCommandOutput extends AddFlowSourcesResponse, __MetadataBearer {
}
/**
 * Adds Sources to flow
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowSourcesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowSourcesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new AddFlowSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddFlowSourcesCommandInput} for command's `input` shape.
 * @see {@link AddFlowSourcesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddFlowSourcesCommand extends $Command<AddFlowSourcesCommandInput, AddFlowSourcesCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: AddFlowSourcesCommandInput;
    constructor(input: AddFlowSourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddFlowSourcesCommandInput, AddFlowSourcesCommandOutput>;
    private serialize;
    private deserialize;
}

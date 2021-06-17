import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListEndpointsRequest, ListEndpointsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEndpointsCommandInput extends ListEndpointsRequest {
}
export interface ListEndpointsCommandOutput extends ListEndpointsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of all existing endpoints that you've created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListEndpointsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListEndpointsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEndpointsCommand extends $Command<ListEndpointsCommandInput, ListEndpointsCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListEndpointsCommandInput;
    constructor(input: ListEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEndpointsCommandInput, ListEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}

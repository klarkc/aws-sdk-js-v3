import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { ListCustomRoutingEndpointGroupsRequest, ListCustomRoutingEndpointGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCustomRoutingEndpointGroupsCommandInput extends ListCustomRoutingEndpointGroupsRequest {
}
export interface ListCustomRoutingEndpointGroupsCommandOutput extends ListCustomRoutingEndpointGroupsResponse, __MetadataBearer {
}
/**
 * <p>List the endpoint groups that are associated with a listener for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingEndpointGroupsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingEndpointGroupsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListCustomRoutingEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomRoutingEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCustomRoutingEndpointGroupsCommand extends $Command<ListCustomRoutingEndpointGroupsCommandInput, ListCustomRoutingEndpointGroupsCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: ListCustomRoutingEndpointGroupsCommandInput;
    constructor(input: ListCustomRoutingEndpointGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCustomRoutingEndpointGroupsCommandInput, ListCustomRoutingEndpointGroupsCommandOutput>;
    private serialize;
    private deserialize;
}

import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { ListEndpointGroupsRequest, ListEndpointGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEndpointGroupsCommandInput extends ListEndpointGroupsRequest {
}
export interface ListEndpointGroupsCommandOutput extends ListEndpointGroupsResponse, __MetadataBearer {
}
/**
 * <p>List the endpoint groups that are associated with a listener. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListEndpointGroupsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListEndpointGroupsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEndpointGroupsCommand extends $Command<ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: ListEndpointGroupsCommandInput;
    constructor(input: ListEndpointGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput>;
    private serialize;
    private deserialize;
}

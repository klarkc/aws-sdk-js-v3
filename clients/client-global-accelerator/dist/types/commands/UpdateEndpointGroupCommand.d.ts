import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { UpdateEndpointGroupRequest, UpdateEndpointGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateEndpointGroupCommandInput extends UpdateEndpointGroupRequest {
}
export interface UpdateEndpointGroupCommandOutput extends UpdateEndpointGroupResponse, __MetadataBearer {
}
/**
 * <p>Update an endpoint group. A resource must be valid and active when you add it as an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateEndpointGroupCommand extends $Command<UpdateEndpointGroupCommandInput, UpdateEndpointGroupCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: UpdateEndpointGroupCommandInput;
    constructor(input: UpdateEndpointGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEndpointGroupCommandInput, UpdateEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}

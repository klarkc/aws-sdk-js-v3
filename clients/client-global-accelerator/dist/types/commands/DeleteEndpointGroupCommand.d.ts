import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DeleteEndpointGroupRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteEndpointGroupCommandInput extends DeleteEndpointGroupRequest {
}
export interface DeleteEndpointGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Delete an endpoint group from a listener.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DeleteEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteEndpointGroupCommand extends $Command<DeleteEndpointGroupCommandInput, DeleteEndpointGroupCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DeleteEndpointGroupCommandInput;
    constructor(input: DeleteEndpointGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEndpointGroupCommandInput, DeleteEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}

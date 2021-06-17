import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { UpdateCustomRoutingListenerRequest, UpdateCustomRoutingListenerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCustomRoutingListenerCommandInput extends UpdateCustomRoutingListenerRequest {
}
export interface UpdateCustomRoutingListenerCommandOutput extends UpdateCustomRoutingListenerResponse, __MetadataBearer {
}
/**
 * <p>Update a listener for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCustomRoutingListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCustomRoutingListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateCustomRoutingListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomRoutingListenerCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomRoutingListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCustomRoutingListenerCommand extends $Command<UpdateCustomRoutingListenerCommandInput, UpdateCustomRoutingListenerCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: UpdateCustomRoutingListenerCommandInput;
    constructor(input: UpdateCustomRoutingListenerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCustomRoutingListenerCommandInput, UpdateCustomRoutingListenerCommandOutput>;
    private serialize;
    private deserialize;
}

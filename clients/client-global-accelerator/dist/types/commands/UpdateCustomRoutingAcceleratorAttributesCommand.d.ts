import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { UpdateCustomRoutingAcceleratorAttributesRequest, UpdateCustomRoutingAcceleratorAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCustomRoutingAcceleratorAttributesCommandInput extends UpdateCustomRoutingAcceleratorAttributesRequest {
}
export interface UpdateCustomRoutingAcceleratorAttributesCommandOutput extends UpdateCustomRoutingAcceleratorAttributesResponse, __MetadataBearer {
}
/**
 * <p>Update the attributes for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateCustomRoutingAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomRoutingAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomRoutingAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCustomRoutingAcceleratorAttributesCommand extends $Command<UpdateCustomRoutingAcceleratorAttributesCommandInput, UpdateCustomRoutingAcceleratorAttributesCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: UpdateCustomRoutingAcceleratorAttributesCommandInput;
    constructor(input: UpdateCustomRoutingAcceleratorAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCustomRoutingAcceleratorAttributesCommandInput, UpdateCustomRoutingAcceleratorAttributesCommandOutput>;
    private serialize;
    private deserialize;
}

import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { ListCustomRoutingAcceleratorsRequest, ListCustomRoutingAcceleratorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCustomRoutingAcceleratorsCommandInput extends ListCustomRoutingAcceleratorsRequest {
}
export interface ListCustomRoutingAcceleratorsCommandOutput extends ListCustomRoutingAcceleratorsResponse, __MetadataBearer {
}
/**
 * <p>List the custom routing accelerators for an AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingAcceleratorsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingAcceleratorsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListCustomRoutingAcceleratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomRoutingAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingAcceleratorsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCustomRoutingAcceleratorsCommand extends $Command<ListCustomRoutingAcceleratorsCommandInput, ListCustomRoutingAcceleratorsCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: ListCustomRoutingAcceleratorsCommandInput;
    constructor(input: ListCustomRoutingAcceleratorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCustomRoutingAcceleratorsCommandInput, ListCustomRoutingAcceleratorsCommandOutput>;
    private serialize;
    private deserialize;
}

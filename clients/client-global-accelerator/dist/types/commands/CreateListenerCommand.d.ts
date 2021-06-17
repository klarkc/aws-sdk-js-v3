import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { CreateListenerRequest, CreateListenerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateListenerCommandInput extends CreateListenerRequest {
}
export interface CreateListenerCommandOutput extends CreateListenerResponse, __MetadataBearer {
}
/**
 * <p>Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static
 * 			IP addresses on a port, port range, or list of port ranges that you specify. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateListenerCommandInput} for command's `input` shape.
 * @see {@link CreateListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateListenerCommand extends $Command<CreateListenerCommandInput, CreateListenerCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: CreateListenerCommandInput;
    constructor(input: CreateListenerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateListenerCommandInput, CreateListenerCommandOutput>;
    private serialize;
    private deserialize;
}

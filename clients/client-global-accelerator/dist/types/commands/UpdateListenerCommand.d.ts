import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { UpdateListenerRequest, UpdateListenerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateListenerCommandInput extends UpdateListenerRequest {
}
export interface UpdateListenerCommandOutput extends UpdateListenerResponse, __MetadataBearer {
}
/**
 * <p>Update a listener. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateListenerCommandInput} for command's `input` shape.
 * @see {@link UpdateListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateListenerCommand extends $Command<UpdateListenerCommandInput, UpdateListenerCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: UpdateListenerCommandInput;
    constructor(input: UpdateListenerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateListenerCommandInput, UpdateListenerCommandOutput>;
    private serialize;
    private deserialize;
}

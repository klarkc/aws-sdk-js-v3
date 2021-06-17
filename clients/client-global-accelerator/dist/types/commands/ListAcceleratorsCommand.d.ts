import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { ListAcceleratorsRequest, ListAcceleratorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAcceleratorsCommandInput extends ListAcceleratorsRequest {
}
export interface ListAcceleratorsCommandOutput extends ListAcceleratorsResponse, __MetadataBearer {
}
/**
 * <p>List the accelerators for an AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListAcceleratorsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListAcceleratorsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListAcceleratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link ListAcceleratorsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAcceleratorsCommand extends $Command<ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: ListAcceleratorsCommandInput;
    constructor(input: ListAcceleratorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput>;
    private serialize;
    private deserialize;
}

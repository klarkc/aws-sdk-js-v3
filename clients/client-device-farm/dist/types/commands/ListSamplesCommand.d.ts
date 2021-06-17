import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListSamplesRequest, ListSamplesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSamplesCommandInput extends ListSamplesRequest {
}
export interface ListSamplesCommandOutput extends ListSamplesResult, __MetadataBearer {
}
/**
 * <p>Gets information about samples, given an AWS Device Farm job ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListSamplesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListSamplesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListSamplesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSamplesCommandInput} for command's `input` shape.
 * @see {@link ListSamplesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSamplesCommand extends $Command<ListSamplesCommandInput, ListSamplesCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListSamplesCommandInput;
    constructor(input: ListSamplesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSamplesCommandInput, ListSamplesCommandOutput>;
    private serialize;
    private deserialize;
}

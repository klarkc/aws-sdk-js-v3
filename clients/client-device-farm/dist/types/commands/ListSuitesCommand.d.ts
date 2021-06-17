import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListSuitesRequest, ListSuitesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSuitesCommandInput extends ListSuitesRequest {
}
export interface ListSuitesCommandOutput extends ListSuitesResult, __MetadataBearer {
}
/**
 * <p>Gets information about test suites for a given job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListSuitesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListSuitesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListSuitesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSuitesCommandInput} for command's `input` shape.
 * @see {@link ListSuitesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSuitesCommand extends $Command<ListSuitesCommandInput, ListSuitesCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListSuitesCommandInput;
    constructor(input: ListSuitesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSuitesCommandInput, ListSuitesCommandOutput>;
    private serialize;
    private deserialize;
}

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListTestGridSessionsRequest, ListTestGridSessionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTestGridSessionsCommandInput extends ListTestGridSessionsRequest {
}
export interface ListTestGridSessionsCommandOutput extends ListTestGridSessionsResult, __MetadataBearer {
}
/**
 * <p>Retrieves a list of sessions for a <a>TestGridProject</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListTestGridSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTestGridSessionsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTestGridSessionsCommand extends $Command<ListTestGridSessionsCommandInput, ListTestGridSessionsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListTestGridSessionsCommandInput;
    constructor(input: ListTestGridSessionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTestGridSessionsCommandInput, ListTestGridSessionsCommandOutput>;
    private serialize;
    private deserialize;
}

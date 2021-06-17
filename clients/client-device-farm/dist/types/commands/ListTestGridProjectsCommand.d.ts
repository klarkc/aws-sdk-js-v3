import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListTestGridProjectsRequest, ListTestGridProjectsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTestGridProjectsCommandInput extends ListTestGridProjectsRequest {
}
export interface ListTestGridProjectsCommandOutput extends ListTestGridProjectsResult, __MetadataBearer {
}
/**
 * <p>Gets a list of all Selenium testing projects in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridProjectsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridProjectsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListTestGridProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTestGridProjectsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridProjectsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTestGridProjectsCommand extends $Command<ListTestGridProjectsCommandInput, ListTestGridProjectsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListTestGridProjectsCommandInput;
    constructor(input: ListTestGridProjectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTestGridProjectsCommandInput, ListTestGridProjectsCommandOutput>;
    private serialize;
    private deserialize;
}

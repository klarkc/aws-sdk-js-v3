import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { ListDevicesRequest, ListDevicesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDevicesCommandInput extends ListDevicesRequest {
}
export interface ListDevicesCommandOutput extends ListDevicesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of devices registered with the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, ListDevicesCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, ListDevicesCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new ListDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevicesCommandInput} for command's `input` shape.
 * @see {@link ListDevicesCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDevicesCommand extends $Command<ListDevicesCommandInput, ListDevicesCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: ListDevicesCommandInput;
    constructor(input: ListDevicesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDevicesCommandInput, ListDevicesCommandOutput>;
    private serialize;
    private deserialize;
}

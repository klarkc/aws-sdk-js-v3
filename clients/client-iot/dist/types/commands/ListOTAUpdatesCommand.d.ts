import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListOTAUpdatesRequest, ListOTAUpdatesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOTAUpdatesCommandInput extends ListOTAUpdatesRequest {
}
export interface ListOTAUpdatesCommandOutput extends ListOTAUpdatesResponse, __MetadataBearer {
}
/**
 * <p>Lists OTA updates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListOTAUpdatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListOTAUpdatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListOTAUpdatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOTAUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListOTAUpdatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOTAUpdatesCommand extends $Command<ListOTAUpdatesCommandInput, ListOTAUpdatesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListOTAUpdatesCommandInput;
    constructor(input: ListOTAUpdatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOTAUpdatesCommandInput, ListOTAUpdatesCommandOutput>;
    private serialize;
    private deserialize;
}

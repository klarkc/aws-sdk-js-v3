import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListDestinationsRequest, ListDestinationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDestinationsCommandInput extends ListDestinationsRequest {
}
export interface ListDestinationsCommandOutput extends ListDestinationsResponse, __MetadataBearer {
}
/**
 * <p>Lists the destinations registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListDestinationsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListDestinationsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListDestinationsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDestinationsCommand extends $Command<ListDestinationsCommandInput, ListDestinationsCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: ListDestinationsCommandInput;
    constructor(input: ListDestinationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDestinationsCommandInput, ListDestinationsCommandOutput>;
    private serialize;
    private deserialize;
}

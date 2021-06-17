import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListDeviceProfilesRequest, ListDeviceProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeviceProfilesCommandInput extends ListDeviceProfilesRequest {
}
export interface ListDeviceProfilesCommandOutput extends ListDeviceProfilesResponse, __MetadataBearer {
}
/**
 * <p>Lists the device profiles registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListDeviceProfilesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListDeviceProfilesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListDeviceProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListDeviceProfilesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeviceProfilesCommand extends $Command<ListDeviceProfilesCommandInput, ListDeviceProfilesCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: ListDeviceProfilesCommandInput;
    constructor(input: ListDeviceProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeviceProfilesCommandInput, ListDeviceProfilesCommandOutput>;
    private serialize;
    private deserialize;
}

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListServiceProfilesRequest, ListServiceProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListServiceProfilesCommandInput extends ListServiceProfilesRequest {
}
export interface ListServiceProfilesCommandOutput extends ListServiceProfilesResponse, __MetadataBearer {
}
/**
 * <p>Lists the service profiles registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListServiceProfilesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListServiceProfilesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListServiceProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListServiceProfilesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListServiceProfilesCommand extends $Command<ListServiceProfilesCommandInput, ListServiceProfilesCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: ListServiceProfilesCommandInput;
    constructor(input: ListServiceProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServiceProfilesCommandInput, ListServiceProfilesCommandOutput>;
    private serialize;
    private deserialize;
}

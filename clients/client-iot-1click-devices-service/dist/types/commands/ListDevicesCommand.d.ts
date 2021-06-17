import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { ListDevicesRequest, ListDevicesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDevicesCommandInput extends ListDevicesRequest {
}
export interface ListDevicesCommandOutput extends ListDevicesResponse, __MetadataBearer {
}
/**
 * <p>Lists the 1-Click compatible devices associated with your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, ListDevicesCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, ListDevicesCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new ListDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevicesCommandInput} for command's `input` shape.
 * @see {@link ListDevicesCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDevicesCommand extends $Command<ListDevicesCommandInput, ListDevicesCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: ListDevicesCommandInput;
    constructor(input: ListDevicesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDevicesCommandInput, ListDevicesCommandOutput>;
    private serialize;
    private deserialize;
}

import { IoT1ClickProjectsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickProjectsClient";
import { GetDevicesInPlacementRequest, GetDevicesInPlacementResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDevicesInPlacementCommandInput extends GetDevicesInPlacementRequest {
}
export interface GetDevicesInPlacementCommandOutput extends GetDevicesInPlacementResponse, __MetadataBearer {
}
/**
 * <p>Returns an object enumerating the devices in a placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, GetDevicesInPlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, GetDevicesInPlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new GetDevicesInPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicesInPlacementCommandInput} for command's `input` shape.
 * @see {@link GetDevicesInPlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDevicesInPlacementCommand extends $Command<GetDevicesInPlacementCommandInput, GetDevicesInPlacementCommandOutput, IoT1ClickProjectsClientResolvedConfig> {
    readonly input: GetDevicesInPlacementCommandInput;
    constructor(input: GetDevicesInPlacementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickProjectsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDevicesInPlacementCommandInput, GetDevicesInPlacementCommandOutput>;
    private serialize;
    private deserialize;
}

import { IoT1ClickProjectsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickProjectsClient";
import { DisassociateDeviceFromPlacementRequest, DisassociateDeviceFromPlacementResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateDeviceFromPlacementCommandInput extends DisassociateDeviceFromPlacementRequest {
}
export interface DisassociateDeviceFromPlacementCommandOutput extends DisassociateDeviceFromPlacementResponse, __MetadataBearer {
}
/**
 * <p>Removes a physical device from a placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DisassociateDeviceFromPlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DisassociateDeviceFromPlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new DisassociateDeviceFromPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDeviceFromPlacementCommandInput} for command's `input` shape.
 * @see {@link DisassociateDeviceFromPlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateDeviceFromPlacementCommand extends $Command<DisassociateDeviceFromPlacementCommandInput, DisassociateDeviceFromPlacementCommandOutput, IoT1ClickProjectsClientResolvedConfig> {
    readonly input: DisassociateDeviceFromPlacementCommandInput;
    constructor(input: DisassociateDeviceFromPlacementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickProjectsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateDeviceFromPlacementCommandInput, DisassociateDeviceFromPlacementCommandOutput>;
    private serialize;
    private deserialize;
}

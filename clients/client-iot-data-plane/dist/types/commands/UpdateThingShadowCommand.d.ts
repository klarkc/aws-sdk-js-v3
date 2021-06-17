import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { UpdateThingShadowRequest, UpdateThingShadowResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateThingShadowCommandInput extends UpdateThingShadowRequest {
}
export interface UpdateThingShadowCommandOutput extends UpdateThingShadowResponse, __MetadataBearer {
}
/**
 * <p>Updates the shadow for the specified thing.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the
 *         AWS IoT Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, UpdateThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, UpdateThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new UpdateThingShadowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingShadowCommandInput} for command's `input` shape.
 * @see {@link UpdateThingShadowCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateThingShadowCommand extends $Command<UpdateThingShadowCommandInput, UpdateThingShadowCommandOutput, IoTDataPlaneClientResolvedConfig> {
    readonly input: UpdateThingShadowCommandInput;
    constructor(input: UpdateThingShadowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTDataPlaneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateThingShadowCommandInput, UpdateThingShadowCommandOutput>;
    private serialize;
    private deserialize;
}

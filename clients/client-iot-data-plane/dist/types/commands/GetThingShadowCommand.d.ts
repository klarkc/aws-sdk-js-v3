import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { GetThingShadowRequest, GetThingShadowResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetThingShadowCommandInput extends GetThingShadowRequest {
}
export interface GetThingShadowCommandOutput extends GetThingShadowResponse, __MetadataBearer {
}
/**
 * <p>Gets the shadow for the specified thing.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the
 *         AWS IoT Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, GetThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, GetThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new GetThingShadowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetThingShadowCommandInput} for command's `input` shape.
 * @see {@link GetThingShadowCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetThingShadowCommand extends $Command<GetThingShadowCommandInput, GetThingShadowCommandOutput, IoTDataPlaneClientResolvedConfig> {
    readonly input: GetThingShadowCommandInput;
    constructor(input: GetThingShadowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTDataPlaneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetThingShadowCommandInput, GetThingShadowCommandOutput>;
    private serialize;
    private deserialize;
}

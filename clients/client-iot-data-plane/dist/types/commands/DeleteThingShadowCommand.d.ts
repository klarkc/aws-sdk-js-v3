import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { DeleteThingShadowRequest, DeleteThingShadowResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteThingShadowCommandInput extends DeleteThingShadowRequest {
}
export interface DeleteThingShadowCommandOutput extends DeleteThingShadowResponse, __MetadataBearer {
}
/**
 * <p>Deletes the shadow for the specified thing.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the AWS IoT Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, DeleteThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, DeleteThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new DeleteThingShadowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThingShadowCommandInput} for command's `input` shape.
 * @see {@link DeleteThingShadowCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteThingShadowCommand extends $Command<DeleteThingShadowCommandInput, DeleteThingShadowCommandOutput, IoTDataPlaneClientResolvedConfig> {
    readonly input: DeleteThingShadowCommandInput;
    constructor(input: DeleteThingShadowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTDataPlaneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteThingShadowCommandInput, DeleteThingShadowCommandOutput>;
    private serialize;
    private deserialize;
}

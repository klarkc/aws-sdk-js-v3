import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { DeleteCoreDeviceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCoreDeviceCommandInput extends DeleteCoreDeviceRequest {
}
export interface DeleteCoreDeviceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a AWS IoT Greengrass core device, which is an AWS IoT thing. This operation removes the core
 *       device from the list of core devices. This operation doesn't delete the AWS IoT thing. For more
 *       information about how to delete the AWS IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the
 *         <i>AWS IoT API Reference</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, DeleteCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, DeleteCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new DeleteCoreDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreDeviceCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCoreDeviceCommand extends $Command<DeleteCoreDeviceCommandInput, DeleteCoreDeviceCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: DeleteCoreDeviceCommandInput;
    constructor(input: DeleteCoreDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCoreDeviceCommandInput, DeleteCoreDeviceCommandOutput>;
    private serialize;
    private deserialize;
}

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { GetCoreDeviceRequest, GetCoreDeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCoreDeviceCommandInput extends GetCoreDeviceRequest {
}
export interface GetCoreDeviceCommandOutput extends GetCoreDeviceResponse, __MetadataBearer {
}
/**
 * <p>Retrieves metadata for a AWS IoT Greengrass core device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new GetCoreDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link GetCoreDeviceCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCoreDeviceCommand extends $Command<GetCoreDeviceCommandInput, GetCoreDeviceCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: GetCoreDeviceCommandInput;
    constructor(input: GetCoreDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCoreDeviceCommandInput, GetCoreDeviceCommandOutput>;
    private serialize;
    private deserialize;
}

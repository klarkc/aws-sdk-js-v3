import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ListCoreDevicesRequest, ListCoreDevicesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCoreDevicesCommandInput extends ListCoreDevicesRequest {
}
export interface ListCoreDevicesCommandOutput extends ListCoreDevicesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a paginated list of AWS IoT Greengrass core devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListCoreDevicesCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListCoreDevicesCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListCoreDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCoreDevicesCommandInput} for command's `input` shape.
 * @see {@link ListCoreDevicesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCoreDevicesCommand extends $Command<ListCoreDevicesCommandInput, ListCoreDevicesCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: ListCoreDevicesCommandInput;
    constructor(input: ListCoreDevicesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCoreDevicesCommandInput, ListCoreDevicesCommandOutput>;
    private serialize;
    private deserialize;
}

import { IoTFleetHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetHubClient";
import { UpdateApplicationRequest, UpdateApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateApplicationCommandInput extends UpdateApplicationRequest {
}
export interface UpdateApplicationCommandOutput extends UpdateApplicationResponse, __MetadataBearer {
}
/**
 * <p>Updates information about a Fleet Hub for a AWS IoT Device Management web application.</p>
 *          <note>
 *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetHubClient, UpdateApplicationCommand } from "@aws-sdk/client-iotfleethub"; // ES Modules import
 * // const { IoTFleetHubClient, UpdateApplicationCommand } = require("@aws-sdk/client-iotfleethub"); // CommonJS import
 * const client = new IoTFleetHubClient(config);
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateApplicationCommand extends $Command<UpdateApplicationCommandInput, UpdateApplicationCommandOutput, IoTFleetHubClientResolvedConfig> {
    readonly input: UpdateApplicationCommandInput;
    constructor(input: UpdateApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTFleetHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApplicationCommandInput, UpdateApplicationCommandOutput>;
    private serialize;
    private deserialize;
}

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UndeploySystemInstanceRequest, UndeploySystemInstanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UndeploySystemInstanceCommandInput extends UndeploySystemInstanceRequest {
}
export interface UndeploySystemInstanceCommandOutput extends UndeploySystemInstanceResponse, __MetadataBearer {
}
/**
 * <p>Removes a system instance from its target (Cloud or Greengrass).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UndeploySystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UndeploySystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new UndeploySystemInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UndeploySystemInstanceCommandInput} for command's `input` shape.
 * @see {@link UndeploySystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UndeploySystemInstanceCommand extends $Command<UndeploySystemInstanceCommandInput, UndeploySystemInstanceCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: UndeploySystemInstanceCommandInput;
    constructor(input: UndeploySystemInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UndeploySystemInstanceCommandInput, UndeploySystemInstanceCommandOutput>;
    private serialize;
    private deserialize;
}

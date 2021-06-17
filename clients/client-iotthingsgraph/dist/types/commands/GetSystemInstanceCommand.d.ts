import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetSystemInstanceRequest, GetSystemInstanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSystemInstanceCommandInput extends GetSystemInstanceRequest {
}
export interface GetSystemInstanceCommandOutput extends GetSystemInstanceResponse, __MetadataBearer {
}
/**
 * <p>Gets a system instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetSystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetSystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetSystemInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSystemInstanceCommandInput} for command's `input` shape.
 * @see {@link GetSystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSystemInstanceCommand extends $Command<GetSystemInstanceCommandInput, GetSystemInstanceCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetSystemInstanceCommandInput;
    constructor(input: GetSystemInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSystemInstanceCommandInput, GetSystemInstanceCommandOutput>;
    private serialize;
    private deserialize;
}

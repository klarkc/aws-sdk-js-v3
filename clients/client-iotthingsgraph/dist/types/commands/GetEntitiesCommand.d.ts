import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetEntitiesRequest, GetEntitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEntitiesCommandInput extends GetEntitiesRequest {
}
export interface GetEntitiesCommandOutput extends GetEntitiesResponse, __MetadataBearer {
}
/**
 * <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the
 *       following TDM entities.</p>
 *          <ul>
 *             <li>
 *                <p>Properties</p>
 *             </li>
 *             <li>
 *                <p>States</p>
 *             </li>
 *             <li>
 *                <p>Events</p>
 *             </li>
 *             <li>
 *                <p>Actions</p>
 *             </li>
 *             <li>
 *                <p>Capabilities</p>
 *             </li>
 *             <li>
 *                <p>Mappings</p>
 *             </li>
 *             <li>
 *                <p>Devices</p>
 *             </li>
 *             <li>
 *                <p>Device Models</p>
 *             </li>
 *             <li>
 *                <p>Services</p>
 *             </li>
 *          </ul>
 *          <p>This action doesn't return definitions for systems, flows, and deployments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetEntitiesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetEntitiesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEntitiesCommandInput} for command's `input` shape.
 * @see {@link GetEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEntitiesCommand extends $Command<GetEntitiesCommandInput, GetEntitiesCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetEntitiesCommandInput;
    constructor(input: GetEntitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEntitiesCommandInput, GetEntitiesCommandOutput>;
    private serialize;
    private deserialize;
}

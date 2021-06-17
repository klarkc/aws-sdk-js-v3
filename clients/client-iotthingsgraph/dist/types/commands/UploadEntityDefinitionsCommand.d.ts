import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UploadEntityDefinitionsRequest, UploadEntityDefinitionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UploadEntityDefinitionsCommandInput extends UploadEntityDefinitionsRequest {
}
export interface UploadEntityDefinitionsCommandOutput extends UploadEntityDefinitionsResponse, __MetadataBearer {
}
/**
 * <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if
 *       <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter  is set to
 *          <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true,
 *       all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p>
 *          <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users
 *       can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the
 *          <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p>
 *          <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p>
 *          <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>,
 *          <code>Mapping</code>, <code>Enum</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UploadEntityDefinitionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UploadEntityDefinitionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new UploadEntityDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadEntityDefinitionsCommandInput} for command's `input` shape.
 * @see {@link UploadEntityDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UploadEntityDefinitionsCommand extends $Command<UploadEntityDefinitionsCommandInput, UploadEntityDefinitionsCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: UploadEntityDefinitionsCommandInput;
    constructor(input: UploadEntityDefinitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UploadEntityDefinitionsCommandInput, UploadEntityDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}

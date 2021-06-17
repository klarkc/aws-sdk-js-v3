import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DissociateEntityFromThingRequest, DissociateEntityFromThingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DissociateEntityFromThingCommandInput extends DissociateEntityFromThingRequest {
}
export interface DissociateEntityFromThingCommandOutput extends DissociateEntityFromThingResponse, __MetadataBearer {
}
/**
 * <p>Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only
 *          one entity of a particular type can be associated with a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DissociateEntityFromThingCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DissociateEntityFromThingCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DissociateEntityFromThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DissociateEntityFromThingCommandInput} for command's `input` shape.
 * @see {@link DissociateEntityFromThingCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DissociateEntityFromThingCommand extends $Command<DissociateEntityFromThingCommandInput, DissociateEntityFromThingCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DissociateEntityFromThingCommandInput;
    constructor(input: DissociateEntityFromThingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DissociateEntityFromThingCommandInput, DissociateEntityFromThingCommandOutput>;
    private serialize;
    private deserialize;
}

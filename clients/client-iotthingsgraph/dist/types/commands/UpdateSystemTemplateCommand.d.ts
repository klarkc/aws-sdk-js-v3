import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UpdateSystemTemplateRequest, UpdateSystemTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSystemTemplateCommandInput extends UpdateSystemTemplateRequest {
}
export interface UpdateSystemTemplateCommandOutput extends UpdateSystemTemplateResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UpdateSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UpdateSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new UpdateSystemTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSystemTemplateCommand extends $Command<UpdateSystemTemplateCommandInput, UpdateSystemTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: UpdateSystemTemplateCommandInput;
    constructor(input: UpdateSystemTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSystemTemplateCommandInput, UpdateSystemTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

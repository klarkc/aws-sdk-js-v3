import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeleteSystemTemplateRequest, DeleteSystemTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSystemTemplateCommandInput extends DeleteSystemTemplateRequest {
}
export interface DeleteSystemTemplateCommandOutput extends DeleteSystemTemplateResponse, __MetadataBearer {
}
/**
 * <p>Deletes a system. New deployments can't contain the system after its deletion.
 *       Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeleteSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeleteSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DeleteSystemTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSystemTemplateCommand extends $Command<DeleteSystemTemplateCommandInput, DeleteSystemTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DeleteSystemTemplateCommandInput;
    constructor(input: DeleteSystemTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSystemTemplateCommandInput, DeleteSystemTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeleteFlowTemplateRequest, DeleteFlowTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFlowTemplateCommandInput extends DeleteFlowTemplateRequest {
}
export interface DeleteFlowTemplateCommandOutput extends DeleteFlowTemplateResponse, __MetadataBearer {
}
/**
 * <p>Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy.
 *          Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeleteFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeleteFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DeleteFlowTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFlowTemplateCommand extends $Command<DeleteFlowTemplateCommandInput, DeleteFlowTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DeleteFlowTemplateCommandInput;
    constructor(input: DeleteFlowTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFlowTemplateCommandInput, DeleteFlowTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

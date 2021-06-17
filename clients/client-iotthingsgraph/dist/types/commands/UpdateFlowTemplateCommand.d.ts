import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UpdateFlowTemplateRequest, UpdateFlowTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFlowTemplateCommandInput extends UpdateFlowTemplateRequest {
}
export interface UpdateFlowTemplateCommandOutput extends UpdateFlowTemplateResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this
 *          behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UpdateFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UpdateFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new UpdateFlowTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFlowTemplateCommand extends $Command<UpdateFlowTemplateCommandInput, UpdateFlowTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: UpdateFlowTemplateCommandInput;
    constructor(input: UpdateFlowTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFlowTemplateCommandInput, UpdateFlowTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

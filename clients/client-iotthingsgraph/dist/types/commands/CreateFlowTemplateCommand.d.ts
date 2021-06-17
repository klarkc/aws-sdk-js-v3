import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { CreateFlowTemplateRequest, CreateFlowTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFlowTemplateCommandInput extends CreateFlowTemplateRequest {
}
export interface CreateFlowTemplateCommandOutput extends CreateFlowTemplateResponse, __MetadataBearer {
}
/**
 * <p>Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only
 *          entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the
 *       latest version of the user's namespace unless another namespace version is specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, CreateFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, CreateFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new CreateFlowTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFlowTemplateCommand extends $Command<CreateFlowTemplateCommandInput, CreateFlowTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: CreateFlowTemplateCommandInput;
    constructor(input: CreateFlowTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFlowTemplateCommandInput, CreateFlowTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

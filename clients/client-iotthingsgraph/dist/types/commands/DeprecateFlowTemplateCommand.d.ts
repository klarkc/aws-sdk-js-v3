import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeprecateFlowTemplateRequest, DeprecateFlowTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeprecateFlowTemplateCommandInput extends DeprecateFlowTemplateRequest {
}
export interface DeprecateFlowTemplateCommandOutput extends DeprecateFlowTemplateResponse, __MetadataBearer {
}
/**
 * <p>Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeprecateFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeprecateFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DeprecateFlowTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprecateFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link DeprecateFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeprecateFlowTemplateCommand extends $Command<DeprecateFlowTemplateCommandInput, DeprecateFlowTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DeprecateFlowTemplateCommandInput;
    constructor(input: DeprecateFlowTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeprecateFlowTemplateCommandInput, DeprecateFlowTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

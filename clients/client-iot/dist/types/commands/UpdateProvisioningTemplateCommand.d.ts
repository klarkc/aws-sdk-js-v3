import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateProvisioningTemplateRequest, UpdateProvisioningTemplateResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateProvisioningTemplateCommandInput extends UpdateProvisioningTemplateRequest {
}
export interface UpdateProvisioningTemplateCommandOutput extends UpdateProvisioningTemplateResponse, __MetadataBearer {
}
/**
 * <p>Updates a fleet provisioning template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateProvisioningTemplateCommand extends $Command<UpdateProvisioningTemplateCommandInput, UpdateProvisioningTemplateCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateProvisioningTemplateCommandInput;
    constructor(input: UpdateProvisioningTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProvisioningTemplateCommandInput, UpdateProvisioningTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

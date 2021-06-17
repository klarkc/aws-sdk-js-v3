import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateProvisioningTemplateRequest, CreateProvisioningTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProvisioningTemplateCommandInput extends CreateProvisioningTemplateRequest {
}
export interface CreateProvisioningTemplateCommandOutput extends CreateProvisioningTemplateResponse, __MetadataBearer {
}
/**
 * <p>Creates a fleet provisioning template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProvisioningTemplateCommand extends $Command<CreateProvisioningTemplateCommandInput, CreateProvisioningTemplateCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateProvisioningTemplateCommandInput;
    constructor(input: CreateProvisioningTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProvisioningTemplateCommandInput, CreateProvisioningTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

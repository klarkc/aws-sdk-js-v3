import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateProvisioningTemplateVersionRequest, CreateProvisioningTemplateVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProvisioningTemplateVersionCommandInput extends CreateProvisioningTemplateVersionRequest {
}
export interface CreateProvisioningTemplateVersionCommandOutput extends CreateProvisioningTemplateVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new version of a fleet provisioning template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProvisioningTemplateVersionCommand extends $Command<CreateProvisioningTemplateVersionCommandInput, CreateProvisioningTemplateVersionCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateProvisioningTemplateVersionCommandInput;
    constructor(input: CreateProvisioningTemplateVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProvisioningTemplateVersionCommandInput, CreateProvisioningTemplateVersionCommandOutput>;
    private serialize;
    private deserialize;
}

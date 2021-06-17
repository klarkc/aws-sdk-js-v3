import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteProvisioningTemplateVersionRequest, DeleteProvisioningTemplateVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProvisioningTemplateVersionCommandInput extends DeleteProvisioningTemplateVersionRequest {
}
export interface DeleteProvisioningTemplateVersionCommandOutput extends DeleteProvisioningTemplateVersionResponse, __MetadataBearer {
}
/**
 * <p>Deletes a fleet provisioning template version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProvisioningTemplateVersionCommand extends $Command<DeleteProvisioningTemplateVersionCommandInput, DeleteProvisioningTemplateVersionCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteProvisioningTemplateVersionCommandInput;
    constructor(input: DeleteProvisioningTemplateVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProvisioningTemplateVersionCommandInput, DeleteProvisioningTemplateVersionCommandOutput>;
    private serialize;
    private deserialize;
}

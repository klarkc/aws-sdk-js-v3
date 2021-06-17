import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeProvisioningTemplateVersionRequest, DescribeProvisioningTemplateVersionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProvisioningTemplateVersionCommandInput extends DescribeProvisioningTemplateVersionRequest {
}
export interface DescribeProvisioningTemplateVersionCommandOutput extends DescribeProvisioningTemplateVersionResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a fleet provisioning template version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProvisioningTemplateVersionCommand extends $Command<DescribeProvisioningTemplateVersionCommandInput, DescribeProvisioningTemplateVersionCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeProvisioningTemplateVersionCommandInput;
    constructor(input: DescribeProvisioningTemplateVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProvisioningTemplateVersionCommandInput, DescribeProvisioningTemplateVersionCommandOutput>;
    private serialize;
    private deserialize;
}

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeProvisioningTemplateRequest, DescribeProvisioningTemplateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProvisioningTemplateCommandInput extends DescribeProvisioningTemplateRequest {
}
export interface DescribeProvisioningTemplateCommandOutput extends DescribeProvisioningTemplateResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a fleet provisioning template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProvisioningTemplateCommand extends $Command<DescribeProvisioningTemplateCommandInput, DescribeProvisioningTemplateCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeProvisioningTemplateCommandInput;
    constructor(input: DescribeProvisioningTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProvisioningTemplateCommandInput, DescribeProvisioningTemplateCommandOutput>;
    private serialize;
    private deserialize;
}

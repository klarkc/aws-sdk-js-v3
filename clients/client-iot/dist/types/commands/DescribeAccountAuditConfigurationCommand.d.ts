import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeAccountAuditConfigurationRequest, DescribeAccountAuditConfigurationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAccountAuditConfigurationCommandInput extends DescribeAccountAuditConfigurationRequest {
}
export interface DescribeAccountAuditConfigurationCommandOutput extends DescribeAccountAuditConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the Device Defender audit settings for this account.
 *           Settings include how audit notifications are sent and which audit checks are
 *           enabled or disabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAccountAuditConfigurationCommand extends $Command<DescribeAccountAuditConfigurationCommandInput, DescribeAccountAuditConfigurationCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeAccountAuditConfigurationCommandInput;
    constructor(input: DescribeAccountAuditConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountAuditConfigurationCommandInput, DescribeAccountAuditConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}

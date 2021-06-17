import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DescribeOrganizationConfigurationRequest, DescribeOrganizationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeOrganizationConfigurationCommandInput extends DescribeOrganizationConfigurationRequest {
}
export interface DescribeOrganizationConfigurationCommandOutput extends DescribeOrganizationConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the account selected as the delegated administrator for
 *       GuardDuty.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DescribeOrganizationConfigurationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DescribeOrganizationConfigurationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DescribeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeOrganizationConfigurationCommand extends $Command<DescribeOrganizationConfigurationCommandInput, DescribeOrganizationConfigurationCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: DescribeOrganizationConfigurationCommandInput;
    constructor(input: DescribeOrganizationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationConfigurationCommandInput, DescribeOrganizationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}

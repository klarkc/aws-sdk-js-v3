import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeAffectedAccountsForOrganizationRequest, DescribeAffectedAccountsForOrganizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAffectedAccountsForOrganizationCommandInput extends DescribeAffectedAccountsForOrganizationRequest {
}
export interface DescribeAffectedAccountsForOrganizationCommandOutput extends DescribeAffectedAccountsForOrganizationResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of accounts in the organization from AWS Organizations that are affected by the
 *          provided event. For more information about the different types of AWS Health events, see
 *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>. </p>
 *          <p>Before you can call this operation, you must first enable AWS Health to work with
 *          AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *          management account.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeAffectedAccountsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeAffectedAccountsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeAffectedAccountsForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAffectedAccountsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeAffectedAccountsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAffectedAccountsForOrganizationCommand extends $Command<DescribeAffectedAccountsForOrganizationCommandInput, DescribeAffectedAccountsForOrganizationCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeAffectedAccountsForOrganizationCommandInput;
    constructor(input: DescribeAffectedAccountsForOrganizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAffectedAccountsForOrganizationCommandInput, DescribeAffectedAccountsForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}

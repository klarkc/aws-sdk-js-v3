import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeHealthServiceStatusForOrganizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHealthServiceStatusForOrganizationCommandInput {
}
export interface DescribeHealthServiceStatusForOrganizationCommandOutput extends DescribeHealthServiceStatusForOrganizationResponse, __MetadataBearer {
}
/**
 * <p>This operation provides status information on enabling or disabling AWS Health to work
 *          with your organization. To call this operation, you must sign in as an IAM user, assume
 *          an IAM role, or sign in as the root user (not recommended) in the organization's
 *          management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeHealthServiceStatusForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeHealthServiceStatusForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeHealthServiceStatusForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHealthServiceStatusForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeHealthServiceStatusForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHealthServiceStatusForOrganizationCommand extends $Command<DescribeHealthServiceStatusForOrganizationCommandInput, DescribeHealthServiceStatusForOrganizationCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeHealthServiceStatusForOrganizationCommandInput;
    constructor(input: DescribeHealthServiceStatusForOrganizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHealthServiceStatusForOrganizationCommandInput, DescribeHealthServiceStatusForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}

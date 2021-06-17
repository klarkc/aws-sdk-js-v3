import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetOrganizationsAccessReportRequest, GetOrganizationsAccessReportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOrganizationsAccessReportCommandInput extends GetOrganizationsAccessReportRequest {
}
export interface GetOrganizationsAccessReportCommandOutput extends GetOrganizationsAccessReportResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the service last accessed data report for AWS Organizations that was previously generated
 *             using the <code>
 *                <a>GenerateOrganizationsAccessReport</a>
 *             </code> operation.
 *             This operation retrieves the status of your report job and the report contents.</p>
 *         <p>Depending on the parameters that you passed when you generated the report, the data
 *             returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p>
 *         <p>To call this operation, you must be signed in to the management account in your
 *             organization. SCPs must be enabled for your organization root. You must have permissions
 *             to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using
 *                 service last accessed data</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>For each service that principals in an account (root users, IAM users, or IAM
 *             roles) could access using SCPs, the operation returns details about the most recent
 *             access attempt. If there was no attempt, the service is listed without details about the
 *             most recent attempt to access the service. If the operation fails, it returns the reason
 *             that it failed.</p>
 *         <p>By default, the list is sorted by service namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetOrganizationsAccessReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetOrganizationsAccessReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetOrganizationsAccessReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOrganizationsAccessReportCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationsAccessReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOrganizationsAccessReportCommand extends $Command<GetOrganizationsAccessReportCommandInput, GetOrganizationsAccessReportCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetOrganizationsAccessReportCommandInput;
    constructor(input: GetOrganizationsAccessReportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOrganizationsAccessReportCommandInput, GetOrganizationsAccessReportCommandOutput>;
    private serialize;
    private deserialize;
}

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetCredentialReportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCredentialReportCommandInput {
}
export interface GetCredentialReportCommandOutput extends GetCredentialReportResponse, __MetadataBearer {
}
/**
 * <p> Retrieves a credential report for the AWS account. For more information about the
 *             credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in
 *             the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetCredentialReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetCredentialReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetCredentialReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCredentialReportCommandInput} for command's `input` shape.
 * @see {@link GetCredentialReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCredentialReportCommand extends $Command<GetCredentialReportCommandInput, GetCredentialReportCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetCredentialReportCommandInput;
    constructor(input: GetCredentialReportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCredentialReportCommandInput, GetCredentialReportCommandOutput>;
    private serialize;
    private deserialize;
}

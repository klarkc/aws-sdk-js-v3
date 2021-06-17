import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GenerateCredentialReportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GenerateCredentialReportCommandInput {
}
export interface GenerateCredentialReportCommandOutput extends GenerateCredentialReportResponse, __MetadataBearer {
}
/**
 * <p> Generates a credential report for the AWS account. For more information about the
 *             credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in
 *             the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GenerateCredentialReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GenerateCredentialReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GenerateCredentialReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateCredentialReportCommandInput} for command's `input` shape.
 * @see {@link GenerateCredentialReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GenerateCredentialReportCommand extends $Command<GenerateCredentialReportCommandInput, GenerateCredentialReportCommandOutput, IAMClientResolvedConfig> {
    readonly input: GenerateCredentialReportCommandInput;
    constructor(input: GenerateCredentialReportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateCredentialReportCommandInput, GenerateCredentialReportCommandOutput>;
    private serialize;
    private deserialize;
}

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountSummaryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAccountSummaryCommandInput {
}
export interface GetAccountSummaryCommandOutput extends GetAccountSummaryResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about IAM entity usage and IAM quotas in the AWS
 *             account.</p>
 *         <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountSummaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountSummaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetAccountSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountSummaryCommandInput} for command's `input` shape.
 * @see {@link GetAccountSummaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAccountSummaryCommand extends $Command<GetAccountSummaryCommandInput, GetAccountSummaryCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetAccountSummaryCommandInput;
    constructor(input: GetAccountSummaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccountSummaryCommandInput, GetAccountSummaryCommandOutput>;
    private serialize;
    private deserialize;
}

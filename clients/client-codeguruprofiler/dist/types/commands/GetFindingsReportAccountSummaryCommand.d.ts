import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { GetFindingsReportAccountSummaryRequest, GetFindingsReportAccountSummaryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFindingsReportAccountSummaryCommandInput extends GetFindingsReportAccountSummaryRequest {
}
export interface GetFindingsReportAccountSummaryCommandOutput extends GetFindingsReportAccountSummaryResponse, __MetadataBearer {
}
/**
 * <p>
 *             Returns a list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html">
 *                <code>FindingsReportSummary</code>
 *             </a>
 *             objects that contain analysis results for all profiling groups in your AWS account.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetFindingsReportAccountSummaryCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetFindingsReportAccountSummaryCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new GetFindingsReportAccountSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsReportAccountSummaryCommandInput} for command's `input` shape.
 * @see {@link GetFindingsReportAccountSummaryCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFindingsReportAccountSummaryCommand extends $Command<GetFindingsReportAccountSummaryCommandInput, GetFindingsReportAccountSummaryCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: GetFindingsReportAccountSummaryCommandInput;
    constructor(input: GetFindingsReportAccountSummaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFindingsReportAccountSummaryCommandInput, GetFindingsReportAccountSummaryCommandOutput>;
    private serialize;
    private deserialize;
}

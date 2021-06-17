import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { GetReportGroupTrendInput, GetReportGroupTrendOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetReportGroupTrendCommandInput extends GetReportGroupTrendInput {
}
export interface GetReportGroupTrendCommandOutput extends GetReportGroupTrendOutput, __MetadataBearer {
}
/**
 * <p>Analyzes and accumulates test report values for the specified test reports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, GetReportGroupTrendCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, GetReportGroupTrendCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new GetReportGroupTrendCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReportGroupTrendCommandInput} for command's `input` shape.
 * @see {@link GetReportGroupTrendCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetReportGroupTrendCommand extends $Command<GetReportGroupTrendCommandInput, GetReportGroupTrendCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: GetReportGroupTrendCommandInput;
    constructor(input: GetReportGroupTrendCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReportGroupTrendCommandInput, GetReportGroupTrendCommandOutput>;
    private serialize;
    private deserialize;
}

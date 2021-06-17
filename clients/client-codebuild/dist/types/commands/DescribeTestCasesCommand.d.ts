import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DescribeTestCasesInput, DescribeTestCasesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTestCasesCommandInput extends DescribeTestCasesInput {
}
export interface DescribeTestCasesCommandOutput extends DescribeTestCasesOutput, __MetadataBearer {
}
/**
 * <p>
 *       Returns a list of details about test cases for a report.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DescribeTestCasesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DescribeTestCasesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DescribeTestCasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTestCasesCommandInput} for command's `input` shape.
 * @see {@link DescribeTestCasesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTestCasesCommand extends $Command<DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DescribeTestCasesCommandInput;
    constructor(input: DescribeTestCasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput>;
    private serialize;
    private deserialize;
}

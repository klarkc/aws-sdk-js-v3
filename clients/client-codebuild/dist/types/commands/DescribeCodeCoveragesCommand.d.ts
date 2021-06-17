import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DescribeCodeCoveragesInput, DescribeCodeCoveragesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCodeCoveragesCommandInput extends DescribeCodeCoveragesInput {
}
export interface DescribeCodeCoveragesCommandOutput extends DescribeCodeCoveragesOutput, __MetadataBearer {
}
/**
 * <p>Retrieves one or more code coverage reports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DescribeCodeCoveragesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DescribeCodeCoveragesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DescribeCodeCoveragesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCodeCoveragesCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeCoveragesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCodeCoveragesCommand extends $Command<DescribeCodeCoveragesCommandInput, DescribeCodeCoveragesCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DescribeCodeCoveragesCommandInput;
    constructor(input: DescribeCodeCoveragesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCodeCoveragesCommandInput, DescribeCodeCoveragesCommandOutput>;
    private serialize;
    private deserialize;
}

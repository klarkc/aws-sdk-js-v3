import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { DescribeCodeReviewRequest, DescribeCodeReviewResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCodeReviewCommandInput extends DescribeCodeReviewRequest {
}
export interface DescribeCodeReviewCommandOutput extends DescribeCodeReviewResponse, __MetadataBearer {
}
/**
 * <p> Returns the metadata associated with the code review along with its status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeCodeReviewCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DescribeCodeReviewCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new DescribeCodeReviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCodeReviewCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeReviewCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCodeReviewCommand extends $Command<DescribeCodeReviewCommandInput, DescribeCodeReviewCommandOutput, CodeGuruReviewerClientResolvedConfig> {
    readonly input: DescribeCodeReviewCommandInput;
    constructor(input: DescribeCodeReviewCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruReviewerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCodeReviewCommandInput, DescribeCodeReviewCommandOutput>;
    private serialize;
    private deserialize;
}

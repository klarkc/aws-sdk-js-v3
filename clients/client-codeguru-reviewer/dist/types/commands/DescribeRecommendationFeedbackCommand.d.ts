import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { DescribeRecommendationFeedbackRequest, DescribeRecommendationFeedbackResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRecommendationFeedbackCommandInput extends DescribeRecommendationFeedbackRequest {
}
export interface DescribeRecommendationFeedbackCommandOutput extends DescribeRecommendationFeedbackResponse, __MetadataBearer {
}
/**
 * <p>
 *          Describes the customer feedback for a CodeGuru Reviewer recommendation.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DescribeRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new DescribeRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommendationFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRecommendationFeedbackCommand extends $Command<DescribeRecommendationFeedbackCommandInput, DescribeRecommendationFeedbackCommandOutput, CodeGuruReviewerClientResolvedConfig> {
    readonly input: DescribeRecommendationFeedbackCommandInput;
    constructor(input: DescribeRecommendationFeedbackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruReviewerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRecommendationFeedbackCommandInput, DescribeRecommendationFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}

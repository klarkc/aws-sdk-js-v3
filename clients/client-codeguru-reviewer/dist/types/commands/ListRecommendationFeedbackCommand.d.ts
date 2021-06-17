import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { ListRecommendationFeedbackRequest, ListRecommendationFeedbackResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRecommendationFeedbackCommandInput extends ListRecommendationFeedbackRequest {
}
export interface ListRecommendationFeedbackCommandOutput extends ListRecommendationFeedbackResponse, __MetadataBearer {
}
/**
 * <p>
 *          Returns a list of
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">
 *                <code>RecommendationFeedbackSummary</code>
 *             </a>
 *          objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new ListRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRecommendationFeedbackCommand extends $Command<ListRecommendationFeedbackCommandInput, ListRecommendationFeedbackCommandOutput, CodeGuruReviewerClientResolvedConfig> {
    readonly input: ListRecommendationFeedbackCommandInput;
    constructor(input: ListRecommendationFeedbackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruReviewerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRecommendationFeedbackCommandInput, ListRecommendationFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}

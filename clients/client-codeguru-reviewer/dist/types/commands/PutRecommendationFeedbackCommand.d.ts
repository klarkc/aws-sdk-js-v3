import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { PutRecommendationFeedbackRequest, PutRecommendationFeedbackResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRecommendationFeedbackCommandInput extends PutRecommendationFeedbackRequest {
}
export interface PutRecommendationFeedbackCommandOutput extends PutRecommendationFeedbackResponse, __MetadataBearer {
}
/**
 * <p>
 *          Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, PutRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, PutRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new PutRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutRecommendationFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRecommendationFeedbackCommand extends $Command<PutRecommendationFeedbackCommandInput, PutRecommendationFeedbackCommandOutput, CodeGuruReviewerClientResolvedConfig> {
    readonly input: PutRecommendationFeedbackCommandInput;
    constructor(input: PutRecommendationFeedbackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruReviewerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRecommendationFeedbackCommandInput, PutRecommendationFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { CreateCodeReviewRequest, CreateCodeReviewResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCodeReviewCommandInput extends CreateCodeReviewRequest {
}
export interface CreateCodeReviewCommandOutput extends CreateCodeReviewResponse, __MetadataBearer {
}
/**
 * <p>
 *          Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">
 *                <code>CodeReviewType</code>
 *             </a>
 *          of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository.
 *          <code>PullRequest</code> code reviews are automatically triggered by a pull request so cannot be created using this method.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, CreateCodeReviewCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, CreateCodeReviewCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new CreateCodeReviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCodeReviewCommandInput} for command's `input` shape.
 * @see {@link CreateCodeReviewCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCodeReviewCommand extends $Command<CreateCodeReviewCommandInput, CreateCodeReviewCommandOutput, CodeGuruReviewerClientResolvedConfig> {
    readonly input: CreateCodeReviewCommandInput;
    constructor(input: CreateCodeReviewCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruReviewerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCodeReviewCommandInput, CreateCodeReviewCommandOutput>;
    private serialize;
    private deserialize;
}

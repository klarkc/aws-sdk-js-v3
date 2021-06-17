import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetPullRequestInput, GetPullRequestOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPullRequestCommandInput extends GetPullRequestInput {
}
export interface GetPullRequestCommandOutput extends GetPullRequestOutput, __MetadataBearer {
}
/**
 * <p>Gets information about a pull request in a specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetPullRequestCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetPullRequestCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetPullRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPullRequestCommandInput} for command's `input` shape.
 * @see {@link GetPullRequestCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPullRequestCommand extends $Command<GetPullRequestCommandInput, GetPullRequestCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetPullRequestCommandInput;
    constructor(input: GetPullRequestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPullRequestCommandInput, GetPullRequestCommandOutput>;
    private serialize;
    private deserialize;
}

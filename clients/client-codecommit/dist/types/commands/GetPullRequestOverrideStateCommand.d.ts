import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetPullRequestOverrideStateInput, GetPullRequestOverrideStateOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPullRequestOverrideStateCommandInput extends GetPullRequestOverrideStateInput {
}
export interface GetPullRequestOverrideStateCommandOutput extends GetPullRequestOverrideStateOutput, __MetadataBearer {
}
/**
 * <p>Returns information about whether approval rules have been set aside (overridden) for a
 *             pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetPullRequestOverrideStateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetPullRequestOverrideStateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetPullRequestOverrideStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPullRequestOverrideStateCommandInput} for command's `input` shape.
 * @see {@link GetPullRequestOverrideStateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPullRequestOverrideStateCommand extends $Command<GetPullRequestOverrideStateCommandInput, GetPullRequestOverrideStateCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetPullRequestOverrideStateCommandInput;
    constructor(input: GetPullRequestOverrideStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPullRequestOverrideStateCommandInput, GetPullRequestOverrideStateCommandOutput>;
    private serialize;
    private deserialize;
}

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DescribePullRequestEventsInput, DescribePullRequestEventsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePullRequestEventsCommandInput extends DescribePullRequestEventsInput {
}
export interface DescribePullRequestEventsCommandOutput extends DescribePullRequestEventsOutput, __MetadataBearer {
}
/**
 * <p>Returns information about one or more pull request events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DescribePullRequestEventsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DescribePullRequestEventsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DescribePullRequestEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePullRequestEventsCommandInput} for command's `input` shape.
 * @see {@link DescribePullRequestEventsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePullRequestEventsCommand extends $Command<DescribePullRequestEventsCommandInput, DescribePullRequestEventsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DescribePullRequestEventsCommandInput;
    constructor(input: DescribePullRequestEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePullRequestEventsCommandInput, DescribePullRequestEventsCommandOutput>;
    private serialize;
    private deserialize;
}

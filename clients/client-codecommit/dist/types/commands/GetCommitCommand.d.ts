import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommitInput, GetCommitOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCommitCommandInput extends GetCommitInput {
}
export interface GetCommitCommandOutput extends GetCommitOutput, __MetadataBearer {
}
/**
 * <p>Returns information about a commit, including commit message and committer information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommitCommandInput} for command's `input` shape.
 * @see {@link GetCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCommitCommand extends $Command<GetCommitCommandInput, GetCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetCommitCommandInput;
    constructor(input: GetCommitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCommitCommandInput, GetCommitCommandOutput>;
    private serialize;
    private deserialize;
}

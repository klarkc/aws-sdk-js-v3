import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListBranchesInput, ListBranchesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBranchesCommandInput extends ListBranchesInput {
}
export interface ListBranchesCommandOutput extends ListBranchesOutput, __MetadataBearer {
}
/**
 * <p>Gets information about one or more branches in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListBranchesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListBranchesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListBranchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBranchesCommandInput} for command's `input` shape.
 * @see {@link ListBranchesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBranchesCommand extends $Command<ListBranchesCommandInput, ListBranchesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: ListBranchesCommandInput;
    constructor(input: ListBranchesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBranchesCommandInput, ListBranchesCommandOutput>;
    private serialize;
    private deserialize;
}

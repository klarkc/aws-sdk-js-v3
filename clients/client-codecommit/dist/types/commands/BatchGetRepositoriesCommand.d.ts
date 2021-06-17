import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { BatchGetRepositoriesInput, BatchGetRepositoriesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetRepositoriesCommandInput extends BatchGetRepositoriesInput {
}
export interface BatchGetRepositoriesCommandOutput extends BatchGetRepositoriesOutput, __MetadataBearer {
}
/**
 * <p>Returns information about one or more repositories.</p>
 *         <note>
 *             <p>The description field for a repository accepts all HTML characters and all valid
 *                 Unicode characters. Applications that do not HTML-encode the description and display
 *                 it in a webpage can expose users to potentially malicious code. Make sure that you
 *                 HTML-encode the description field in any application that uses this API to display
 *                 the repository description on a webpage.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchGetRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchGetRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchGetRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchGetRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetRepositoriesCommand extends $Command<BatchGetRepositoriesCommandInput, BatchGetRepositoriesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: BatchGetRepositoriesCommandInput;
    constructor(input: BatchGetRepositoriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetRepositoriesCommandInput, BatchGetRepositoriesCommandOutput>;
    private serialize;
    private deserialize;
}

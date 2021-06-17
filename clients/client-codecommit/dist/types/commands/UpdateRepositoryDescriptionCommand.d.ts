import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateRepositoryDescriptionInput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRepositoryDescriptionCommandInput extends UpdateRepositoryDescriptionInput {
}
export interface UpdateRepositoryDescriptionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets or changes the comment or description for a repository.</p>
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
 * import { CodeCommitClient, UpdateRepositoryDescriptionCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateRepositoryDescriptionCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateRepositoryDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRepositoryDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryDescriptionCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRepositoryDescriptionCommand extends $Command<UpdateRepositoryDescriptionCommandInput, UpdateRepositoryDescriptionCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateRepositoryDescriptionCommandInput;
    constructor(input: UpdateRepositoryDescriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRepositoryDescriptionCommandInput, UpdateRepositoryDescriptionCommandOutput>;
    private serialize;
    private deserialize;
}

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { DeleteUserProfileRequest, DeleteUserProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUserProfileCommandInput extends DeleteUserProfileRequest {
}
export interface DeleteUserProfileCommandOutput extends DeleteUserProfileResult, __MetadataBearer {
}
/**
 * <p>Deletes a user profile in AWS CodeStar, including all personal preference data associated with
 *       that profile, such as display name and email address. It does not delete the history of that
 *       user, for example the history of commits made by that user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DeleteUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DeleteUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new DeleteUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteUserProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUserProfileCommand extends $Command<DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: DeleteUserProfileCommandInput;
    constructor(input: DeleteUserProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}

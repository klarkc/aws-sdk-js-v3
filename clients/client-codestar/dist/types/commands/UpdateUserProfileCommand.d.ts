import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { UpdateUserProfileRequest, UpdateUserProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserProfileCommandInput extends UpdateUserProfileRequest {
}
export interface UpdateUserProfileCommandOutput extends UpdateUserProfileResult, __MetadataBearer {
}
/**
 * <p>Updates a user's profile in AWS CodeStar. The user profile is not project-specific.
 *       Information in the user profile is displayed wherever the user's information appears to other
 *       users in AWS CodeStar. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, UpdateUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, UpdateUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new UpdateUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUserProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserProfileCommand extends $Command<UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: UpdateUserProfileCommandInput;
    constructor(input: UpdateUserProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}

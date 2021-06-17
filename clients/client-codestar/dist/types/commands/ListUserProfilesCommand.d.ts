import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { ListUserProfilesRequest, ListUserProfilesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUserProfilesCommandInput extends ListUserProfilesRequest {
}
export interface ListUserProfilesCommandOutput extends ListUserProfilesResult, __MetadataBearer {
}
/**
 * <p>Lists all the user profiles configured for your AWS account in AWS CodeStar.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListUserProfilesCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListUserProfilesCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new ListUserProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserProfilesCommandInput} for command's `input` shape.
 * @see {@link ListUserProfilesCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUserProfilesCommand extends $Command<ListUserProfilesCommandInput, ListUserProfilesCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: ListUserProfilesCommandInput;
    constructor(input: ListUserProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserProfilesCommandInput, ListUserProfilesCommandOutput>;
    private serialize;
    private deserialize;
}

import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { GetHostnameSuggestionRequest, GetHostnameSuggestionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetHostnameSuggestionCommandInput extends GetHostnameSuggestionRequest {
}
export interface GetHostnameSuggestionCommandOutput extends GetHostnameSuggestionResult, __MetadataBearer {
}
/**
 * <p>Gets a generated host name for the specified layer, based on the current host name theme.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, GetHostnameSuggestionCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, GetHostnameSuggestionCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new GetHostnameSuggestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostnameSuggestionCommandInput} for command's `input` shape.
 * @see {@link GetHostnameSuggestionCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetHostnameSuggestionCommand extends $Command<GetHostnameSuggestionCommandInput, GetHostnameSuggestionCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: GetHostnameSuggestionCommandInput;
    constructor(input: GetHostnameSuggestionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHostnameSuggestionCommandInput, GetHostnameSuggestionCommandOutput>;
    private serialize;
    private deserialize;
}

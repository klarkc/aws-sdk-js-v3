import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { GetCurrentUserRequest, GetCurrentUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCurrentUserCommandInput extends GetCurrentUserRequest {
}
export interface GetCurrentUserCommandOutput extends GetCurrentUserResponse, __MetadataBearer {
}
/**
 * <p>Retrieves details of the current user for whom the authentication token was
 *             generated. This is not a valid action for SigV4 (administrative API) clients.</p>
 *         <p>This action requires an authentication token. To get an authentication token,
 *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
 *                 Control for User Applications</a> in the
 *             <i>Amazon
 *                 WorkDocs Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetCurrentUserCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetCurrentUserCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetCurrentUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCurrentUserCommandInput} for command's `input` shape.
 * @see {@link GetCurrentUserCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCurrentUserCommand extends $Command<GetCurrentUserCommandInput, GetCurrentUserCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: GetCurrentUserCommandInput;
    constructor(input: GetCurrentUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCurrentUserCommandInput, GetCurrentUserCommandOutput>;
    private serialize;
    private deserialize;
}

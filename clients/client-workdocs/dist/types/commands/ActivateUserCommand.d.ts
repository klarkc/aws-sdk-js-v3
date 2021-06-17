import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { ActivateUserRequest, ActivateUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ActivateUserCommandInput extends ActivateUserRequest {
}
export interface ActivateUserCommandOutput extends ActivateUserResponse, __MetadataBearer {
}
/**
 * <p>Activates the specified user. Only active users can access Amazon
 *             WorkDocs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, ActivateUserCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, ActivateUserCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new ActivateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateUserCommandInput} for command's `input` shape.
 * @see {@link ActivateUserCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ActivateUserCommand extends $Command<ActivateUserCommandInput, ActivateUserCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: ActivateUserCommandInput;
    constructor(input: ActivateUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ActivateUserCommandInput, ActivateUserCommandOutput>;
    private serialize;
    private deserialize;
}

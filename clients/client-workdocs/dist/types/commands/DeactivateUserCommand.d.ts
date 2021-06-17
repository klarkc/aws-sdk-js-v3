import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DeactivateUserRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeactivateUserCommandInput extends DeactivateUserRequest {
}
export interface DeactivateUserCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deactivates the specified user, which revokes the user's access to Amazon
 *             WorkDocs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeactivateUserCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeactivateUserCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeactivateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateUserCommandInput} for command's `input` shape.
 * @see {@link DeactivateUserCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeactivateUserCommand extends $Command<DeactivateUserCommandInput, DeactivateUserCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DeactivateUserCommandInput;
    constructor(input: DeactivateUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeactivateUserCommandInput, DeactivateUserCommandOutput>;
    private serialize;
    private deserialize;
}

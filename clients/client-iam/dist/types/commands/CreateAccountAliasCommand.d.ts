import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateAccountAliasRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAccountAliasCommandInput extends CreateAccountAliasRequest {
}
export interface CreateAccountAliasCommandOutput extends __MetadataBearer {
}
/**
 * <p>Creates an alias for your AWS account. For information about using an AWS account
 *             alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an
 *                 alias for your AWS account ID</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateAccountAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAccountAliasCommand extends $Command<CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateAccountAliasCommandInput;
    constructor(input: CreateAccountAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput>;
    private serialize;
    private deserialize;
}

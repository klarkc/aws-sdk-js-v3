import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteAccountAliasRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAccountAliasCommandInput extends DeleteAccountAliasRequest {
}
export interface DeleteAccountAliasCommandOutput extends __MetadataBearer {
}
/**
 * <p> Deletes the specified AWS account alias. For information about using an AWS
 *             account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your AWS account ID</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteAccountAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAccountAliasCommand extends $Command<DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteAccountAliasCommandInput;
    constructor(input: DeleteAccountAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput>;
    private serialize;
    private deserialize;
}

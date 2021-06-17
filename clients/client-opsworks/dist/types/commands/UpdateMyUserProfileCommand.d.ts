import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UpdateMyUserProfileRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMyUserProfileCommandInput extends UpdateMyUserProfileRequest {
}
export interface UpdateMyUserProfileCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates a user's SSH public key.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have self-management
 *       enabled or an attached policy that explicitly grants permissions. For more information about user
 *       permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UpdateMyUserProfileCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UpdateMyUserProfileCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new UpdateMyUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMyUserProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateMyUserProfileCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMyUserProfileCommand extends $Command<UpdateMyUserProfileCommandInput, UpdateMyUserProfileCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UpdateMyUserProfileCommandInput;
    constructor(input: UpdateMyUserProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMyUserProfileCommandInput, UpdateMyUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}

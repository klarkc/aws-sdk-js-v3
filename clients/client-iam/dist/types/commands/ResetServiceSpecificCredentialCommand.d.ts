import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ResetServiceSpecificCredentialRequest, ResetServiceSpecificCredentialResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetServiceSpecificCredentialCommandInput extends ResetServiceSpecificCredentialRequest {
}
export interface ResetServiceSpecificCredentialCommandOutput extends ResetServiceSpecificCredentialResponse, __MetadataBearer {
}
/**
 * <p>Resets the password for a service-specific credential. The new password is AWS
 *             generated and cryptographically strong. It cannot be configured by the user. Resetting
 *             the password immediately invalidates the previous password associated with this
 *             user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ResetServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ResetServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ResetServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link ResetServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetServiceSpecificCredentialCommand extends $Command<ResetServiceSpecificCredentialCommandInput, ResetServiceSpecificCredentialCommandOutput, IAMClientResolvedConfig> {
    readonly input: ResetServiceSpecificCredentialCommandInput;
    constructor(input: ResetServiceSpecificCredentialCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetServiceSpecificCredentialCommandInput, ResetServiceSpecificCredentialCommandOutput>;
    private serialize;
    private deserialize;
}

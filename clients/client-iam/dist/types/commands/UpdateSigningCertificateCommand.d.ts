import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateSigningCertificateRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSigningCertificateCommandInput extends UpdateSigningCertificateRequest {
}
export interface UpdateSigningCertificateCommandOutput extends __MetadataBearer {
}
/**
 * <p>Changes the status of the specified user signing certificate from active to disabled,
 *             or vice versa. This operation can be used to disable an IAM user's signing certificate
 *             as part of a certificate rotation work flow.</p>
 *         <p>If the <code>UserName</code> field is not specified, the user name is determined
 *             implicitly based on the AWS access key ID used to sign the request. This operation
 *             works for access keys under the AWS account. Consequently, you can use this operation
 *             to manage AWS account root user credentials even if the AWS account has no
 *             associated users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateSigningCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSigningCertificateCommand extends $Command<UpdateSigningCertificateCommandInput, UpdateSigningCertificateCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateSigningCertificateCommandInput;
    constructor(input: UpdateSigningCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSigningCertificateCommandInput, UpdateSigningCertificateCommandOutput>;
    private serialize;
    private deserialize;
}

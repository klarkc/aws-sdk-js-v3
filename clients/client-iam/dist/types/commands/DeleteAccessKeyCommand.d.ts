import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteAccessKeyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAccessKeyCommandInput extends DeleteAccessKeyRequest {
}
export interface DeleteAccessKeyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the access key pair associated with the specified IAM user.</p>
 *         <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the AWS access key ID signing the request. This operation works for access keys under
 *             the AWS account. Consequently, you can use this operation to manage AWS account root
 *             user credentials even if the AWS account has no associated users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccessKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccessKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteAccessKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAccessKeyCommand extends $Command<DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteAccessKeyCommandInput;
    constructor(input: DeleteAccessKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput>;
    private serialize;
    private deserialize;
}

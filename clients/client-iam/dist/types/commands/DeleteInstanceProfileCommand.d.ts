import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteInstanceProfileRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInstanceProfileCommandInput extends DeleteInstanceProfileRequest {
}
export interface DeleteInstanceProfileCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified instance profile. The instance profile must not have an
 *             associated role.</p>
 *         <important>
 *             <p>Make sure that you do not have any Amazon EC2 instances running with the instance
 *                 profile you are about to delete. Deleting a role or instance profile that is
 *                 associated with a running instance will break any applications running on the
 *                 instance.</p>
 *         </important>
 *         <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
 *             profiles</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInstanceProfileCommand extends $Command<DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteInstanceProfileCommandInput;
    constructor(input: DeleteInstanceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagInstanceProfileRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagInstanceProfileCommandInput extends UntagInstanceProfileRequest {
}
export interface UntagInstanceProfileCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link UntagInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagInstanceProfileCommand extends $Command<UntagInstanceProfileCommandInput, UntagInstanceProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: UntagInstanceProfileCommandInput;
    constructor(input: UntagInstanceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagInstanceProfileCommandInput, UntagInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}

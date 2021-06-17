import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { CancelKeyDeletionRequest, CancelKeyDeletionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelKeyDeletionCommandInput extends CancelKeyDeletionRequest {
}
export interface CancelKeyDeletionCommandOutput extends CancelKeyDeletionResponse, __MetadataBearer {
}
/**
 * <p>Cancels the deletion of a customer master key (CMK). When this operation succeeds, the key
 *       state of the CMK is <code>Disabled</code>. To enable the CMK, use <a>EnableKey</a>. </p>
 *          <p>For more information about scheduling and canceling deletion of a CMK, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting Customer Master
 *         Keys</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CancelKeyDeletion</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>ScheduleKeyDeletion</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, CancelKeyDeletionCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CancelKeyDeletionCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new CancelKeyDeletionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelKeyDeletionCommandInput} for command's `input` shape.
 * @see {@link CancelKeyDeletionCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelKeyDeletionCommand extends $Command<CancelKeyDeletionCommandInput, CancelKeyDeletionCommandOutput, KMSClientResolvedConfig> {
    readonly input: CancelKeyDeletionCommandInput;
    constructor(input: CancelKeyDeletionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelKeyDeletionCommandInput, CancelKeyDeletionCommandOutput>;
    private serialize;
    private deserialize;
}

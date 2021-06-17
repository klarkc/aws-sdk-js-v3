import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { SubmitAttachmentStateChangesRequest, SubmitAttachmentStateChangesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SubmitAttachmentStateChangesCommandInput extends SubmitAttachmentStateChangesRequest {
}
export interface SubmitAttachmentStateChangesCommandOutput extends SubmitAttachmentStateChangesResponse, __MetadataBearer {
}
/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to
 * 			acknowledge that an attachment changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitAttachmentStateChangesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitAttachmentStateChangesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new SubmitAttachmentStateChangesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitAttachmentStateChangesCommandInput} for command's `input` shape.
 * @see {@link SubmitAttachmentStateChangesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SubmitAttachmentStateChangesCommand extends $Command<SubmitAttachmentStateChangesCommandInput, SubmitAttachmentStateChangesCommandOutput, ECSClientResolvedConfig> {
    readonly input: SubmitAttachmentStateChangesCommandInput;
    constructor(input: SubmitAttachmentStateChangesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SubmitAttachmentStateChangesCommandInput, SubmitAttachmentStateChangesCommandOutput>;
    private serialize;
    private deserialize;
}

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { SubmitTaskStateChangeRequest, SubmitTaskStateChangeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SubmitTaskStateChangeCommandInput extends SubmitTaskStateChangeRequest {
}
export interface SubmitTaskStateChangeCommandOutput extends SubmitTaskStateChangeResponse, __MetadataBearer {
}
/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to acknowledge
 * 			that a task changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitTaskStateChangeCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitTaskStateChangeCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new SubmitTaskStateChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitTaskStateChangeCommandInput} for command's `input` shape.
 * @see {@link SubmitTaskStateChangeCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SubmitTaskStateChangeCommand extends $Command<SubmitTaskStateChangeCommandInput, SubmitTaskStateChangeCommandOutput, ECSClientResolvedConfig> {
    readonly input: SubmitTaskStateChangeCommandInput;
    constructor(input: SubmitTaskStateChangeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SubmitTaskStateChangeCommandInput, SubmitTaskStateChangeCommandOutput>;
    private serialize;
    private deserialize;
}

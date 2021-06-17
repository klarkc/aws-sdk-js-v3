import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { SubmitContainerStateChangeRequest, SubmitContainerStateChangeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SubmitContainerStateChangeCommandInput extends SubmitContainerStateChangeRequest {
}
export interface SubmitContainerStateChangeCommandOutput extends SubmitContainerStateChangeResponse, __MetadataBearer {
}
/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to
 * 			acknowledge that a container changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitContainerStateChangeCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitContainerStateChangeCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new SubmitContainerStateChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitContainerStateChangeCommandInput} for command's `input` shape.
 * @see {@link SubmitContainerStateChangeCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SubmitContainerStateChangeCommand extends $Command<SubmitContainerStateChangeCommandInput, SubmitContainerStateChangeCommandOutput, ECSClientResolvedConfig> {
    readonly input: SubmitContainerStateChangeCommandInput;
    constructor(input: SubmitContainerStateChangeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SubmitContainerStateChangeCommandInput, SubmitContainerStateChangeCommandOutput>;
    private serialize;
    private deserialize;
}

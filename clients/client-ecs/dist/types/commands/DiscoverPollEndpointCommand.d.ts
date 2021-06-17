import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DiscoverPollEndpointRequest, DiscoverPollEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DiscoverPollEndpointCommandInput extends DiscoverPollEndpointRequest {
}
export interface DiscoverPollEndpointCommandOutput extends DiscoverPollEndpointResponse, __MetadataBearer {
}
/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Returns an endpoint for
 * 			the Amazon ECS agent to poll for updates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DiscoverPollEndpointCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DiscoverPollEndpointCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DiscoverPollEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DiscoverPollEndpointCommandInput} for command's `input` shape.
 * @see {@link DiscoverPollEndpointCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DiscoverPollEndpointCommand extends $Command<DiscoverPollEndpointCommandInput, DiscoverPollEndpointCommandOutput, ECSClientResolvedConfig> {
    readonly input: DiscoverPollEndpointCommandInput;
    constructor(input: DiscoverPollEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DiscoverPollEndpointCommandInput, DiscoverPollEndpointCommandOutput>;
    private serialize;
    private deserialize;
}

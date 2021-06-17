import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerRequest, GetLoadBalancerResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLoadBalancerCommandInput extends GetLoadBalancerRequest {
}
export interface GetLoadBalancerCommandOutput extends GetLoadBalancerResult, __MetadataBearer {
}
/**
 * <p>Returns information about the specified Lightsail load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLoadBalancerCommand extends $Command<GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetLoadBalancerCommandInput;
    constructor(input: GetLoadBalancerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}

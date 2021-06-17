import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateTrafficPolicyRequest, CreateTrafficPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTrafficPolicyCommandInput extends CreateTrafficPolicyRequest {
}
export interface CreateTrafficPolicyCommandOutput extends CreateTrafficPolicyResponse, __MetadataBearer {
}
/**
 * <p>Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or
 * 			one subdomain name (such as www.example.com).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTrafficPolicyCommand extends $Command<CreateTrafficPolicyCommandInput, CreateTrafficPolicyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateTrafficPolicyCommandInput;
    constructor(input: CreateTrafficPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrafficPolicyCommandInput, CreateTrafficPolicyCommandOutput>;
    private serialize;
    private deserialize;
}

import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateTrafficPolicyInstanceRequest, CreateTrafficPolicyInstanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTrafficPolicyInstanceCommandInput extends CreateTrafficPolicyInstanceRequest {
}
export interface CreateTrafficPolicyInstanceCommandOutput extends CreateTrafficPolicyInstanceResponse, __MetadataBearer {
}
/**
 * <p>Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version.
 * 			In addition, <code>CreateTrafficPolicyInstance</code> associates the resource record sets with a specified domain name (such as example.com) or
 * 			subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets
 * 			that <code>CreateTrafficPolicyInstance</code> created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTrafficPolicyInstanceCommand extends $Command<CreateTrafficPolicyInstanceCommandInput, CreateTrafficPolicyInstanceCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateTrafficPolicyInstanceCommandInput;
    constructor(input: CreateTrafficPolicyInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrafficPolicyInstanceCommandInput, CreateTrafficPolicyInstanceCommandOutput>;
    private serialize;
    private deserialize;
}

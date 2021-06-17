import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateTrafficPolicyVersionRequest, CreateTrafficPolicyVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTrafficPolicyVersionCommandInput extends CreateTrafficPolicyVersionRequest {
}
export interface CreateTrafficPolicyVersionCommandOutput extends CreateTrafficPolicyVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the
 * 			traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create
 * 			multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can
 * 			create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new
 * 			traffic policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyVersionCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyVersionCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateTrafficPolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTrafficPolicyVersionCommand extends $Command<CreateTrafficPolicyVersionCommandInput, CreateTrafficPolicyVersionCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateTrafficPolicyVersionCommandInput;
    constructor(input: CreateTrafficPolicyVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrafficPolicyVersionCommandInput, CreateTrafficPolicyVersionCommandOutput>;
    private serialize;
    private deserialize;
}

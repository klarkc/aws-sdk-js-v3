import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { GetContactReachabilityStatusRequest, GetContactReachabilityStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContactReachabilityStatusCommandInput extends GetContactReachabilityStatusRequest {
}
export interface GetContactReachabilityStatusCommandOutput extends GetContactReachabilityStatusResponse, __MetadataBearer {
}
/**
 * <p>For operations that require confirmation that the email address for the registrant contact is valid,
 * 			such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p>
 * 		       <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetContactReachabilityStatusCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetContactReachabilityStatusCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new GetContactReachabilityStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactReachabilityStatusCommandInput} for command's `input` shape.
 * @see {@link GetContactReachabilityStatusCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContactReachabilityStatusCommand extends $Command<GetContactReachabilityStatusCommandInput, GetContactReachabilityStatusCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: GetContactReachabilityStatusCommandInput;
    constructor(input: GetContactReachabilityStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContactReachabilityStatusCommandInput, GetContactReachabilityStatusCommandOutput>;
    private serialize;
    private deserialize;
}

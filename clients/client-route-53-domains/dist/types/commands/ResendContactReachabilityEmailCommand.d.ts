import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ResendContactReachabilityEmailRequest, ResendContactReachabilityEmailResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResendContactReachabilityEmailCommandInput extends ResendContactReachabilityEmailRequest {
}
export interface ResendContactReachabilityEmailCommandOutput extends ResendContactReachabilityEmailResponse, __MetadataBearer {
}
/**
 * <p>For operations that require confirmation that the email address for the registrant contact is valid,
 * 			such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ResendContactReachabilityEmailCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ResendContactReachabilityEmailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new ResendContactReachabilityEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResendContactReachabilityEmailCommandInput} for command's `input` shape.
 * @see {@link ResendContactReachabilityEmailCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResendContactReachabilityEmailCommand extends $Command<ResendContactReachabilityEmailCommandInput, ResendContactReachabilityEmailCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: ResendContactReachabilityEmailCommandInput;
    constructor(input: ResendContactReachabilityEmailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResendContactReachabilityEmailCommandInput, ResendContactReachabilityEmailCommandOutput>;
    private serialize;
    private deserialize;
}

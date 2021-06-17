import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DisableHostedZoneDNSSECRequest, DisableHostedZoneDNSSECResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableHostedZoneDNSSECCommandInput extends DisableHostedZoneDNSSECRequest {
}
export interface DisableHostedZoneDNSSECCommandOutput extends DisableHostedZoneDNSSECResponse, __MetadataBearer {
}
/**
 * <p>Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any key-signing keys (KSKs)
 * 		that are active in the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DisableHostedZoneDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DisableHostedZoneDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DisableHostedZoneDNSSECCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableHostedZoneDNSSECCommandInput} for command's `input` shape.
 * @see {@link DisableHostedZoneDNSSECCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableHostedZoneDNSSECCommand extends $Command<DisableHostedZoneDNSSECCommandInput, DisableHostedZoneDNSSECCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DisableHostedZoneDNSSECCommandInput;
    constructor(input: DisableHostedZoneDNSSECCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableHostedZoneDNSSECCommandInput, DisableHostedZoneDNSSECCommandOutput>;
    private serialize;
    private deserialize;
}

import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { EnableHostedZoneDNSSECRequest, EnableHostedZoneDNSSECResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableHostedZoneDNSSECCommandInput extends EnableHostedZoneDNSSECRequest {
}
export interface EnableHostedZoneDNSSECCommandOutput extends EnableHostedZoneDNSSECResponse, __MetadataBearer {
}
/**
 * <p>Enables DNSSEC signing in a specific hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, EnableHostedZoneDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, EnableHostedZoneDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new EnableHostedZoneDNSSECCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableHostedZoneDNSSECCommandInput} for command's `input` shape.
 * @see {@link EnableHostedZoneDNSSECCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableHostedZoneDNSSECCommand extends $Command<EnableHostedZoneDNSSECCommandInput, EnableHostedZoneDNSSECCommandOutput, Route53ClientResolvedConfig> {
    readonly input: EnableHostedZoneDNSSECCommandInput;
    constructor(input: EnableHostedZoneDNSSECCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableHostedZoneDNSSECCommandInput, EnableHostedZoneDNSSECCommandOutput>;
    private serialize;
    private deserialize;
}

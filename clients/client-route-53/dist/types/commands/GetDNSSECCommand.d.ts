import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetDNSSECRequest, GetDNSSECResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDNSSECCommandInput extends GetDNSSECRequest {
}
export interface GetDNSSECCommandOutput extends GetDNSSECResponse, __MetadataBearer {
}
/**
 * <p>Returns information about DNSSEC for a specific hosted zone, including the key-signing keys (KSKs) in the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetDNSSECCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDNSSECCommandInput} for command's `input` shape.
 * @see {@link GetDNSSECCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDNSSECCommand extends $Command<GetDNSSECCommandInput, GetDNSSECCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetDNSSECCommandInput;
    constructor(input: GetDNSSECCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDNSSECCommandInput, GetDNSSECCommandOutput>;
    private serialize;
    private deserialize;
}

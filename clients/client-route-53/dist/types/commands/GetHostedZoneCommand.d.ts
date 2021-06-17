import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHostedZoneRequest, GetHostedZoneResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetHostedZoneCommandInput extends GetHostedZoneRequest {
}
export interface GetHostedZoneCommandOutput extends GetHostedZoneResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a specified hosted zone including the four name servers assigned to the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostedZoneCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetHostedZoneCommand extends $Command<GetHostedZoneCommandInput, GetHostedZoneCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHostedZoneCommandInput;
    constructor(input: GetHostedZoneCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHostedZoneCommandInput, GetHostedZoneCommandOutput>;
    private serialize;
    private deserialize;
}

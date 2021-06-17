import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHostedZoneCountRequest, GetHostedZoneCountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetHostedZoneCountCommandInput extends GetHostedZoneCountRequest {
}
export interface GetHostedZoneCountCommandOutput extends GetHostedZoneCountResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the number of hosted zones that are associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHostedZoneCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostedZoneCountCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetHostedZoneCountCommand extends $Command<GetHostedZoneCountCommandInput, GetHostedZoneCountCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHostedZoneCountCommandInput;
    constructor(input: GetHostedZoneCountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHostedZoneCountCommandInput, GetHostedZoneCountCommandOutput>;
    private serialize;
    private deserialize;
}

import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHealthCheckLastFailureReasonRequest, GetHealthCheckLastFailureReasonResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetHealthCheckLastFailureReasonCommandInput extends GetHealthCheckLastFailureReasonRequest {
}
export interface GetHealthCheckLastFailureReasonCommandOutput extends GetHealthCheckLastFailureReasonResponse, __MetadataBearer {
}
/**
 * <p>Gets the reason that a specified health check failed most recently.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckLastFailureReasonCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckLastFailureReasonCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHealthCheckLastFailureReasonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHealthCheckLastFailureReasonCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckLastFailureReasonCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetHealthCheckLastFailureReasonCommand extends $Command<GetHealthCheckLastFailureReasonCommandInput, GetHealthCheckLastFailureReasonCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHealthCheckLastFailureReasonCommandInput;
    constructor(input: GetHealthCheckLastFailureReasonCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHealthCheckLastFailureReasonCommandInput, GetHealthCheckLastFailureReasonCommandOutput>;
    private serialize;
    private deserialize;
}

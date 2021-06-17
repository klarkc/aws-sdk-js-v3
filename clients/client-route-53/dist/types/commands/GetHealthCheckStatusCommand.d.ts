import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHealthCheckStatusRequest, GetHealthCheckStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetHealthCheckStatusCommandInput extends GetHealthCheckStatusRequest {
}
export interface GetHealthCheckStatusCommandOutput extends GetHealthCheckStatusResponse, __MetadataBearer {
}
/**
 * <p>Gets status of a specified health check. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckStatusCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckStatusCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHealthCheckStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHealthCheckStatusCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckStatusCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetHealthCheckStatusCommand extends $Command<GetHealthCheckStatusCommandInput, GetHealthCheckStatusCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHealthCheckStatusCommandInput;
    constructor(input: GetHealthCheckStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHealthCheckStatusCommandInput, GetHealthCheckStatusCommandOutput>;
    private serialize;
    private deserialize;
}

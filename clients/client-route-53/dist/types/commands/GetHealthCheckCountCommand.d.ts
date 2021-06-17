import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHealthCheckCountRequest, GetHealthCheckCountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetHealthCheckCountCommandInput extends GetHealthCheckCountRequest {
}
export interface GetHealthCheckCountCommandOutput extends GetHealthCheckCountResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the number of health checks that are associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHealthCheckCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHealthCheckCountCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetHealthCheckCountCommand extends $Command<GetHealthCheckCountCommandInput, GetHealthCheckCountCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHealthCheckCountCommandInput;
    constructor(input: GetHealthCheckCountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHealthCheckCountCommandInput, GetHealthCheckCountCommandOutput>;
    private serialize;
    private deserialize;
}

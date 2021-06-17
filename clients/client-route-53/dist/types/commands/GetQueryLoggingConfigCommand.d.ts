import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetQueryLoggingConfigRequest, GetQueryLoggingConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetQueryLoggingConfigCommandInput extends GetQueryLoggingConfigRequest {
}
export interface GetQueryLoggingConfigCommandOutput extends GetQueryLoggingConfigResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a specified configuration for DNS query logging.</p>
 *
 * 		       <p>For more information about DNS query logs, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>
 * 			and
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetQueryLoggingConfigCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetQueryLoggingConfigCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetQueryLoggingConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueryLoggingConfigCommandInput} for command's `input` shape.
 * @see {@link GetQueryLoggingConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetQueryLoggingConfigCommand extends $Command<GetQueryLoggingConfigCommandInput, GetQueryLoggingConfigCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetQueryLoggingConfigCommandInput;
    constructor(input: GetQueryLoggingConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQueryLoggingConfigCommandInput, GetQueryLoggingConfigCommandOutput>;
    private serialize;
    private deserialize;
}

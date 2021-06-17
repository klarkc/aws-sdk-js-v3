import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteQueryLoggingConfigRequest, DeleteQueryLoggingConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteQueryLoggingConfigCommandInput extends DeleteQueryLoggingConfigRequest {
}
export interface DeleteQueryLoggingConfigCommandOutput extends DeleteQueryLoggingConfigResponse, __MetadataBearer {
}
/**
 * <p>Deletes a configuration for DNS query logging. If you delete a configuration, Amazon Route 53 stops sending query logs to CloudWatch Logs.
 * 			Route 53 doesn't delete any logs that are already in CloudWatch Logs.</p>
 *
 * 		       <p>For more information about DNS query logs, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteQueryLoggingConfigCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteQueryLoggingConfigCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteQueryLoggingConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueryLoggingConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteQueryLoggingConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteQueryLoggingConfigCommand extends $Command<DeleteQueryLoggingConfigCommandInput, DeleteQueryLoggingConfigCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteQueryLoggingConfigCommandInput;
    constructor(input: DeleteQueryLoggingConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteQueryLoggingConfigCommandInput, DeleteQueryLoggingConfigCommandOutput>;
    private serialize;
    private deserialize;
}

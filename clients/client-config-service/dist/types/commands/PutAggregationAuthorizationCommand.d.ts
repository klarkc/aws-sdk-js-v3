import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutAggregationAuthorizationRequest, PutAggregationAuthorizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAggregationAuthorizationCommandInput extends PutAggregationAuthorizationRequest {
}
export interface PutAggregationAuthorizationCommandOutput extends PutAggregationAuthorizationResponse, __MetadataBearer {
}
/**
 * <p>Authorizes the aggregator account and region to collect data
 * 			from the source account and region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutAggregationAuthorizationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutAggregationAuthorizationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutAggregationAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAggregationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link PutAggregationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAggregationAuthorizationCommand extends $Command<PutAggregationAuthorizationCommandInput, PutAggregationAuthorizationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutAggregationAuthorizationCommandInput;
    constructor(input: PutAggregationAuthorizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAggregationAuthorizationCommandInput, PutAggregationAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}

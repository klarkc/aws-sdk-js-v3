import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetAggregateResourceConfigRequest, GetAggregateResourceConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAggregateResourceConfigCommandInput extends GetAggregateResourceConfigRequest {
}
export interface GetAggregateResourceConfigCommandOutput extends GetAggregateResourceConfigResponse, __MetadataBearer {
}
/**
 * <p>Returns configuration item that is aggregated for your specific resource in a specific source account and region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetAggregateResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAggregateResourceConfigCommandInput} for command's `input` shape.
 * @see {@link GetAggregateResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAggregateResourceConfigCommand extends $Command<GetAggregateResourceConfigCommandInput, GetAggregateResourceConfigCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetAggregateResourceConfigCommandInput;
    constructor(input: GetAggregateResourceConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAggregateResourceConfigCommandInput, GetAggregateResourceConfigCommandOutput>;
    private serialize;
    private deserialize;
}

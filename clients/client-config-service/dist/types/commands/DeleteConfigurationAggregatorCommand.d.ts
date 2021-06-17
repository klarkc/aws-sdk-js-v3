import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteConfigurationAggregatorRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteConfigurationAggregatorCommandInput extends DeleteConfigurationAggregatorRequest {
}
export interface DeleteConfigurationAggregatorCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified configuration aggregator and the
 * 			aggregated data associated with the aggregator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConfigurationAggregatorCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConfigurationAggregatorCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteConfigurationAggregatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationAggregatorCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationAggregatorCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteConfigurationAggregatorCommand extends $Command<DeleteConfigurationAggregatorCommandInput, DeleteConfigurationAggregatorCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteConfigurationAggregatorCommandInput;
    constructor(input: DeleteConfigurationAggregatorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConfigurationAggregatorCommandInput, DeleteConfigurationAggregatorCommandOutput>;
    private serialize;
    private deserialize;
}

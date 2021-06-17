import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteAggregationAuthorizationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAggregationAuthorizationCommandInput extends DeleteAggregationAuthorizationRequest {
}
export interface DeleteAggregationAuthorizationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the authorization granted to the specified
 * 			configuration aggregator account in a specified region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteAggregationAuthorizationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteAggregationAuthorizationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteAggregationAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAggregationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteAggregationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAggregationAuthorizationCommand extends $Command<DeleteAggregationAuthorizationCommandInput, DeleteAggregationAuthorizationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteAggregationAuthorizationCommandInput;
    constructor(input: DeleteAggregationAuthorizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAggregationAuthorizationCommandInput, DeleteAggregationAuthorizationCommandOutput>;
    private serialize;
    private deserialize;
}

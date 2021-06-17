import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteRecommenderConfigurationRequest, DeleteRecommenderConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRecommenderConfigurationCommandInput extends DeleteRecommenderConfigurationRequest {
}
export interface DeleteRecommenderConfigurationCommandOutput extends DeleteRecommenderConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Deletes an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRecommenderConfigurationCommand extends $Command<DeleteRecommenderConfigurationCommandInput, DeleteRecommenderConfigurationCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteRecommenderConfigurationCommandInput;
    constructor(input: DeleteRecommenderConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRecommenderConfigurationCommandInput, DeleteRecommenderConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}

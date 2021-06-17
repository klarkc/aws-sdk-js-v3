import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateClusterConfigurationRequest, UpdateClusterConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateClusterConfigurationCommandInput extends UpdateClusterConfigurationRequest {
}
export interface UpdateClusterConfigurationCommandOutput extends UpdateClusterConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Updates the cluster with the configuration that is specified in the request body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateClusterConfigurationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateClusterConfigurationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateClusterConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateClusterConfigurationCommand extends $Command<UpdateClusterConfigurationCommandInput, UpdateClusterConfigurationCommandOutput, KafkaClientResolvedConfig> {
    readonly input: UpdateClusterConfigurationCommandInput;
    constructor(input: UpdateClusterConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateClusterConfigurationCommandInput, UpdateClusterConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}

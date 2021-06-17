import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateMonitoringRequest, UpdateMonitoringResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMonitoringCommandInput extends UpdateMonitoringRequest {
}
export interface UpdateMonitoringCommandOutput extends UpdateMonitoringResponse, __MetadataBearer {
}
/**
 * <p>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateMonitoringCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateMonitoringCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateMonitoringCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMonitoringCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitoringCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMonitoringCommand extends $Command<UpdateMonitoringCommandInput, UpdateMonitoringCommandOutput, KafkaClientResolvedConfig> {
    readonly input: UpdateMonitoringCommandInput;
    constructor(input: UpdateMonitoringCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMonitoringCommandInput, UpdateMonitoringCommandOutput>;
    private serialize;
    private deserialize;
}

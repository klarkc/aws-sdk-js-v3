import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateClusterKafkaVersionRequest, UpdateClusterKafkaVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateClusterKafkaVersionCommandInput extends UpdateClusterKafkaVersionRequest {
}
export interface UpdateClusterKafkaVersionCommandOutput extends UpdateClusterKafkaVersionResponse, __MetadataBearer {
}
/**
 * <p>Updates the Apache Kafka version for the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateClusterKafkaVersionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateClusterKafkaVersionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateClusterKafkaVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterKafkaVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterKafkaVersionCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateClusterKafkaVersionCommand extends $Command<UpdateClusterKafkaVersionCommandInput, UpdateClusterKafkaVersionCommandOutput, KafkaClientResolvedConfig> {
    readonly input: UpdateClusterKafkaVersionCommandInput;
    constructor(input: UpdateClusterKafkaVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateClusterKafkaVersionCommandInput, UpdateClusterKafkaVersionCommandOutput>;
    private serialize;
    private deserialize;
}

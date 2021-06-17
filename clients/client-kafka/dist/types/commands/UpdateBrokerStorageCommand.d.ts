import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateBrokerStorageRequest, UpdateBrokerStorageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateBrokerStorageCommandInput extends UpdateBrokerStorageRequest {
}
export interface UpdateBrokerStorageCommandOutput extends UpdateBrokerStorageResponse, __MetadataBearer {
}
/**
 * <p>Updates the EBS storage associated with MSK brokers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerStorageCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerStorageCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateBrokerStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBrokerStorageCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerStorageCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBrokerStorageCommand extends $Command<UpdateBrokerStorageCommandInput, UpdateBrokerStorageCommandOutput, KafkaClientResolvedConfig> {
    readonly input: UpdateBrokerStorageCommandInput;
    constructor(input: UpdateBrokerStorageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBrokerStorageCommandInput, UpdateBrokerStorageCommandOutput>;
    private serialize;
    private deserialize;
}

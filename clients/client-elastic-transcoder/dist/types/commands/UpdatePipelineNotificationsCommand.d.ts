import { ElasticTranscoderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticTranscoderClient";
import { UpdatePipelineNotificationsRequest, UpdatePipelineNotificationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePipelineNotificationsCommandInput extends UpdatePipelineNotificationsRequest {
}
export interface UpdatePipelineNotificationsCommandOutput extends UpdatePipelineNotificationsResponse, __MetadataBearer {
}
/**
 * <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p>
 *         <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, UpdatePipelineNotificationsCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, UpdatePipelineNotificationsCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new UpdatePipelineNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineNotificationsCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineNotificationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePipelineNotificationsCommand extends $Command<UpdatePipelineNotificationsCommandInput, UpdatePipelineNotificationsCommandOutput, ElasticTranscoderClientResolvedConfig> {
    readonly input: UpdatePipelineNotificationsCommandInput;
    constructor(input: UpdatePipelineNotificationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticTranscoderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePipelineNotificationsCommandInput, UpdatePipelineNotificationsCommandOutput>;
    private serialize;
    private deserialize;
}

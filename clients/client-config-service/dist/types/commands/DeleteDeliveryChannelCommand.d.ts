import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteDeliveryChannelRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDeliveryChannelCommandInput extends DeleteDeliveryChannelRequest {
}
export interface DeleteDeliveryChannelCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the delivery channel.</p>
 * 		       <p>Before you can delete the delivery channel, you must stop the
 * 			configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteDeliveryChannelCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteDeliveryChannelCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteDeliveryChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeliveryChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliveryChannelCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDeliveryChannelCommand extends $Command<DeleteDeliveryChannelCommandInput, DeleteDeliveryChannelCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteDeliveryChannelCommandInput;
    constructor(input: DeleteDeliveryChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeliveryChannelCommandInput, DeleteDeliveryChannelCommandOutput>;
    private serialize;
    private deserialize;
}

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { ListNotificationChannelsRequest, ListNotificationChannelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListNotificationChannelsCommandInput extends ListNotificationChannelsRequest {
}
export interface ListNotificationChannelsCommandOutput extends ListNotificationChannelsResponse, __MetadataBearer {
}
/**
 * <p>
 *    		Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when
 *    		DevOps Guru generates an insight that contains information about how to improve your operations. The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS).
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListNotificationChannelsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListNotificationChannelsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new ListNotificationChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotificationChannelsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationChannelsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListNotificationChannelsCommand extends $Command<ListNotificationChannelsCommandInput, ListNotificationChannelsCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: ListNotificationChannelsCommandInput;
    constructor(input: ListNotificationChannelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNotificationChannelsCommandInput, ListNotificationChannelsCommandOutput>;
    private serialize;
    private deserialize;
}

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetNotificationChannelRequest, GetNotificationChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetNotificationChannelCommandInput extends GetNotificationChannelRequest {
}
export interface GetNotificationChannelCommandOutput extends GetNotificationChannelResponse, __MetadataBearer {
}
/**
 * <p>Information
 *       about the Amazon Simple Notification Service (SNS) topic that is used to
 *       record AWS Firewall Manager SNS logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link GetNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetNotificationChannelCommand extends $Command<GetNotificationChannelCommandInput, GetNotificationChannelCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetNotificationChannelCommandInput;
    constructor(input: GetNotificationChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNotificationChannelCommandInput, GetNotificationChannelCommandOutput>;
    private serialize;
    private deserialize;
}

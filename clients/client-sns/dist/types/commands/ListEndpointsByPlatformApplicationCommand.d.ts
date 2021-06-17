import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListEndpointsByPlatformApplicationInput, ListEndpointsByPlatformApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEndpointsByPlatformApplicationCommandInput extends ListEndpointsByPlatformApplicationInput {
}
export interface ListEndpointsByPlatformApplicationCommandOutput extends ListEndpointsByPlatformApplicationResponse, __MetadataBearer {
}
/**
 * <p>Lists the endpoints and endpoint attributes for devices in a supported push
 *             notification service, such as GCM (Firebase Cloud Messaging) and APNS. The results for
 *                 <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited
 *             list of endpoints, up to 100. If additional records are available after the first page
 *             results, then a NextToken string will be returned. To receive the next page, you call
 *                 <code>ListEndpointsByPlatformApplication</code> again using the NextToken string
 *             received from the previous call. When there are no more records to return, NextToken
 *             will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *             Notifications</a>. </p>
 *         <p>This action is throttled at 30 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListEndpointsByPlatformApplicationCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListEndpointsByPlatformApplicationCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListEndpointsByPlatformApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEndpointsByPlatformApplicationCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsByPlatformApplicationCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEndpointsByPlatformApplicationCommand extends $Command<ListEndpointsByPlatformApplicationCommandInput, ListEndpointsByPlatformApplicationCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListEndpointsByPlatformApplicationCommandInput;
    constructor(input: ListEndpointsByPlatformApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEndpointsByPlatformApplicationCommandInput, ListEndpointsByPlatformApplicationCommandOutput>;
    private serialize;
    private deserialize;
}

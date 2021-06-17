import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeNotificationSubscriptionsRequest, DescribeNotificationSubscriptionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNotificationSubscriptionsCommandInput extends DescribeNotificationSubscriptionsRequest {
}
export interface DescribeNotificationSubscriptionsCommandOutput extends DescribeNotificationSubscriptionsResponse, __MetadataBearer {
}
/**
 * <p>Lists the specified notification subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeNotificationSubscriptionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeNotificationSubscriptionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeNotificationSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotificationSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNotificationSubscriptionsCommand extends $Command<DescribeNotificationSubscriptionsCommandInput, DescribeNotificationSubscriptionsCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DescribeNotificationSubscriptionsCommandInput;
    constructor(input: DescribeNotificationSubscriptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNotificationSubscriptionsCommandInput, DescribeNotificationSubscriptionsCommandOutput>;
    private serialize;
    private deserialize;
}

import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeSubscriptionRequest, DescribeSubscriptionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSubscriptionCommandInput extends DescribeSubscriptionRequest {
}
export interface DescribeSubscriptionCommandOutput extends DescribeSubscriptionResponse, __MetadataBearer {
}
/**
 * <p>Provides details about the AWS Shield Advanced subscription for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeSubscriptionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeSubscriptionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSubscriptionCommand extends $Command<DescribeSubscriptionCommandInput, DescribeSubscriptionCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DescribeSubscriptionCommandInput;
    constructor(input: DescribeSubscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSubscriptionCommandInput, DescribeSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}

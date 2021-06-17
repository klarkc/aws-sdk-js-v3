import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DescribePublishingDestinationRequest, DescribePublishingDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePublishingDestinationCommandInput extends DescribePublishingDestinationRequest {
}
export interface DescribePublishingDestinationCommandOutput extends DescribePublishingDestinationResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the publishing destination specified by the provided
 *         <code>destinationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DescribePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DescribePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DescribePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link DescribePublishingDestinationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePublishingDestinationCommand extends $Command<DescribePublishingDestinationCommandInput, DescribePublishingDestinationCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: DescribePublishingDestinationCommandInput;
    constructor(input: DescribePublishingDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePublishingDestinationCommandInput, DescribePublishingDestinationCommandOutput>;
    private serialize;
    private deserialize;
}

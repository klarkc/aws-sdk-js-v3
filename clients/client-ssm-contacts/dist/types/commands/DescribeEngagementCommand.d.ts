import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { DescribeEngagementRequest, DescribeEngagementResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEngagementCommandInput extends DescribeEngagementRequest {
}
export interface DescribeEngagementCommandOutput extends DescribeEngagementResult, __MetadataBearer {
}
/**
 * <p>Incident Manager uses engagements to engage contacts and escalation plans during an incident.
 *          Use this command to describe the engagement that occurred during an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DescribeEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DescribeEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DescribeEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEngagementCommandInput} for command's `input` shape.
 * @see {@link DescribeEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEngagementCommand extends $Command<DescribeEngagementCommandInput, DescribeEngagementCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: DescribeEngagementCommandInput;
    constructor(input: DescribeEngagementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEngagementCommandInput, DescribeEngagementCommandOutput>;
    private serialize;
    private deserialize;
}

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventDetailsRequest, DescribeEventDetailsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEventDetailsCommandInput extends DescribeEventDetailsRequest {
}
export interface DescribeEventDetailsCommandOutput extends DescribeEventDetailsResponse, __MetadataBearer {
}
/**
 * <p>Returns detailed information about one or more specified events. Information includes
 *          standard event data (AWS Region, service, and so on, as returned by <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a>), a detailed event description, and possible additional metadata
 *          that depends upon the nature of the event. Affected entities are not included. To retrieve
 *          the entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.</p>
 *          <p>If a specified event can't be retrieved, an error message is returned for that
 *          event.</p>
 *          <note>
 *             <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific AWS Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventDetailsCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventDetailsCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEventDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventDetailsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventDetailsCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEventDetailsCommand extends $Command<DescribeEventDetailsCommandInput, DescribeEventDetailsCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeEventDetailsCommandInput;
    constructor(input: DescribeEventDetailsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventDetailsCommandInput, DescribeEventDetailsCommandOutput>;
    private serialize;
    private deserialize;
}

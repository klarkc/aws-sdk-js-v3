import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeAffectedEntitiesRequest, DescribeAffectedEntitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAffectedEntitiesCommandInput extends DescribeAffectedEntitiesRequest {
}
export interface DescribeAffectedEntitiesCommandOutput extends DescribeAffectedEntitiesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of entities that have been affected by the specified events, based on the
 *          specified filter criteria. Entities can refer to individual customer resources, groups of
 *          customer resources, or any other construct, depending on the AWS service. Events that
 *          have impact beyond that of the affected entities, or where the extent of impact is unknown,
 *          include at least one entity indicating this.</p>
 *          <p>At least one event ARN is required. Results are sorted by the
 *             <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p>
 *
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *                </li>
 *                <li>
 *                   <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific AWS Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeAffectedEntitiesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeAffectedEntitiesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeAffectedEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAffectedEntitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeAffectedEntitiesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAffectedEntitiesCommand extends $Command<DescribeAffectedEntitiesCommandInput, DescribeAffectedEntitiesCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeAffectedEntitiesCommandInput;
    constructor(input: DescribeAffectedEntitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAffectedEntitiesCommandInput, DescribeAffectedEntitiesCommandOutput>;
    private serialize;
    private deserialize;
}

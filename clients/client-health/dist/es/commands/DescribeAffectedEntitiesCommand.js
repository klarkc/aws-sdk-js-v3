import { __extends } from "tslib";
import { DescribeAffectedEntitiesRequest, DescribeAffectedEntitiesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAffectedEntitiesCommand, serializeAws_json1_1DescribeAffectedEntitiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeAffectedEntitiesCommand = /** @class */ (function (_super) {
    __extends(DescribeAffectedEntitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAffectedEntitiesCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DescribeAffectedEntitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthClient";
        var commandName = "DescribeAffectedEntitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAffectedEntitiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAffectedEntitiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAffectedEntitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAffectedEntitiesCommand(input, context);
    };
    DescribeAffectedEntitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAffectedEntitiesCommand(output, context);
    };
    return DescribeAffectedEntitiesCommand;
}($Command));
export { DescribeAffectedEntitiesCommand };
//# sourceMappingURL=DescribeAffectedEntitiesCommand.js.map
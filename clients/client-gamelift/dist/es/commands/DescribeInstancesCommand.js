import { __extends } from "tslib";
import { DescribeInstancesInput, DescribeInstancesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeInstancesCommand, serializeAws_json1_1DescribeInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a fleet's instances, including instance IDs, connection
 *             data, and status. </p>
 *         <p>This operation can be used in the following ways:</p>
 *         <ul>
 *             <li>
 *                 <p>To get information on all instances that are deployed to a fleet's home
 *                     Region, provide the fleet ID.</p>
 *             </li>
 *             <li>
 *                 <p>To get information on all instances that are deployed to a fleet's remote
 *                     location, provide the fleet ID and location name.</p>
 *             </li>
 *             <li>
 *                 <p>To get information on a specific instance in a fleet, provide the fleet ID and
 *                     instance ID.</p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, an <code>Instance</code> object is returned for each requested
 *             instance. Instances are not returned in any particular order. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a>
 *          </p>
 *
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>DescribeInstances</a> |
 *                     <a>GetInstanceAccess</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeInstancesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeInstancesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstancesCommand(input) {
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
    DescribeInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstancesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstancesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeInstancesCommand(input, context);
    };
    DescribeInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeInstancesCommand(output, context);
    };
    return DescribeInstancesCommand;
}($Command));
export { DescribeInstancesCommand };
//# sourceMappingURL=DescribeInstancesCommand.js.map
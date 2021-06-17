import { __extends } from "tslib";
import { ListFleetsInput, ListFleetsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListFleetsCommand, serializeAws_json1_1ListFleetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a collection of fleet resources in an AWS Region. You can call this operation
 *             to get fleets in a previously selected default Region (see <a href="https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html">https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html</a>or specify a Region in your
 *             request. You can filter the result set to find only those fleets that are deployed with
 *             a specific build or script. For fleets that have multiple locations, this operation
 *             retrieves fleets based on their home Region only.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get a list of all fleets in a Region, don't provide a build or script
 *                     identifier. </p>
 *             </li>
 *             <li>
 *                 <p>To get a list of all fleets where a specific custom game build is deployed,
 *                     provide the build ID.</p>
 *             </li>
 *             <li>
 *                 <p>To get a list of all Realtime Servers fleets with a specific configuration script,
 *                     provide the script ID. </p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a list of fleet IDs that match the request parameters is returned. A
 *             NextToken value is also returned if there are more result pages to retrieve.</p>
 *         <note>
 *             <p>Fleet resources are not listed in a particular order.</p>
 *         </note>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleet</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>UpdateFleetAttributes</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleet</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListFleetsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListFleetsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ListFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFleetsCommandInput} for command's `input` shape.
 * @see {@link ListFleetsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFleetsCommand = /** @class */ (function (_super) {
    __extends(ListFleetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFleetsCommand(input) {
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
    ListFleetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "ListFleetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFleetsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListFleetsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFleetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListFleetsCommand(input, context);
    };
    ListFleetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListFleetsCommand(output, context);
    };
    return ListFleetsCommand;
}($Command));
export { ListFleetsCommand };
//# sourceMappingURL=ListFleetsCommand.js.map
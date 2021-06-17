import { __extends } from "tslib";
import { DescribeFleetLocationAttributesInput, DescribeFleetLocationAttributesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeFleetLocationAttributesCommand, serializeAws_json1_1DescribeFleetLocationAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information on a fleet's remote locations, including life-cycle status and
 *             any suspended fleet activity. </p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get data for specific locations, provide a fleet identifier and a list of
 *                     locations. Location data is returned in the order that it is requested. </p>
 *             </li>
 *             <li>
 *                 <p>To get data for all locations, provide a fleet identifier only. Location data
 *                     is returned in no particular order. </p>
 *             </li>
 *          </ul>
 *         <p>When requesting attributes for multiple locations, use the pagination parameters to
 *             retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>LocationAttributes</code> object is returned for each requested
 *             location. If the fleet does not have a requested location, no information is returned.
 *             This operation does not return the home Region. To get information on a fleet's home
 *             Region, call <code>DescribeFleetAttributes</code>.</p>
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
 *             <a>CreateFleetLocations</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetLocationCapacity</a> |
 *                     <a>DescribeFleetLocationUtilization</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetLocationAttributesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetLocationAttributesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetLocationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetLocationAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetLocationAttributesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFleetLocationAttributesCommand = /** @class */ (function (_super) {
    __extends(DescribeFleetLocationAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFleetLocationAttributesCommand(input) {
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
    DescribeFleetLocationAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeFleetLocationAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFleetLocationAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFleetLocationAttributesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFleetLocationAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeFleetLocationAttributesCommand(input, context);
    };
    DescribeFleetLocationAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeFleetLocationAttributesCommand(output, context);
    };
    return DescribeFleetLocationAttributesCommand;
}($Command));
export { DescribeFleetLocationAttributesCommand };
//# sourceMappingURL=DescribeFleetLocationAttributesCommand.js.map
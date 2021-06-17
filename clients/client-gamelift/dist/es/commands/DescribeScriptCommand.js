import { __extends } from "tslib";
import { DescribeScriptInput, DescribeScriptOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeScriptCommand, serializeAws_json1_1DescribeScriptCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves properties for a Realtime script. </p>
 *         <p>To request a script record, specify the script ID. If successful, an object containing the script properties
 *         is returned.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateScript</a> |
 *                     <a>ListScripts</a> |
 *                     <a>DescribeScript</a> |
 *                     <a>UpdateScript</a> |
 *                     <a>DeleteScript</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeScriptCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeScriptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScriptCommandInput} for command's `input` shape.
 * @see {@link DescribeScriptCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScriptCommand = /** @class */ (function (_super) {
    __extends(DescribeScriptCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeScriptCommand(input) {
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
    DescribeScriptCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeScriptCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeScriptInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeScriptOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeScriptCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeScriptCommand(input, context);
    };
    DescribeScriptCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeScriptCommand(output, context);
    };
    return DescribeScriptCommand;
}($Command));
export { DescribeScriptCommand };
//# sourceMappingURL=DescribeScriptCommand.js.map
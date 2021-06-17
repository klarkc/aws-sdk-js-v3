import { __extends } from "tslib";
import { GetTestGridSessionRequest, GetTestGridSessionResult } from "../models/models_0";
import { deserializeAws_json1_1GetTestGridSessionCommand, serializeAws_json1_1GetTestGridSessionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p>
 *          <ul>
 *             <li>
 *                <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p>
 *             </li>
 *             <li>
 *                <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p>
 *             </li>
 *          </ul>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetTestGridSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetTestGridSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetTestGridSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTestGridSessionCommandInput} for command's `input` shape.
 * @see {@link GetTestGridSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTestGridSessionCommand = /** @class */ (function (_super) {
    __extends(GetTestGridSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTestGridSessionCommand(input) {
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
    GetTestGridSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetTestGridSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTestGridSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTestGridSessionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTestGridSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTestGridSessionCommand(input, context);
    };
    GetTestGridSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTestGridSessionCommand(output, context);
    };
    return GetTestGridSessionCommand;
}($Command));
export { GetTestGridSessionCommand };
//# sourceMappingURL=GetTestGridSessionCommand.js.map
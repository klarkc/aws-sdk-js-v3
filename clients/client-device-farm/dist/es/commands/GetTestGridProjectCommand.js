import { __extends } from "tslib";
import { GetTestGridProjectRequest, GetTestGridProjectResult } from "../models/models_0";
import { deserializeAws_json1_1GetTestGridProjectCommand, serializeAws_json1_1GetTestGridProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a Selenium testing project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetTestGridProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link GetTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTestGridProjectCommand = /** @class */ (function (_super) {
    __extends(GetTestGridProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTestGridProjectCommand(input) {
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
    GetTestGridProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetTestGridProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTestGridProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTestGridProjectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTestGridProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTestGridProjectCommand(input, context);
    };
    GetTestGridProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTestGridProjectCommand(output, context);
    };
    return GetTestGridProjectCommand;
}($Command));
export { GetTestGridProjectCommand };
//# sourceMappingURL=GetTestGridProjectCommand.js.map
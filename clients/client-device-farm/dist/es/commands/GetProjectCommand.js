import { __extends } from "tslib";
import { GetProjectRequest, GetProjectResult } from "../models/models_0";
import { deserializeAws_json1_1GetProjectCommand, serializeAws_json1_1GetProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProjectCommandInput} for command's `input` shape.
 * @see {@link GetProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetProjectCommand = /** @class */ (function (_super) {
    __extends(GetProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetProjectCommand(input) {
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
    GetProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetProjectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetProjectCommand(input, context);
    };
    GetProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetProjectCommand(output, context);
    };
    return GetProjectCommand;
}($Command));
export { GetProjectCommand };
//# sourceMappingURL=GetProjectCommand.js.map
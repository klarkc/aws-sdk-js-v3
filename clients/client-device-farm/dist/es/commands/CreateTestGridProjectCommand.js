import { __extends } from "tslib";
import { CreateTestGridProjectRequest, CreateTestGridProjectResult } from "../models/models_0";
import { deserializeAws_json1_1CreateTestGridProjectCommand, serializeAws_json1_1CreateTestGridProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a>
 *          instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateTestGridProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link CreateTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTestGridProjectCommand = /** @class */ (function (_super) {
    __extends(CreateTestGridProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTestGridProjectCommand(input) {
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
    CreateTestGridProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "CreateTestGridProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTestGridProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTestGridProjectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTestGridProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTestGridProjectCommand(input, context);
    };
    CreateTestGridProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTestGridProjectCommand(output, context);
    };
    return CreateTestGridProjectCommand;
}($Command));
export { CreateTestGridProjectCommand };
//# sourceMappingURL=CreateTestGridProjectCommand.js.map
import { __extends } from "tslib";
import { CreateRobotApplicationVersionRequest, CreateRobotApplicationVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateRobotApplicationVersionCommand, serializeAws_restJson1CreateRobotApplicationVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a version of a robot application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateRobotApplicationVersionCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateRobotApplicationVersionCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateRobotApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRobotApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateRobotApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRobotApplicationVersionCommand = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRobotApplicationVersionCommand(input) {
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
    CreateRobotApplicationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CreateRobotApplicationVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRobotApplicationVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRobotApplicationVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRobotApplicationVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRobotApplicationVersionCommand(input, context);
    };
    CreateRobotApplicationVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRobotApplicationVersionCommand(output, context);
    };
    return CreateRobotApplicationVersionCommand;
}($Command));
export { CreateRobotApplicationVersionCommand };
//# sourceMappingURL=CreateRobotApplicationVersionCommand.js.map
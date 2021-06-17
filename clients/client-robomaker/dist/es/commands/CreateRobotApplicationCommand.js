import { __extends } from "tslib";
import { CreateRobotApplicationRequest, CreateRobotApplicationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateRobotApplicationCommand, serializeAws_restJson1CreateRobotApplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a robot application. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateRobotApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateRobotApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateRobotApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRobotApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateRobotApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRobotApplicationCommand = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRobotApplicationCommand(input) {
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
    CreateRobotApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CreateRobotApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRobotApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRobotApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRobotApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRobotApplicationCommand(input, context);
    };
    CreateRobotApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRobotApplicationCommand(output, context);
    };
    return CreateRobotApplicationCommand;
}($Command));
export { CreateRobotApplicationCommand };
//# sourceMappingURL=CreateRobotApplicationCommand.js.map
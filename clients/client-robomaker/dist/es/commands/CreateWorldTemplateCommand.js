import { __extends } from "tslib";
import { CreateWorldTemplateRequest, CreateWorldTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateWorldTemplateCommand, serializeAws_restJson1CreateWorldTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a world template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldTemplateCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldTemplateCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateWorldTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorldTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateWorldTemplateCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorldTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateWorldTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWorldTemplateCommand(input) {
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
    CreateWorldTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CreateWorldTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWorldTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWorldTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWorldTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateWorldTemplateCommand(input, context);
    };
    CreateWorldTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateWorldTemplateCommand(output, context);
    };
    return CreateWorldTemplateCommand;
}($Command));
export { CreateWorldTemplateCommand };
//# sourceMappingURL=CreateWorldTemplateCommand.js.map
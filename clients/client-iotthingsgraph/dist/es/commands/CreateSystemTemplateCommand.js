import { __extends } from "tslib";
import { CreateSystemTemplateRequest, CreateSystemTemplateResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateSystemTemplateCommand, serializeAws_json1_1CreateSystemTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a system. The system is validated against the entities in the
 *          latest version of the user's namespace unless another namespace version is specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, CreateSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, CreateSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new CreateSystemTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSystemTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateSystemTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSystemTemplateCommand(input) {
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
    CreateSystemTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "CreateSystemTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSystemTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSystemTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSystemTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateSystemTemplateCommand(input, context);
    };
    CreateSystemTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateSystemTemplateCommand(output, context);
    };
    return CreateSystemTemplateCommand;
}($Command));
export { CreateSystemTemplateCommand };
//# sourceMappingURL=CreateSystemTemplateCommand.js.map
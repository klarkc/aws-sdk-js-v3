import { __extends } from "tslib";
import { DeprecateSystemTemplateRequest, DeprecateSystemTemplateResponse } from "../models/models_0";
import { deserializeAws_json1_1DeprecateSystemTemplateCommand, serializeAws_json1_1DeprecateSystemTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deprecates the specified system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeprecateSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeprecateSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DeprecateSystemTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprecateSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link DeprecateSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeprecateSystemTemplateCommand = /** @class */ (function (_super) {
    __extends(DeprecateSystemTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeprecateSystemTemplateCommand(input) {
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
    DeprecateSystemTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "DeprecateSystemTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeprecateSystemTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeprecateSystemTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeprecateSystemTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeprecateSystemTemplateCommand(input, context);
    };
    DeprecateSystemTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeprecateSystemTemplateCommand(output, context);
    };
    return DeprecateSystemTemplateCommand;
}($Command));
export { DeprecateSystemTemplateCommand };
//# sourceMappingURL=DeprecateSystemTemplateCommand.js.map
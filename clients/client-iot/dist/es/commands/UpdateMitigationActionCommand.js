import { __extends } from "tslib";
import { UpdateMitigationActionRequest, UpdateMitigationActionResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateMitigationActionCommand, serializeAws_restJson1UpdateMitigationActionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the definition for the specified mitigation action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateMitigationActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMitigationActionCommandInput} for command's `input` shape.
 * @see {@link UpdateMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMitigationActionCommand = /** @class */ (function (_super) {
    __extends(UpdateMitigationActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMitigationActionCommand(input) {
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
    UpdateMitigationActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateMitigationActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMitigationActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMitigationActionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMitigationActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateMitigationActionCommand(input, context);
    };
    UpdateMitigationActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateMitigationActionCommand(output, context);
    };
    return UpdateMitigationActionCommand;
}($Command));
export { UpdateMitigationActionCommand };
//# sourceMappingURL=UpdateMitigationActionCommand.js.map
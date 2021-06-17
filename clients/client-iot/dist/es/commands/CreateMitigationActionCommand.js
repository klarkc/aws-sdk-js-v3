import { __extends } from "tslib";
import { CreateMitigationActionRequest, CreateMitigationActionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateMitigationActionCommand, serializeAws_restJson1CreateMitigationActionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateMitigationActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMitigationActionCommandInput} for command's `input` shape.
 * @see {@link CreateMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMitigationActionCommand = /** @class */ (function (_super) {
    __extends(CreateMitigationActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMitigationActionCommand(input) {
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
    CreateMitigationActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateMitigationActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMitigationActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMitigationActionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMitigationActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateMitigationActionCommand(input, context);
    };
    CreateMitigationActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateMitigationActionCommand(output, context);
    };
    return CreateMitigationActionCommand;
}($Command));
export { CreateMitigationActionCommand };
//# sourceMappingURL=CreateMitigationActionCommand.js.map
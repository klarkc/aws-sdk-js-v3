import { __extends } from "tslib";
import { CreateDetectorRequest, CreateDetectorResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDetectorCommand, serializeAws_restJson1CreateDetectorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a single Amazon GuardDuty detector. A detector is a resource that represents the
 *       GuardDuty service. To start using GuardDuty, you must create a detector in each Region where
 *       you enable the service. You can have only one detector per account per Region. All data
 *       sources are enabled in a new detector by default.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDetectorCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDetectorCommand = /** @class */ (function (_super) {
    __extends(CreateDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDetectorCommand(input) {
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
    CreateDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "CreateDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDetectorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDetectorCommand(input, context);
    };
    CreateDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDetectorCommand(output, context);
    };
    return CreateDetectorCommand;
}($Command));
export { CreateDetectorCommand };
//# sourceMappingURL=CreateDetectorCommand.js.map
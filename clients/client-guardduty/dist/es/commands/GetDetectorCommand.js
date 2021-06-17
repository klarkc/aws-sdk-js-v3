import { __extends } from "tslib";
import { GetDetectorRequest, GetDetectorResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDetectorCommand, serializeAws_restJson1GetDetectorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an Amazon GuardDuty detector specified by the detectorId.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDetectorCommandInput} for command's `input` shape.
 * @see {@link GetDetectorCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDetectorCommand = /** @class */ (function (_super) {
    __extends(GetDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDetectorCommand(input) {
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
    GetDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "GetDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDetectorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDetectorCommand(input, context);
    };
    GetDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDetectorCommand(output, context);
    };
    return GetDetectorCommand;
}($Command));
export { GetDetectorCommand };
//# sourceMappingURL=GetDetectorCommand.js.map
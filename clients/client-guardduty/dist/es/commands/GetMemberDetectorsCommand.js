import { __extends } from "tslib";
import { GetMemberDetectorsRequest, GetMemberDetectorsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMemberDetectorsCommand, serializeAws_restJson1GetMemberDetectorsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes which data sources are enabled for the member account's detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetMemberDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetMemberDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetMemberDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMemberDetectorsCommandInput} for command's `input` shape.
 * @see {@link GetMemberDetectorsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMemberDetectorsCommand = /** @class */ (function (_super) {
    __extends(GetMemberDetectorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMemberDetectorsCommand(input) {
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
    GetMemberDetectorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "GetMemberDetectorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMemberDetectorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMemberDetectorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMemberDetectorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMemberDetectorsCommand(input, context);
    };
    GetMemberDetectorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMemberDetectorsCommand(output, context);
    };
    return GetMemberDetectorsCommand;
}($Command));
export { GetMemberDetectorsCommand };
//# sourceMappingURL=GetMemberDetectorsCommand.js.map
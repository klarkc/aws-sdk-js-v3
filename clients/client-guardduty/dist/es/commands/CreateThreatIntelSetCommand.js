import { __extends } from "tslib";
import { CreateThreatIntelSetRequest, CreateThreatIntelSetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateThreatIntelSetCommand, serializeAws_restJson1CreateThreatIntelSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses.
 *       GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can
 *       use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link CreateThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateThreatIntelSetCommand = /** @class */ (function (_super) {
    __extends(CreateThreatIntelSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateThreatIntelSetCommand(input) {
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
    CreateThreatIntelSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "CreateThreatIntelSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateThreatIntelSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateThreatIntelSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateThreatIntelSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateThreatIntelSetCommand(input, context);
    };
    CreateThreatIntelSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateThreatIntelSetCommand(output, context);
    };
    return CreateThreatIntelSetCommand;
}($Command));
export { CreateThreatIntelSetCommand };
//# sourceMappingURL=CreateThreatIntelSetCommand.js.map
import { __extends } from "tslib";
import { CreateIPSetRequest, CreateIPSetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateIPSetCommand, serializeAws_restJson1CreateIPSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new IPSet, which is called a trusted IP list in the console user interface. An
 *       IPSet is a list of IP addresses that are trusted for secure communication with AWS
 *       infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are
 *       included in IPSets. Only users from the administrator account can use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateIPSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateIPSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIPSetCommandInput} for command's `input` shape.
 * @see {@link CreateIPSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateIPSetCommand = /** @class */ (function (_super) {
    __extends(CreateIPSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateIPSetCommand(input) {
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
    CreateIPSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "CreateIPSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateIPSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateIPSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateIPSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateIPSetCommand(input, context);
    };
    CreateIPSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateIPSetCommand(output, context);
    };
    return CreateIPSetCommand;
}($Command));
export { CreateIPSetCommand };
//# sourceMappingURL=CreateIPSetCommand.js.map
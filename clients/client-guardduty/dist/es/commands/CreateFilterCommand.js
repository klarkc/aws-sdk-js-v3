import { __extends } from "tslib";
import { CreateFilterRequest, CreateFilterResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateFilterCommand, serializeAws_restJson1CreateFilterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a filter using the specified finding criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateFilterCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFilterCommandInput} for command's `input` shape.
 * @see {@link CreateFilterCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFilterCommand = /** @class */ (function (_super) {
    __extends(CreateFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFilterCommand(input) {
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
    CreateFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "CreateFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateFilterCommand(input, context);
    };
    CreateFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateFilterCommand(output, context);
    };
    return CreateFilterCommand;
}($Command));
export { CreateFilterCommand };
//# sourceMappingURL=CreateFilterCommand.js.map
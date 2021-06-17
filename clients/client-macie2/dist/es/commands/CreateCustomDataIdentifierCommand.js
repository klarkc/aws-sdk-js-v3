import { __extends } from "tslib";
import { CreateCustomDataIdentifierRequest, CreateCustomDataIdentifierResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCustomDataIdentifierCommand, serializeAws_restJson1CreateCustomDataIdentifierCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates and defines the criteria and other settings for a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new CreateCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDataIdentifierCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCustomDataIdentifierCommand = /** @class */ (function (_super) {
    __extends(CreateCustomDataIdentifierCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCustomDataIdentifierCommand(input) {
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
    CreateCustomDataIdentifierCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "CreateCustomDataIdentifierCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCustomDataIdentifierRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCustomDataIdentifierResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCustomDataIdentifierCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCustomDataIdentifierCommand(input, context);
    };
    CreateCustomDataIdentifierCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCustomDataIdentifierCommand(output, context);
    };
    return CreateCustomDataIdentifierCommand;
}($Command));
export { CreateCustomDataIdentifierCommand };
//# sourceMappingURL=CreateCustomDataIdentifierCommand.js.map
import { __extends } from "tslib";
import { UpdatePrimaryEmailAddressRequest, UpdatePrimaryEmailAddressResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdatePrimaryEmailAddressCommand, serializeAws_json1_1UpdatePrimaryEmailAddressCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the primary email for a user, group, or resource. The current email is moved
 *          into the list of aliases (or swapped between an existing alias and the current primary
 *          email), and the email provided in the input is promoted as the primary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdatePrimaryEmailAddressCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdatePrimaryEmailAddressCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new UpdatePrimaryEmailAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePrimaryEmailAddressCommandInput} for command's `input` shape.
 * @see {@link UpdatePrimaryEmailAddressCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePrimaryEmailAddressCommand = /** @class */ (function (_super) {
    __extends(UpdatePrimaryEmailAddressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePrimaryEmailAddressCommand(input) {
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
    UpdatePrimaryEmailAddressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "UpdatePrimaryEmailAddressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePrimaryEmailAddressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePrimaryEmailAddressResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePrimaryEmailAddressCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePrimaryEmailAddressCommand(input, context);
    };
    UpdatePrimaryEmailAddressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePrimaryEmailAddressCommand(output, context);
    };
    return UpdatePrimaryEmailAddressCommand;
}($Command));
export { UpdatePrimaryEmailAddressCommand };
//# sourceMappingURL=UpdatePrimaryEmailAddressCommand.js.map
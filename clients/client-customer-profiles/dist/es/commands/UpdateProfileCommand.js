import { __extends } from "tslib";
import { UpdateProfileRequest, UpdateProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateProfileCommand, serializeAws_restJson1UpdateProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the properties of a profile. The ProfileId is required for updating a customer
 *          profile.</p>
 *          <p>When calling the UpdateProfile API, specifying an empty string value means that any
 *          existing value will be removed. Not specifying a string value means that any value already
 *          there will be kept.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, UpdateProfileCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, UpdateProfileCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new UpdateProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateProfileCommand = /** @class */ (function (_super) {
    __extends(UpdateProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateProfileCommand(input) {
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
    UpdateProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "UpdateProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateProfileCommand(input, context);
    };
    UpdateProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateProfileCommand(output, context);
    };
    return UpdateProfileCommand;
}($Command));
export { UpdateProfileCommand };
//# sourceMappingURL=UpdateProfileCommand.js.map
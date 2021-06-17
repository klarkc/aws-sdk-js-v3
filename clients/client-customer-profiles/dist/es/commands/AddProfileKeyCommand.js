import { __extends } from "tslib";
import { AddProfileKeyRequest, AddProfileKeyResponse } from "../models/models_0";
import { deserializeAws_restJson1AddProfileKeyCommand, serializeAws_restJson1AddProfileKeyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a new key value with a specific profile, such as a Contact Trace Record (CTR)
 *          ContactId.</p>
 *          <p>A profile object can have a single unique key and any number of additional keys that can
 *          be used to identify the profile that it belongs to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, AddProfileKeyCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, AddProfileKeyCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new AddProfileKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddProfileKeyCommandInput} for command's `input` shape.
 * @see {@link AddProfileKeyCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddProfileKeyCommand = /** @class */ (function (_super) {
    __extends(AddProfileKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddProfileKeyCommand(input) {
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
    AddProfileKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "AddProfileKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddProfileKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddProfileKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddProfileKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddProfileKeyCommand(input, context);
    };
    AddProfileKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddProfileKeyCommand(output, context);
    };
    return AddProfileKeyCommand;
}($Command));
export { AddProfileKeyCommand };
//# sourceMappingURL=AddProfileKeyCommand.js.map
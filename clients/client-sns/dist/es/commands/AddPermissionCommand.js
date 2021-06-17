import { __extends } from "tslib";
import { AddPermissionInput } from "../models/models_0";
import { deserializeAws_queryAddPermissionCommand, serializeAws_queryAddPermissionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a statement to a topic's access control policy, granting access for the specified
 *             AWS accounts to the specified actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, AddPermissionCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, AddPermissionCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new AddPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddPermissionCommandInput} for command's `input` shape.
 * @see {@link AddPermissionCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddPermissionCommand = /** @class */ (function (_super) {
    __extends(AddPermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddPermissionCommand(input) {
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
    AddPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "AddPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddPermissionInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAddPermissionCommand(input, context);
    };
    AddPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAddPermissionCommand(output, context);
    };
    return AddPermissionCommand;
}($Command));
export { AddPermissionCommand };
//# sourceMappingURL=AddPermissionCommand.js.map
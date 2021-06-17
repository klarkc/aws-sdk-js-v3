import { __extends } from "tslib";
import { DeleteContactMethodRequest, DeleteContactMethodResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteContactMethodCommand, serializeAws_json1_1DeleteContactMethodCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a contact method.</p>
 *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
 *       You can add one email address and one mobile phone number contact method in each AWS Region.
 *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
 *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContactMethodCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteContactMethodCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteContactMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContactMethodCommandInput} for command's `input` shape.
 * @see {@link DeleteContactMethodCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteContactMethodCommand = /** @class */ (function (_super) {
    __extends(DeleteContactMethodCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteContactMethodCommand(input) {
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
    DeleteContactMethodCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteContactMethodCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteContactMethodRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteContactMethodResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteContactMethodCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteContactMethodCommand(input, context);
    };
    DeleteContactMethodCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteContactMethodCommand(output, context);
    };
    return DeleteContactMethodCommand;
}($Command));
export { DeleteContactMethodCommand };
//# sourceMappingURL=DeleteContactMethodCommand.js.map
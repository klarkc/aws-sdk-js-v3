import { __extends } from "tslib";
import { DeleteContactRequest, DeleteContactResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteContactCommand, serializeAws_json1_1DeleteContactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>To remove a contact from Incident Manager, you can delete the contact. Deleting a contact
 *          removes them from all escalation plans and related response plans. Deleting an escalation
 *          plan removes it from all related response plans. You will have to recreate the contact and
 *          its contact channels before you can use it again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeleteContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeleteContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DeleteContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContactCommandInput} for command's `input` shape.
 * @see {@link DeleteContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteContactCommand = /** @class */ (function (_super) {
    __extends(DeleteContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteContactCommand(input) {
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
    DeleteContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "DeleteContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteContactResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteContactCommand(input, context);
    };
    DeleteContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteContactCommand(output, context);
    };
    return DeleteContactCommand;
}($Command));
export { DeleteContactCommand };
//# sourceMappingURL=DeleteContactCommand.js.map
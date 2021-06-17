import { __extends } from "tslib";
import { UpdateContactRequest, UpdateContactResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateContactCommand, serializeAws_json1_1UpdateContactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the contact or escalation plan specified. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, UpdateContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, UpdateContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new UpdateContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContactCommandInput} for command's `input` shape.
 * @see {@link UpdateContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateContactCommand = /** @class */ (function (_super) {
    __extends(UpdateContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateContactCommand(input) {
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
    UpdateContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "UpdateContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateContactResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateContactCommand(input, context);
    };
    UpdateContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateContactCommand(output, context);
    };
    return UpdateContactCommand;
}($Command));
export { UpdateContactCommand };
//# sourceMappingURL=UpdateContactCommand.js.map
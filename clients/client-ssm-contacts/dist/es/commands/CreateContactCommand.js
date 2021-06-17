import { __extends } from "tslib";
import { CreateContactRequest, CreateContactResult } from "../models/models_0";
import { deserializeAws_json1_1CreateContactCommand, serializeAws_json1_1CreateContactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Contacts are either the contacts that Incident Manager engages during an incident or the
 *          escalation plans that Incident Manager uses to engage contacts in phases during an
 *          incident. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new CreateContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactCommandInput} for command's `input` shape.
 * @see {@link CreateContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateContactCommand = /** @class */ (function (_super) {
    __extends(CreateContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateContactCommand(input) {
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
    CreateContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "CreateContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateContactResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateContactCommand(input, context);
    };
    CreateContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateContactCommand(output, context);
    };
    return CreateContactCommand;
}($Command));
export { CreateContactCommand };
//# sourceMappingURL=CreateContactCommand.js.map
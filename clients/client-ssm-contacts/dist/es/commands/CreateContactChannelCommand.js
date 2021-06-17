import { __extends } from "tslib";
import { CreateContactChannelRequest, CreateContactChannelResult } from "../models/models_0";
import { deserializeAws_json1_1CreateContactChannelCommand, serializeAws_json1_1CreateContactChannelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A contact channel is the method that Incident Manager uses to engage your contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new CreateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactChannelCommandInput} for command's `input` shape.
 * @see {@link CreateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateContactChannelCommand = /** @class */ (function (_super) {
    __extends(CreateContactChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateContactChannelCommand(input) {
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
    CreateContactChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "CreateContactChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateContactChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateContactChannelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateContactChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateContactChannelCommand(input, context);
    };
    CreateContactChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateContactChannelCommand(output, context);
    };
    return CreateContactChannelCommand;
}($Command));
export { CreateContactChannelCommand };
//# sourceMappingURL=CreateContactChannelCommand.js.map
import { __extends } from "tslib";
import { GetContactChannelRequest, GetContactChannelResult } from "../models/models_0";
import { deserializeAws_json1_1GetContactChannelCommand, serializeAws_json1_1GetContactChannelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List details about a specific contact channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new GetContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactChannelCommandInput} for command's `input` shape.
 * @see {@link GetContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContactChannelCommand = /** @class */ (function (_super) {
    __extends(GetContactChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContactChannelCommand(input) {
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
    GetContactChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "GetContactChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContactChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContactChannelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContactChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContactChannelCommand(input, context);
    };
    GetContactChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContactChannelCommand(output, context);
    };
    return GetContactChannelCommand;
}($Command));
export { GetContactChannelCommand };
//# sourceMappingURL=GetContactChannelCommand.js.map
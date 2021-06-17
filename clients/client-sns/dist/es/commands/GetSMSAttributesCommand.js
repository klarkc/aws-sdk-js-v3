import { __extends } from "tslib";
import { GetSMSAttributesInput, GetSMSAttributesResponse } from "../models/models_0";
import { deserializeAws_queryGetSMSAttributesCommand, serializeAws_queryGetSMSAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the settings for sending SMS messages from your account.</p>
 *         <p>These settings are set with the <code>SetSMSAttributes</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSMSAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSMSAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetSMSAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSMSAttributesCommandInput} for command's `input` shape.
 * @see {@link GetSMSAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSMSAttributesCommand = /** @class */ (function (_super) {
    __extends(GetSMSAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSMSAttributesCommand(input) {
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
    GetSMSAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "GetSMSAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSMSAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetSMSAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSMSAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetSMSAttributesCommand(input, context);
    };
    GetSMSAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetSMSAttributesCommand(output, context);
    };
    return GetSMSAttributesCommand;
}($Command));
export { GetSMSAttributesCommand };
//# sourceMappingURL=GetSMSAttributesCommand.js.map
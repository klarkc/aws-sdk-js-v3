import { __extends } from "tslib";
import { GetAppRequest, GetAppResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAppCommand, serializeAws_json1_1GetAppCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve information about the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppCommandInput} for command's `input` shape.
 * @see {@link GetAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAppCommand = /** @class */ (function (_super) {
    __extends(GetAppCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAppCommand(input) {
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
    GetAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "GetAppCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAppRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAppResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAppCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAppCommand(input, context);
    };
    GetAppCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAppCommand(output, context);
    };
    return GetAppCommand;
}($Command));
export { GetAppCommand };
//# sourceMappingURL=GetAppCommand.js.map
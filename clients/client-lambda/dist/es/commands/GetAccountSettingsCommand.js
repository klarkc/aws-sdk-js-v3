import { __extends } from "tslib";
import { GetAccountSettingsRequest, GetAccountSettingsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAccountSettingsCommand, serializeAws_restJson1GetAccountSettingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetAccountSettingsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetAccountSettingsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccountSettingsCommand = /** @class */ (function (_super) {
    __extends(GetAccountSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccountSettingsCommand(input) {
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
    GetAccountSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetAccountSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccountSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccountSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccountSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAccountSettingsCommand(input, context);
    };
    GetAccountSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAccountSettingsCommand(output, context);
    };
    return GetAccountSettingsCommand;
}($Command));
export { GetAccountSettingsCommand };
//# sourceMappingURL=GetAccountSettingsCommand.js.map
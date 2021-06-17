import { __extends } from "tslib";
import { GetEnabledStandardsRequest, GetEnabledStandardsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetEnabledStandardsCommand, serializeAws_restJson1GetEnabledStandardsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the standards that are currently enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetEnabledStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetEnabledStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetEnabledStandardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnabledStandardsCommandInput} for command's `input` shape.
 * @see {@link GetEnabledStandardsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEnabledStandardsCommand = /** @class */ (function (_super) {
    __extends(GetEnabledStandardsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEnabledStandardsCommand(input) {
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
    GetEnabledStandardsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "GetEnabledStandardsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEnabledStandardsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEnabledStandardsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEnabledStandardsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetEnabledStandardsCommand(input, context);
    };
    GetEnabledStandardsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetEnabledStandardsCommand(output, context);
    };
    return GetEnabledStandardsCommand;
}($Command));
export { GetEnabledStandardsCommand };
//# sourceMappingURL=GetEnabledStandardsCommand.js.map
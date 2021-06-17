import { __extends } from "tslib";
import { GetGroupVersionRequest, GetGroupVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetGroupVersionCommand, serializeAws_restJson1GetGroupVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a group version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetGroupVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetGroupVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetGroupVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupVersionCommandInput} for command's `input` shape.
 * @see {@link GetGroupVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGroupVersionCommand = /** @class */ (function (_super) {
    __extends(GetGroupVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGroupVersionCommand(input) {
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
    GetGroupVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetGroupVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGroupVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGroupVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGroupVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetGroupVersionCommand(input, context);
    };
    GetGroupVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetGroupVersionCommand(output, context);
    };
    return GetGroupVersionCommand;
}($Command));
export { GetGroupVersionCommand };
//# sourceMappingURL=GetGroupVersionCommand.js.map
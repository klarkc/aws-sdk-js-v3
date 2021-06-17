import { __extends } from "tslib";
import { GetEnvironmentRequest, GetEnvironmentResponse } from "../models/models_0";
import { deserializeAws_restJson1GetEnvironmentCommand, serializeAws_restJson1GetEnvironmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the FinSpace environment object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const command = new GetEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEnvironmentCommand = /** @class */ (function (_super) {
    __extends(GetEnvironmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEnvironmentCommand(input) {
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
    GetEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FinspaceClient";
        var commandName = "GetEnvironmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEnvironmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEnvironmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEnvironmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetEnvironmentCommand(input, context);
    };
    GetEnvironmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetEnvironmentCommand(output, context);
    };
    return GetEnvironmentCommand;
}($Command));
export { GetEnvironmentCommand };
//# sourceMappingURL=GetEnvironmentCommand.js.map
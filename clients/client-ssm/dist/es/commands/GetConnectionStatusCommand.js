import { __extends } from "tslib";
import { GetConnectionStatusRequest, GetConnectionStatusResponse } from "../models/models_1";
import { deserializeAws_json1_1GetConnectionStatusCommand, serializeAws_json1_1GetConnectionStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the Session Manager connection status for an instance to determine whether it is running and
 *    ready to receive Session Manager connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetConnectionStatusCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetConnectionStatusCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetConnectionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectionStatusCommandInput} for command's `input` shape.
 * @see {@link GetConnectionStatusCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConnectionStatusCommand = /** @class */ (function (_super) {
    __extends(GetConnectionStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConnectionStatusCommand(input) {
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
    GetConnectionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetConnectionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConnectionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConnectionStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConnectionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetConnectionStatusCommand(input, context);
    };
    GetConnectionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetConnectionStatusCommand(output, context);
    };
    return GetConnectionStatusCommand;
}($Command));
export { GetConnectionStatusCommand };
//# sourceMappingURL=GetConnectionStatusCommand.js.map
import { __extends } from "tslib";
import { UnpeerVpcRequest, UnpeerVpcResult } from "../models/models_1";
import { deserializeAws_json1_1UnpeerVpcCommand, serializeAws_json1_1UnpeerVpcCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attempts to unpeer the Lightsail VPC from the user's default VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UnpeerVpcCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UnpeerVpcCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UnpeerVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnpeerVpcCommandInput} for command's `input` shape.
 * @see {@link UnpeerVpcCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnpeerVpcCommand = /** @class */ (function (_super) {
    __extends(UnpeerVpcCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnpeerVpcCommand(input) {
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
    UnpeerVpcCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "UnpeerVpcCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnpeerVpcRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UnpeerVpcResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnpeerVpcCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UnpeerVpcCommand(input, context);
    };
    UnpeerVpcCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UnpeerVpcCommand(output, context);
    };
    return UnpeerVpcCommand;
}($Command));
export { UnpeerVpcCommand };
//# sourceMappingURL=UnpeerVpcCommand.js.map
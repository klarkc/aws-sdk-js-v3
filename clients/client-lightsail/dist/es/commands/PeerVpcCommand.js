import { __extends } from "tslib";
import { PeerVpcRequest, PeerVpcResult } from "../models/models_1";
import { deserializeAws_json1_1PeerVpcCommand, serializeAws_json1_1PeerVpcCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Tries to peer the Lightsail VPC with the user's default VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, PeerVpcCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, PeerVpcCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new PeerVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PeerVpcCommandInput} for command's `input` shape.
 * @see {@link PeerVpcCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PeerVpcCommand = /** @class */ (function (_super) {
    __extends(PeerVpcCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PeerVpcCommand(input) {
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
    PeerVpcCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "PeerVpcCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PeerVpcRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PeerVpcResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PeerVpcCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PeerVpcCommand(input, context);
    };
    PeerVpcCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PeerVpcCommand(output, context);
    };
    return PeerVpcCommand;
}($Command));
export { PeerVpcCommand };
//# sourceMappingURL=PeerVpcCommand.js.map
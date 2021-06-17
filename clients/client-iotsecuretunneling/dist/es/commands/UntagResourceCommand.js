import { __extends } from "tslib";
import { UntagResourceRequest, UntagResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1UntagResourceCommand, serializeAws_json1_1UntagResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a tag from a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, UntagResourceCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, UntagResourceCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagResourceCommand = /** @class */ (function (_super) {
    __extends(UntagResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagResourceCommand(input) {
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
    UntagResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSecureTunnelingClient";
        var commandName = "UntagResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UntagResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UntagResourceCommand(input, context);
    };
    UntagResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UntagResourceCommand(output, context);
    };
    return UntagResourceCommand;
}($Command));
export { UntagResourceCommand };
//# sourceMappingURL=UntagResourceCommand.js.map
import { __extends } from "tslib";
import { DescribeMitigationActionRequest, DescribeMitigationActionResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeMitigationActionCommand, serializeAws_restJson1DescribeMitigationActionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a mitigation action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeMitigationActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMitigationActionCommandInput} for command's `input` shape.
 * @see {@link DescribeMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMitigationActionCommand = /** @class */ (function (_super) {
    __extends(DescribeMitigationActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMitigationActionCommand(input) {
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
    DescribeMitigationActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeMitigationActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMitigationActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMitigationActionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMitigationActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeMitigationActionCommand(input, context);
    };
    DescribeMitigationActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeMitigationActionCommand(output, context);
    };
    return DescribeMitigationActionCommand;
}($Command));
export { DescribeMitigationActionCommand };
//# sourceMappingURL=DescribeMitigationActionCommand.js.map
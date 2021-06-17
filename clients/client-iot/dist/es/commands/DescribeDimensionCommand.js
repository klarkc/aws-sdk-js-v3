import { __extends } from "tslib";
import { DescribeDimensionRequest, DescribeDimensionResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeDimensionCommand, serializeAws_restJson1DescribeDimensionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides details about a dimension that is defined in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeDimensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDimensionCommandInput} for command's `input` shape.
 * @see {@link DescribeDimensionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDimensionCommand = /** @class */ (function (_super) {
    __extends(DescribeDimensionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDimensionCommand(input) {
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
    DescribeDimensionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeDimensionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDimensionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDimensionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDimensionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDimensionCommand(input, context);
    };
    DescribeDimensionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDimensionCommand(output, context);
    };
    return DescribeDimensionCommand;
}($Command));
export { DescribeDimensionCommand };
//# sourceMappingURL=DescribeDimensionCommand.js.map
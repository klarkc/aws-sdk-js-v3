import { __extends } from "tslib";
import { DescribePlacementRequest, DescribePlacementResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribePlacementCommand, serializeAws_restJson1DescribePlacementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a placement in a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DescribePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DescribePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new DescribePlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlacementCommandInput} for command's `input` shape.
 * @see {@link DescribePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePlacementCommand = /** @class */ (function (_super) {
    __extends(DescribePlacementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePlacementCommand(input) {
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
    DescribePlacementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickProjectsClient";
        var commandName = "DescribePlacementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePlacementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePlacementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePlacementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribePlacementCommand(input, context);
    };
    DescribePlacementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribePlacementCommand(output, context);
    };
    return DescribePlacementCommand;
}($Command));
export { DescribePlacementCommand };
//# sourceMappingURL=DescribePlacementCommand.js.map
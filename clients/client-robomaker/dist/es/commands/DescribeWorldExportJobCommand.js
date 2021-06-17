import { __extends } from "tslib";
import { DescribeWorldExportJobRequest, DescribeWorldExportJobResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeWorldExportJobCommand, serializeAws_restJson1DescribeWorldExportJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a world export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldExportJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldExportJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeWorldExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorldExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldExportJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorldExportJobCommand = /** @class */ (function (_super) {
    __extends(DescribeWorldExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorldExportJobCommand(input) {
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
    DescribeWorldExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DescribeWorldExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorldExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorldExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorldExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeWorldExportJobCommand(input, context);
    };
    DescribeWorldExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeWorldExportJobCommand(output, context);
    };
    return DescribeWorldExportJobCommand;
}($Command));
export { DescribeWorldExportJobCommand };
//# sourceMappingURL=DescribeWorldExportJobCommand.js.map
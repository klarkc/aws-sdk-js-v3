import { __extends } from "tslib";
import { DescribeWorldGenerationJobRequest, DescribeWorldGenerationJobResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeWorldGenerationJobCommand, serializeAws_restJson1DescribeWorldGenerationJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a world generation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldGenerationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldGenerationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeWorldGenerationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorldGenerationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorldGenerationJobCommand = /** @class */ (function (_super) {
    __extends(DescribeWorldGenerationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorldGenerationJobCommand(input) {
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
    DescribeWorldGenerationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DescribeWorldGenerationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorldGenerationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorldGenerationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorldGenerationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeWorldGenerationJobCommand(input, context);
    };
    DescribeWorldGenerationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeWorldGenerationJobCommand(output, context);
    };
    return DescribeWorldGenerationJobCommand;
}($Command));
export { DescribeWorldGenerationJobCommand };
//# sourceMappingURL=DescribeWorldGenerationJobCommand.js.map
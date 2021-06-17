import { __extends } from "tslib";
import { DescribeWorldTemplateRequest, DescribeWorldTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeWorldTemplateCommand, serializeAws_restJson1DescribeWorldTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a world template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldTemplateCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldTemplateCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeWorldTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorldTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldTemplateCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorldTemplateCommand = /** @class */ (function (_super) {
    __extends(DescribeWorldTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorldTemplateCommand(input) {
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
    DescribeWorldTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DescribeWorldTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorldTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorldTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorldTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeWorldTemplateCommand(input, context);
    };
    DescribeWorldTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeWorldTemplateCommand(output, context);
    };
    return DescribeWorldTemplateCommand;
}($Command));
export { DescribeWorldTemplateCommand };
//# sourceMappingURL=DescribeWorldTemplateCommand.js.map
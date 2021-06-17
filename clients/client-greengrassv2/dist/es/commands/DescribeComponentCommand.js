import { __extends } from "tslib";
import { DescribeComponentRequest, DescribeComponentResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeComponentCommand, serializeAws_restJson1DescribeComponentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves metadata for a version of a component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, DescribeComponentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, DescribeComponentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new DescribeComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeComponentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeComponentCommand = /** @class */ (function (_super) {
    __extends(DescribeComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeComponentCommand(input) {
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
    DescribeComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "DescribeComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeComponentCommand(input, context);
    };
    DescribeComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeComponentCommand(output, context);
    };
    return DescribeComponentCommand;
}($Command));
export { DescribeComponentCommand };
//# sourceMappingURL=DescribeComponentCommand.js.map
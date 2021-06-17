import { __extends } from "tslib";
import { DescribeResourceRequest, DescribeResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeResourceCommand, serializeAws_json1_1DescribeResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the data available for the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DescribeResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeResourceCommand = /** @class */ (function (_super) {
    __extends(DescribeResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeResourceCommand(input) {
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
    DescribeResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "DescribeResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeResourceCommand(input, context);
    };
    DescribeResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeResourceCommand(output, context);
    };
    return DescribeResourceCommand;
}($Command));
export { DescribeResourceCommand };
//# sourceMappingURL=DescribeResourceCommand.js.map
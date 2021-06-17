import { __extends } from "tslib";
import { DescribeCanariesLastRunRequest, DescribeCanariesLastRunResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeCanariesLastRunCommand, serializeAws_restJson1DescribeCanariesLastRunCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this operation to see information from the most recent run of each canary that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeCanariesLastRunCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeCanariesLastRunCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new DescribeCanariesLastRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCanariesLastRunCommandInput} for command's `input` shape.
 * @see {@link DescribeCanariesLastRunCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCanariesLastRunCommand = /** @class */ (function (_super) {
    __extends(DescribeCanariesLastRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCanariesLastRunCommand(input) {
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
    DescribeCanariesLastRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SyntheticsClient";
        var commandName = "DescribeCanariesLastRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCanariesLastRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCanariesLastRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCanariesLastRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeCanariesLastRunCommand(input, context);
    };
    DescribeCanariesLastRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeCanariesLastRunCommand(output, context);
    };
    return DescribeCanariesLastRunCommand;
}($Command));
export { DescribeCanariesLastRunCommand };
//# sourceMappingURL=DescribeCanariesLastRunCommand.js.map
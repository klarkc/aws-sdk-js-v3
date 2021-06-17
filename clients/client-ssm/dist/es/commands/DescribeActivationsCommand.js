import { __extends } from "tslib";
import { DescribeActivationsRequest, DescribeActivationsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeActivationsCommand, serializeAws_json1_1DescribeActivationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes details about the activation, such as the date and time the activation was
 *    created, its expiration date, the IAM role assigned to the instances in the activation, and the
 *    number of instances registered by using this activation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeActivationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeActivationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeActivationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeActivationsCommandInput} for command's `input` shape.
 * @see {@link DescribeActivationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeActivationsCommand = /** @class */ (function (_super) {
    __extends(DescribeActivationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeActivationsCommand(input) {
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
    DescribeActivationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeActivationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeActivationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeActivationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeActivationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeActivationsCommand(input, context);
    };
    DescribeActivationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeActivationsCommand(output, context);
    };
    return DescribeActivationsCommand;
}($Command));
export { DescribeActivationsCommand };
//# sourceMappingURL=DescribeActivationsCommand.js.map
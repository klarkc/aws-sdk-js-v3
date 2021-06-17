import { __extends } from "tslib";
import { DescribeInventoryDeletionsRequest, DescribeInventoryDeletionsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeInventoryDeletionsCommand, serializeAws_json1_1DescribeInventoryDeletionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a specific delete inventory operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInventoryDeletionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInventoryDeletionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeInventoryDeletionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInventoryDeletionsCommandInput} for command's `input` shape.
 * @see {@link DescribeInventoryDeletionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInventoryDeletionsCommand = /** @class */ (function (_super) {
    __extends(DescribeInventoryDeletionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInventoryDeletionsCommand(input) {
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
    DescribeInventoryDeletionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeInventoryDeletionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInventoryDeletionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInventoryDeletionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInventoryDeletionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeInventoryDeletionsCommand(input, context);
    };
    DescribeInventoryDeletionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeInventoryDeletionsCommand(output, context);
    };
    return DescribeInventoryDeletionsCommand;
}($Command));
export { DescribeInventoryDeletionsCommand };
//# sourceMappingURL=DescribeInventoryDeletionsCommand.js.map
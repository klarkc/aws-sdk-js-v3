import { __extends } from "tslib";
import { DescribeInstancePatchStatesForPatchGroupRequest, DescribeInstancePatchStatesForPatchGroupResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand, serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the high-level patch state for the instances in the specified patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePatchStatesForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePatchStatesForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeInstancePatchStatesForPatchGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancePatchStatesForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePatchStatesForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstancePatchStatesForPatchGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeInstancePatchStatesForPatchGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstancePatchStatesForPatchGroupCommand(input) {
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
    DescribeInstancePatchStatesForPatchGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeInstancePatchStatesForPatchGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstancePatchStatesForPatchGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstancePatchStatesForPatchGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstancePatchStatesForPatchGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand(input, context);
    };
    DescribeInstancePatchStatesForPatchGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand(output, context);
    };
    return DescribeInstancePatchStatesForPatchGroupCommand;
}($Command));
export { DescribeInstancePatchStatesForPatchGroupCommand };
//# sourceMappingURL=DescribeInstancePatchStatesForPatchGroupCommand.js.map
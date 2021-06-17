import { __extends } from "tslib";
import { DescribeInstancePatchStatesRequest, DescribeInstancePatchStatesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeInstancePatchStatesCommand, serializeAws_json1_1DescribeInstancePatchStatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the high-level patch state of one or more instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePatchStatesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePatchStatesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeInstancePatchStatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancePatchStatesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePatchStatesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstancePatchStatesCommand = /** @class */ (function (_super) {
    __extends(DescribeInstancePatchStatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstancePatchStatesCommand(input) {
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
    DescribeInstancePatchStatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeInstancePatchStatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstancePatchStatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstancePatchStatesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstancePatchStatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeInstancePatchStatesCommand(input, context);
    };
    DescribeInstancePatchStatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeInstancePatchStatesCommand(output, context);
    };
    return DescribeInstancePatchStatesCommand;
}($Command));
export { DescribeInstancePatchStatesCommand };
//# sourceMappingURL=DescribeInstancePatchStatesCommand.js.map
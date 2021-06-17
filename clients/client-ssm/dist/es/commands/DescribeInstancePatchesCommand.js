import { __extends } from "tslib";
import { DescribeInstancePatchesRequest, DescribeInstancePatchesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeInstancePatchesCommand, serializeAws_json1_1DescribeInstancePatchesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the patches on the specified instance and their state relative
 *    to the patch baseline being used for the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePatchesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePatchesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeInstancePatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancePatchesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePatchesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstancePatchesCommand = /** @class */ (function (_super) {
    __extends(DescribeInstancePatchesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstancePatchesCommand(input) {
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
    DescribeInstancePatchesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeInstancePatchesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstancePatchesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstancePatchesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstancePatchesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeInstancePatchesCommand(input, context);
    };
    DescribeInstancePatchesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeInstancePatchesCommand(output, context);
    };
    return DescribeInstancePatchesCommand;
}($Command));
export { DescribeInstancePatchesCommand };
//# sourceMappingURL=DescribeInstancePatchesCommand.js.map
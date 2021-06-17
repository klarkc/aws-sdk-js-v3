import { __extends } from "tslib";
import { DescribeAssociationExecutionTargetsRequest, DescribeAssociationExecutionTargetsResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand, serializeAws_json1_1DescribeAssociationExecutionTargetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this API action to view information about a specific execution of a specific
 *    association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAssociationExecutionTargetsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAssociationExecutionTargetsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeAssociationExecutionTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssociationExecutionTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssociationExecutionTargetsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAssociationExecutionTargetsCommand = /** @class */ (function (_super) {
    __extends(DescribeAssociationExecutionTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAssociationExecutionTargetsCommand(input) {
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
    DescribeAssociationExecutionTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeAssociationExecutionTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAssociationExecutionTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAssociationExecutionTargetsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAssociationExecutionTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAssociationExecutionTargetsCommand(input, context);
    };
    DescribeAssociationExecutionTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand(output, context);
    };
    return DescribeAssociationExecutionTargetsCommand;
}($Command));
export { DescribeAssociationExecutionTargetsCommand };
//# sourceMappingURL=DescribeAssociationExecutionTargetsCommand.js.map
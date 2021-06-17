import { __extends } from "tslib";
import { DescribeAssociationExecutionsRequest, DescribeAssociationExecutionsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeAssociationExecutionsCommand, serializeAws_json1_1DescribeAssociationExecutionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this API action to view all executions for a specific association ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAssociationExecutionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAssociationExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeAssociationExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssociationExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssociationExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAssociationExecutionsCommand = /** @class */ (function (_super) {
    __extends(DescribeAssociationExecutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAssociationExecutionsCommand(input) {
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
    DescribeAssociationExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeAssociationExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAssociationExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAssociationExecutionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAssociationExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAssociationExecutionsCommand(input, context);
    };
    DescribeAssociationExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAssociationExecutionsCommand(output, context);
    };
    return DescribeAssociationExecutionsCommand;
}($Command));
export { DescribeAssociationExecutionsCommand };
//# sourceMappingURL=DescribeAssociationExecutionsCommand.js.map
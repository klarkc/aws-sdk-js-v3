import { __extends } from "tslib";
import { DescribeEffectiveInstanceAssociationsRequest, DescribeEffectiveInstanceAssociationsResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand, serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>All associations for the instance(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeEffectiveInstanceAssociationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeEffectiveInstanceAssociationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeEffectiveInstanceAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEffectiveInstanceAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectiveInstanceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEffectiveInstanceAssociationsCommand = /** @class */ (function (_super) {
    __extends(DescribeEffectiveInstanceAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEffectiveInstanceAssociationsCommand(input) {
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
    DescribeEffectiveInstanceAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeEffectiveInstanceAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEffectiveInstanceAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEffectiveInstanceAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEffectiveInstanceAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand(input, context);
    };
    DescribeEffectiveInstanceAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand(output, context);
    };
    return DescribeEffectiveInstanceAssociationsCommand;
}($Command));
export { DescribeEffectiveInstanceAssociationsCommand };
//# sourceMappingURL=DescribeEffectiveInstanceAssociationsCommand.js.map
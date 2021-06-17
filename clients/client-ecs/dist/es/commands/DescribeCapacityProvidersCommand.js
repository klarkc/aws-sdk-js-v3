import { __extends } from "tslib";
import { DescribeCapacityProvidersRequest, DescribeCapacityProvidersResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeCapacityProvidersCommand, serializeAws_json1_1DescribeCapacityProvidersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your capacity providers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeCapacityProvidersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeCapacityProvidersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityProvidersCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCapacityProvidersCommand = /** @class */ (function (_super) {
    __extends(DescribeCapacityProvidersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCapacityProvidersCommand(input) {
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
    DescribeCapacityProvidersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DescribeCapacityProvidersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCapacityProvidersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCapacityProvidersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCapacityProvidersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCapacityProvidersCommand(input, context);
    };
    DescribeCapacityProvidersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCapacityProvidersCommand(output, context);
    };
    return DescribeCapacityProvidersCommand;
}($Command));
export { DescribeCapacityProvidersCommand };
//# sourceMappingURL=DescribeCapacityProvidersCommand.js.map
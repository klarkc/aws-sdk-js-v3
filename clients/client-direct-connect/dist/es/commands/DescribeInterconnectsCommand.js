import { __extends } from "tslib";
import { DescribeInterconnectsRequest, Interconnects } from "../models/models_0";
import { deserializeAws_json1_1DescribeInterconnectsCommand, serializeAws_json1_1DescribeInterconnectsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the interconnects owned by the AWS account or only the specified interconnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeInterconnectsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeInterconnectsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeInterconnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInterconnectsCommandInput} for command's `input` shape.
 * @see {@link DescribeInterconnectsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInterconnectsCommand = /** @class */ (function (_super) {
    __extends(DescribeInterconnectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInterconnectsCommand(input) {
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
    DescribeInterconnectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeInterconnectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInterconnectsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Interconnects.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInterconnectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeInterconnectsCommand(input, context);
    };
    DescribeInterconnectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeInterconnectsCommand(output, context);
    };
    return DescribeInterconnectsCommand;
}($Command));
export { DescribeInterconnectsCommand };
//# sourceMappingURL=DescribeInterconnectsCommand.js.map
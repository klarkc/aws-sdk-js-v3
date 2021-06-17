import { __extends } from "tslib";
import { DescribeContactFlowRequest, DescribeContactFlowResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeContactFlowCommand, serializeAws_restJson1DescribeContactFlowCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified contact flow.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeContactFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContactFlowCommandInput} for command's `input` shape.
 * @see {@link DescribeContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeContactFlowCommand = /** @class */ (function (_super) {
    __extends(DescribeContactFlowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeContactFlowCommand(input) {
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
    DescribeContactFlowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DescribeContactFlowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeContactFlowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeContactFlowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeContactFlowCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeContactFlowCommand(input, context);
    };
    DescribeContactFlowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeContactFlowCommand(output, context);
    };
    return DescribeContactFlowCommand;
}($Command));
export { DescribeContactFlowCommand };
//# sourceMappingURL=DescribeContactFlowCommand.js.map
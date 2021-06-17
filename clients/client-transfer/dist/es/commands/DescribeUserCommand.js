import { __extends } from "tslib";
import { DescribeUserRequest, DescribeUserResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeUserCommand, serializeAws_json1_1DescribeUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the user assigned to the specific file transfer protocol-enabled server, as
 *       identified by its <code>ServerId</code> property.</p>
 *
 *          <p>The response from this call returns the properties of the user associated with the
 *         <code>ServerId</code> value that was specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeUserCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeUserCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DescribeUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserCommandInput} for command's `input` shape.
 * @see {@link DescribeUserCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUserCommand = /** @class */ (function (_super) {
    __extends(DescribeUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUserCommand(input) {
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
    DescribeUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "DescribeUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeUserCommand(input, context);
    };
    DescribeUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeUserCommand(output, context);
    };
    return DescribeUserCommand;
}($Command));
export { DescribeUserCommand };
//# sourceMappingURL=DescribeUserCommand.js.map
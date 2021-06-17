import { __extends } from "tslib";
import { DescribeInstanceRequest, DescribeInstanceResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeInstanceCommand, serializeAws_restJson1DescribeInstanceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns the current state of the specified instance identifier. It tracks the instance while
 *    it is being created and returns an error status, if applicable. </p>
 *          <p>If an instance is not created successfully, the instance status reason field returns details
 *    relevant to the reason. The instance in a failed state is returned only for 24 hours after the
 *    CreateInstance API was invoked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeInstanceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeInstanceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstanceCommand = /** @class */ (function (_super) {
    __extends(DescribeInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstanceCommand(input) {
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
    DescribeInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DescribeInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeInstanceCommand(input, context);
    };
    DescribeInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeInstanceCommand(output, context);
    };
    return DescribeInstanceCommand;
}($Command));
export { DescribeInstanceCommand };
//# sourceMappingURL=DescribeInstanceCommand.js.map
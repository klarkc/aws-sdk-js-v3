import { __extends } from "tslib";
import { DescribeCanariesRequest, DescribeCanariesResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeCanariesCommand, serializeAws_restJson1DescribeCanariesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation returns a list of the canaries in your account, along with full details
 *       about each canary.</p>
 *         <p>This operation does not have resource-level authorization, so if a user is able to use
 *             <code>DescribeCanaries</code>, the user can see all of the canaries in the account. A
 *          deny policy can only be used to restrict access to all canaries. It cannot be used on
 *          specific resources. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeCanariesCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeCanariesCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new DescribeCanariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCanariesCommandInput} for command's `input` shape.
 * @see {@link DescribeCanariesCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCanariesCommand = /** @class */ (function (_super) {
    __extends(DescribeCanariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCanariesCommand(input) {
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
    DescribeCanariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SyntheticsClient";
        var commandName = "DescribeCanariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCanariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCanariesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCanariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeCanariesCommand(input, context);
    };
    DescribeCanariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeCanariesCommand(output, context);
    };
    return DescribeCanariesCommand;
}($Command));
export { DescribeCanariesCommand };
//# sourceMappingURL=DescribeCanariesCommand.js.map
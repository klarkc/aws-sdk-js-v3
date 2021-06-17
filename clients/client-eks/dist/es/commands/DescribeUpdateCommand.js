import { __extends } from "tslib";
import { DescribeUpdateRequest, DescribeUpdateResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeUpdateCommand, serializeAws_restJson1DescribeUpdateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns descriptive information about an update against your Amazon EKS cluster or
 *             associated managed node group.</p>
 *         <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an
 *             update fails, the status is <code>Failed</code>, and an error detail explains the reason
 *             for the failure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeUpdateCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeUpdateCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUpdateCommandInput} for command's `input` shape.
 * @see {@link DescribeUpdateCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUpdateCommand = /** @class */ (function (_super) {
    __extends(DescribeUpdateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUpdateCommand(input) {
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
    DescribeUpdateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "DescribeUpdateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUpdateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUpdateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUpdateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeUpdateCommand(input, context);
    };
    DescribeUpdateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeUpdateCommand(output, context);
    };
    return DescribeUpdateCommand;
}($Command));
export { DescribeUpdateCommand };
//# sourceMappingURL=DescribeUpdateCommand.js.map
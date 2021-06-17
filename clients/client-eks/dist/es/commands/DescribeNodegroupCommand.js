import { __extends } from "tslib";
import { DescribeNodegroupRequest, DescribeNodegroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeNodegroupCommand, serializeAws_restJson1DescribeNodegroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns descriptive information about an Amazon EKS node group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeNodegroupCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeNodegroupCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeNodegroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNodegroupCommandInput} for command's `input` shape.
 * @see {@link DescribeNodegroupCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNodegroupCommand = /** @class */ (function (_super) {
    __extends(DescribeNodegroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNodegroupCommand(input) {
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
    DescribeNodegroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "DescribeNodegroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNodegroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNodegroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNodegroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeNodegroupCommand(input, context);
    };
    DescribeNodegroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeNodegroupCommand(output, context);
    };
    return DescribeNodegroupCommand;
}($Command));
export { DescribeNodegroupCommand };
//# sourceMappingURL=DescribeNodegroupCommand.js.map
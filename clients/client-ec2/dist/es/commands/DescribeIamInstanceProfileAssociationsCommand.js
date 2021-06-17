import { __extends } from "tslib";
import { DescribeIamInstanceProfileAssociationsRequest, DescribeIamInstanceProfileAssociationsResult, } from "../models/models_2";
import { deserializeAws_ec2DescribeIamInstanceProfileAssociationsCommand, serializeAws_ec2DescribeIamInstanceProfileAssociationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes your IAM instance profile associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIamInstanceProfileAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIamInstanceProfileAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeIamInstanceProfileAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIamInstanceProfileAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeIamInstanceProfileAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIamInstanceProfileAssociationsCommand = /** @class */ (function (_super) {
    __extends(DescribeIamInstanceProfileAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIamInstanceProfileAssociationsCommand(input) {
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
    DescribeIamInstanceProfileAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeIamInstanceProfileAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIamInstanceProfileAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIamInstanceProfileAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIamInstanceProfileAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeIamInstanceProfileAssociationsCommand(input, context);
    };
    DescribeIamInstanceProfileAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeIamInstanceProfileAssociationsCommand(output, context);
    };
    return DescribeIamInstanceProfileAssociationsCommand;
}($Command));
export { DescribeIamInstanceProfileAssociationsCommand };
//# sourceMappingURL=DescribeIamInstanceProfileAssociationsCommand.js.map
import { __extends } from "tslib";
import { DescribePlacementGroupsRequest, DescribePlacementGroupsResult } from "../models/models_3";
import { deserializeAws_ec2DescribePlacementGroupsCommand, serializeAws_ec2DescribePlacementGroupsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified placement groups or all of your placement groups. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePlacementGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePlacementGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribePlacementGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlacementGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribePlacementGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePlacementGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribePlacementGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePlacementGroupsCommand(input) {
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
    DescribePlacementGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribePlacementGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePlacementGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePlacementGroupsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePlacementGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribePlacementGroupsCommand(input, context);
    };
    DescribePlacementGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribePlacementGroupsCommand(output, context);
    };
    return DescribePlacementGroupsCommand;
}($Command));
export { DescribePlacementGroupsCommand };
//# sourceMappingURL=DescribePlacementGroupsCommand.js.map
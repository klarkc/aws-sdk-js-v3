import { __extends } from "tslib";
import { CreatePlacementGroupRequest, CreatePlacementGroupResult } from "../models/models_1";
import { deserializeAws_ec2CreatePlacementGroupCommand, serializeAws_ec2CreatePlacementGroupCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a placement group in which to launch instances. The strategy of the placement
 *             group determines how the instances are organized within the group. </p>
 *         <p>A <code>cluster</code> placement group is a logical grouping of instances within a
 *             single Availability Zone that benefit from low network latency, high network throughput.
 *             A <code>spread</code> placement group places instances on distinct hardware. A
 *                 <code>partition</code> placement group places groups of instances in different
 *             partitions, where instances in one partition do not share the same hardware with
 *             instances in another partition.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreatePlacementGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreatePlacementGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreatePlacementGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlacementGroupCommandInput} for command's `input` shape.
 * @see {@link CreatePlacementGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePlacementGroupCommand = /** @class */ (function (_super) {
    __extends(CreatePlacementGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePlacementGroupCommand(input) {
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
    CreatePlacementGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreatePlacementGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePlacementGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePlacementGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePlacementGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreatePlacementGroupCommand(input, context);
    };
    CreatePlacementGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreatePlacementGroupCommand(output, context);
    };
    return CreatePlacementGroupCommand;
}($Command));
export { CreatePlacementGroupCommand };
//# sourceMappingURL=CreatePlacementGroupCommand.js.map
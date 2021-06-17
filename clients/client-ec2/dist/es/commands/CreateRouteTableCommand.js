import { __extends } from "tslib";
import { CreateRouteTableRequest, CreateRouteTableResult } from "../models/models_1";
import { deserializeAws_ec2CreateRouteTableCommand, serializeAws_ec2CreateRouteTableCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteTableCommandInput} for command's `input` shape.
 * @see {@link CreateRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRouteTableCommand = /** @class */ (function (_super) {
    __extends(CreateRouteTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRouteTableCommand(input) {
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
    CreateRouteTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateRouteTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRouteTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRouteTableResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRouteTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateRouteTableCommand(input, context);
    };
    CreateRouteTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateRouteTableCommand(output, context);
    };
    return CreateRouteTableCommand;
}($Command));
export { CreateRouteTableCommand };
//# sourceMappingURL=CreateRouteTableCommand.js.map
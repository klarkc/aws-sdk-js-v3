import { __extends } from "tslib";
import { AllocateHostsRequest, AllocateHostsResult } from "../models/models_0";
import { deserializeAws_ec2AllocateHostsCommand, serializeAws_ec2AllocateHostsCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allocates a Dedicated Host to your account. At a minimum, specify the supported instance
 *         	type or instance family, the Availability Zone in which to allocate the host, and the number of
 *         	hosts to allocate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AllocateHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AllocateHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AllocateHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateHostsCommandInput} for command's `input` shape.
 * @see {@link AllocateHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AllocateHostsCommand = /** @class */ (function (_super) {
    __extends(AllocateHostsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AllocateHostsCommand(input) {
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
    AllocateHostsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AllocateHostsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AllocateHostsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AllocateHostsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AllocateHostsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AllocateHostsCommand(input, context);
    };
    AllocateHostsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AllocateHostsCommand(output, context);
    };
    return AllocateHostsCommand;
}($Command));
export { AllocateHostsCommand };
//# sourceMappingURL=AllocateHostsCommand.js.map
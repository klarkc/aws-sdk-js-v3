import { __extends } from "tslib";
import { CreateManagedPrefixListRequest, CreateManagedPrefixListResult } from "../models/models_1";
import { deserializeAws_ec2CreateManagedPrefixListCommand, serializeAws_ec2CreateManagedPrefixListCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a managed prefix list. You can specify one or more entries for the prefix list. Each entry consists of a CIDR block and an optional description.</p>
 *         <p>You must specify the maximum number of entries for the prefix list. The maximum number of entries cannot be changed later.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateManagedPrefixListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateManagedPrefixListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateManagedPrefixListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateManagedPrefixListCommandInput} for command's `input` shape.
 * @see {@link CreateManagedPrefixListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateManagedPrefixListCommand = /** @class */ (function (_super) {
    __extends(CreateManagedPrefixListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateManagedPrefixListCommand(input) {
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
    CreateManagedPrefixListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateManagedPrefixListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateManagedPrefixListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateManagedPrefixListResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateManagedPrefixListCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateManagedPrefixListCommand(input, context);
    };
    CreateManagedPrefixListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateManagedPrefixListCommand(output, context);
    };
    return CreateManagedPrefixListCommand;
}($Command));
export { CreateManagedPrefixListCommand };
//# sourceMappingURL=CreateManagedPrefixListCommand.js.map
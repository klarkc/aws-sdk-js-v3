import { __extends } from "tslib";
import { GetManagedPrefixListAssociationsRequest, GetManagedPrefixListAssociationsResult } from "../models/models_4";
import { deserializeAws_ec2GetManagedPrefixListAssociationsCommand, serializeAws_ec2GetManagedPrefixListAssociationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the resources that are associated with the specified managed prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetManagedPrefixListAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetManagedPrefixListAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetManagedPrefixListAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetManagedPrefixListAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetManagedPrefixListAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetManagedPrefixListAssociationsCommand = /** @class */ (function (_super) {
    __extends(GetManagedPrefixListAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetManagedPrefixListAssociationsCommand(input) {
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
    GetManagedPrefixListAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetManagedPrefixListAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetManagedPrefixListAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetManagedPrefixListAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetManagedPrefixListAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetManagedPrefixListAssociationsCommand(input, context);
    };
    GetManagedPrefixListAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetManagedPrefixListAssociationsCommand(output, context);
    };
    return GetManagedPrefixListAssociationsCommand;
}($Command));
export { GetManagedPrefixListAssociationsCommand };
//# sourceMappingURL=GetManagedPrefixListAssociationsCommand.js.map
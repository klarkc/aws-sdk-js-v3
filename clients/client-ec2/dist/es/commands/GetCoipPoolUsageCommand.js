import { __extends } from "tslib";
import { GetCoipPoolUsageRequest, GetCoipPoolUsageResult } from "../models/models_4";
import { deserializeAws_ec2GetCoipPoolUsageCommand, serializeAws_ec2GetCoipPoolUsageCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the allocations from the specified customer-owned address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCoipPoolUsageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCoipPoolUsageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetCoipPoolUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCoipPoolUsageCommandInput} for command's `input` shape.
 * @see {@link GetCoipPoolUsageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCoipPoolUsageCommand = /** @class */ (function (_super) {
    __extends(GetCoipPoolUsageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCoipPoolUsageCommand(input) {
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
    GetCoipPoolUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetCoipPoolUsageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCoipPoolUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCoipPoolUsageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCoipPoolUsageCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetCoipPoolUsageCommand(input, context);
    };
    GetCoipPoolUsageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetCoipPoolUsageCommand(output, context);
    };
    return GetCoipPoolUsageCommand;
}($Command));
export { GetCoipPoolUsageCommand };
//# sourceMappingURL=GetCoipPoolUsageCommand.js.map
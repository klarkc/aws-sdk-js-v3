import { __extends } from "tslib";
import { CreateDedicatedIpPoolRequest, CreateDedicatedIpPoolResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDedicatedIpPoolCommand, serializeAws_restJson1CreateDedicatedIpPoolCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a new pool of dedicated IP addresses. A pool can include one or more dedicated
 *             IP addresses that are associated with your AWS account. You can associate a pool with
 *             a configuration set. When you send an email that uses that configuration set, the
 *             message is sent from one of the addresses in the associated pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateDedicatedIpPoolCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateDedicatedIpPoolCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateDedicatedIpPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDedicatedIpPoolCommandInput} for command's `input` shape.
 * @see {@link CreateDedicatedIpPoolCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDedicatedIpPoolCommand = /** @class */ (function (_super) {
    __extends(CreateDedicatedIpPoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDedicatedIpPoolCommand(input) {
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
    CreateDedicatedIpPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "CreateDedicatedIpPoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDedicatedIpPoolRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDedicatedIpPoolResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDedicatedIpPoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDedicatedIpPoolCommand(input, context);
    };
    CreateDedicatedIpPoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDedicatedIpPoolCommand(output, context);
    };
    return CreateDedicatedIpPoolCommand;
}($Command));
export { CreateDedicatedIpPoolCommand };
//# sourceMappingURL=CreateDedicatedIpPoolCommand.js.map
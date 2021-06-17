import { __extends } from "tslib";
import { CreateIPSetRequest, CreateIPSetResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateIPSetCommand, serializeAws_json1_1CreateIPSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an <a>IPSet</a>, which you use to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure AWS WAF to block them using an IPSet that lists those IP addresses. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, CreateIPSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, CreateIPSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new CreateIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIPSetCommandInput} for command's `input` shape.
 * @see {@link CreateIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateIPSetCommand = /** @class */ (function (_super) {
    __extends(CreateIPSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateIPSetCommand(input) {
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
    CreateIPSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "CreateIPSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateIPSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateIPSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateIPSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateIPSetCommand(input, context);
    };
    CreateIPSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateIPSetCommand(output, context);
    };
    return CreateIPSetCommand;
}($Command));
export { CreateIPSetCommand };
//# sourceMappingURL=CreateIPSetCommand.js.map
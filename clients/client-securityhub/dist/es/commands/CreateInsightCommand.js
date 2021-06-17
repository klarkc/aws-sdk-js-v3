import { __extends } from "tslib";
import { CreateInsightRequest, CreateInsightResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateInsightCommand, serializeAws_restJson1CreateInsightCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate
 *          to a security issue that requires attention or remediation.</p>
 *          <p>To group the related findings in the insight, use the
 *          <code>GroupByAttribute</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateInsightCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateInsightCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new CreateInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInsightCommandInput} for command's `input` shape.
 * @see {@link CreateInsightCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInsightCommand = /** @class */ (function (_super) {
    __extends(CreateInsightCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInsightCommand(input) {
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
    CreateInsightCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "CreateInsightCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInsightRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInsightResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInsightCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateInsightCommand(input, context);
    };
    CreateInsightCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateInsightCommand(output, context);
    };
    return CreateInsightCommand;
}($Command));
export { CreateInsightCommand };
//# sourceMappingURL=CreateInsightCommand.js.map
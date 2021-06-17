import { __extends } from "tslib";
import { GetRateBasedStatementManagedKeysRequest, GetRateBasedStatementManagedKeysResponse } from "../models/models_0";
import { deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand, serializeAws_json1_1GetRateBasedStatementManagedKeysCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the keys that are currently blocked by a rate-based rule. The maximum number of managed keys that can be blocked for a single rate-based rule is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRateBasedStatementManagedKeysCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRateBasedStatementManagedKeysCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetRateBasedStatementManagedKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRateBasedStatementManagedKeysCommandInput} for command's `input` shape.
 * @see {@link GetRateBasedStatementManagedKeysCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRateBasedStatementManagedKeysCommand = /** @class */ (function (_super) {
    __extends(GetRateBasedStatementManagedKeysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRateBasedStatementManagedKeysCommand(input) {
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
    GetRateBasedStatementManagedKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "GetRateBasedStatementManagedKeysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRateBasedStatementManagedKeysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRateBasedStatementManagedKeysResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRateBasedStatementManagedKeysCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRateBasedStatementManagedKeysCommand(input, context);
    };
    GetRateBasedStatementManagedKeysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand(output, context);
    };
    return GetRateBasedStatementManagedKeysCommand;
}($Command));
export { GetRateBasedStatementManagedKeysCommand };
//# sourceMappingURL=GetRateBasedStatementManagedKeysCommand.js.map
import { __extends } from "tslib";
import { GetRulesRequest, GetRulesResult } from "../models/models_0";
import { deserializeAws_json1_1GetRulesCommand, serializeAws_json1_1GetRulesCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get all rules for a detector (paginated) if <code>ruleId</code> and <code>ruleVersion</code> are not specified. Gets all rules for the detector and the <code>ruleId</code> if present (paginated). Gets a specific rule if both the <code>ruleId</code> and the <code>ruleVersion</code> are specified.</p>
 *          <p>This is a paginated API. Providing null maxResults results in retrieving maximum of 100 records per page. If you provide maxResults the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetRulesResult as part of your request. Null pagination token fetches the records from the beginning.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetRulesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetRulesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRulesCommandInput} for command's `input` shape.
 * @see {@link GetRulesCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRulesCommand = /** @class */ (function (_super) {
    __extends(GetRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRulesCommand(input) {
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
    GetRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRulesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRulesCommand(input, context);
    };
    GetRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRulesCommand(output, context);
    };
    return GetRulesCommand;
}($Command));
export { GetRulesCommand };
//# sourceMappingURL=GetRulesCommand.js.map
import { __extends } from "tslib";
import { GetInsightResultsRequest, GetInsightResultsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetInsightResultsCommand, serializeAws_restJson1GetInsightResultsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the results of the Security Hub insight specified by the insight ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetInsightResultsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetInsightResultsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetInsightResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightResultsCommandInput} for command's `input` shape.
 * @see {@link GetInsightResultsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInsightResultsCommand = /** @class */ (function (_super) {
    __extends(GetInsightResultsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInsightResultsCommand(input) {
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
    GetInsightResultsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "GetInsightResultsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInsightResultsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInsightResultsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInsightResultsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetInsightResultsCommand(input, context);
    };
    GetInsightResultsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetInsightResultsCommand(output, context);
    };
    return GetInsightResultsCommand;
}($Command));
export { GetInsightResultsCommand };
//# sourceMappingURL=GetInsightResultsCommand.js.map
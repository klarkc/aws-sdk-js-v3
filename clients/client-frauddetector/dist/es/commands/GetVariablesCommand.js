import { __extends } from "tslib";
import { GetVariablesRequest, GetVariablesResult } from "../models/models_0";
import { deserializeAws_json1_1GetVariablesCommand, serializeAws_json1_1GetVariablesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets all of the variables or the specific variable. This is a
 *          paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of
 *          100 records per page. If you provide <code>maxSizePerPage</code> the value must be between
 *          50 and 100. To get the next page result, a provide a pagination token from
 *         <code>GetVariablesResult</code> as part of your request. Null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetVariablesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetVariablesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetVariablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVariablesCommandInput} for command's `input` shape.
 * @see {@link GetVariablesCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVariablesCommand = /** @class */ (function (_super) {
    __extends(GetVariablesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetVariablesCommand(input) {
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
    GetVariablesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetVariablesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetVariablesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetVariablesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetVariablesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetVariablesCommand(input, context);
    };
    GetVariablesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetVariablesCommand(output, context);
    };
    return GetVariablesCommand;
}($Command));
export { GetVariablesCommand };
//# sourceMappingURL=GetVariablesCommand.js.map
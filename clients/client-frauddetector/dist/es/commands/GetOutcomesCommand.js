import { __extends } from "tslib";
import { GetOutcomesRequest, GetOutcomesResult } from "../models/models_0";
import { deserializeAws_json1_1GetOutcomesCommand, serializeAws_json1_1GetOutcomesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets one or more outcomes. This is a paginated
 *          API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of
 *          100 records per page. If you provide a <code>maxResults</code>, the value must be
 *          between 50 and 100. To get the next page results, provide the pagination token from the
 *         <code>GetOutcomesResult</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetOutcomesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetOutcomesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetOutcomesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOutcomesCommandInput} for command's `input` shape.
 * @see {@link GetOutcomesCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOutcomesCommand = /** @class */ (function (_super) {
    __extends(GetOutcomesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOutcomesCommand(input) {
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
    GetOutcomesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetOutcomesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOutcomesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOutcomesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOutcomesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOutcomesCommand(input, context);
    };
    GetOutcomesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOutcomesCommand(output, context);
    };
    return GetOutcomesCommand;
}($Command));
export { GetOutcomesCommand };
//# sourceMappingURL=GetOutcomesCommand.js.map
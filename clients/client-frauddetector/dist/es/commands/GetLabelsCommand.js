import { __extends } from "tslib";
import { GetLabelsRequest, GetLabelsResult } from "../models/models_0";
import { deserializeAws_json1_1GetLabelsCommand, serializeAws_json1_1GetLabelsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets all labels or a specific label if name is provided. This is a paginated API. If you
 *          provide a null <code>maxResults</code>, this action retrieves a maximum of 50 records
 *          per page. If you provide a <code>maxResults</code>, the value must be between 10 and 50.
 *          To get the next page results, provide the pagination token from the
 *          <code>GetGetLabelsResponse</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetLabelsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetLabelsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLabelsCommandInput} for command's `input` shape.
 * @see {@link GetLabelsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLabelsCommand = /** @class */ (function (_super) {
    __extends(GetLabelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLabelsCommand(input) {
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
    GetLabelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetLabelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLabelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLabelsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLabelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLabelsCommand(input, context);
    };
    GetLabelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLabelsCommand(output, context);
    };
    return GetLabelsCommand;
}($Command));
export { GetLabelsCommand };
//# sourceMappingURL=GetLabelsCommand.js.map
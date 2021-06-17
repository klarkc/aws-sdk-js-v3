import { __extends } from "tslib";
import { GetExternalModelsRequest, GetExternalModelsResult } from "../models/models_0";
import { deserializeAws_json1_1GetExternalModelsCommand, serializeAws_json1_1GetExternalModelsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the details for one or more Amazon SageMaker models that have been imported into the
 *          service. This is a paginated API. If you provide a null <code>maxResults</code>, this
 *          actions retrieves a maximum of 10 records per page. If you provide a
 *             <code>maxResults</code>, the value must be between 5 and 10. To get the next page
 *          results, provide the pagination token from the <code>GetExternalModelsResult</code> as part
 *          of your request. A null pagination token fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetExternalModelsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetExternalModelsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetExternalModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExternalModelsCommandInput} for command's `input` shape.
 * @see {@link GetExternalModelsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetExternalModelsCommand = /** @class */ (function (_super) {
    __extends(GetExternalModelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetExternalModelsCommand(input) {
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
    GetExternalModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetExternalModelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetExternalModelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetExternalModelsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetExternalModelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetExternalModelsCommand(input, context);
    };
    GetExternalModelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetExternalModelsCommand(output, context);
    };
    return GetExternalModelsCommand;
}($Command));
export { GetExternalModelsCommand };
//# sourceMappingURL=GetExternalModelsCommand.js.map
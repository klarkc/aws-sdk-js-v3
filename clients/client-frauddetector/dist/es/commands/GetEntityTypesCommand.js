import { __extends } from "tslib";
import { GetEntityTypesRequest, GetEntityTypesResult } from "../models/models_0";
import { deserializeAws_json1_1GetEntityTypesCommand, serializeAws_json1_1GetEntityTypesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets all entity types or a specific entity type if a name is specified. This is a paginated API. If you
 *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
 *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
 *          To get the next page results, provide the pagination token from the
 *          <code>GetEntityTypesResponse</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEntityTypesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEntityTypesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetEntityTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEntityTypesCommandInput} for command's `input` shape.
 * @see {@link GetEntityTypesCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEntityTypesCommand = /** @class */ (function (_super) {
    __extends(GetEntityTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEntityTypesCommand(input) {
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
    GetEntityTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetEntityTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEntityTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEntityTypesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEntityTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetEntityTypesCommand(input, context);
    };
    GetEntityTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetEntityTypesCommand(output, context);
    };
    return GetEntityTypesCommand;
}($Command));
export { GetEntityTypesCommand };
//# sourceMappingURL=GetEntityTypesCommand.js.map
import { __extends } from "tslib";
import { GetDetectorsRequest, GetDetectorsResult } from "../models/models_0";
import { deserializeAws_json1_1GetDetectorsCommand, serializeAws_json1_1GetDetectorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets all detectors or a single detector if a <code>detectorId</code> is specified. This is a paginated API. If you
 *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
 *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
 *          To get the next page results, provide the pagination token from the
 *             <code>GetDetectorsResponse</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetDetectorsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetDetectorsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDetectorsCommandInput} for command's `input` shape.
 * @see {@link GetDetectorsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDetectorsCommand = /** @class */ (function (_super) {
    __extends(GetDetectorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDetectorsCommand(input) {
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
    GetDetectorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetDetectorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDetectorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDetectorsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDetectorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDetectorsCommand(input, context);
    };
    GetDetectorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDetectorsCommand(output, context);
    };
    return GetDetectorsCommand;
}($Command));
export { GetDetectorsCommand };
//# sourceMappingURL=GetDetectorsCommand.js.map
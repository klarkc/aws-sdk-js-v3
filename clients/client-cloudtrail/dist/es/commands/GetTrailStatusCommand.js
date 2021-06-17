import { __extends } from "tslib";
import { GetTrailStatusRequest, GetTrailStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1GetTrailStatusCommand, serializeAws_json1_1GetTrailStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetTrailStatusCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetTrailStatusCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new GetTrailStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTrailStatusCommandInput} for command's `input` shape.
 * @see {@link GetTrailStatusCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTrailStatusCommand = /** @class */ (function (_super) {
    __extends(GetTrailStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTrailStatusCommand(input) {
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
    GetTrailStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "GetTrailStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTrailStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTrailStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTrailStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTrailStatusCommand(input, context);
    };
    GetTrailStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTrailStatusCommand(output, context);
    };
    return GetTrailStatusCommand;
}($Command));
export { GetTrailStatusCommand };
//# sourceMappingURL=GetTrailStatusCommand.js.map
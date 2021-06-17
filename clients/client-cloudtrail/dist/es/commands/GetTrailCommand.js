import { __extends } from "tslib";
import { GetTrailRequest, GetTrailResponse } from "../models/models_0";
import { deserializeAws_json1_1GetTrailCommand, serializeAws_json1_1GetTrailCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns settings information for a specified trail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new GetTrailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTrailCommandInput} for command's `input` shape.
 * @see {@link GetTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTrailCommand = /** @class */ (function (_super) {
    __extends(GetTrailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTrailCommand(input) {
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
    GetTrailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "GetTrailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTrailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTrailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTrailCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTrailCommand(input, context);
    };
    GetTrailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTrailCommand(output, context);
    };
    return GetTrailCommand;
}($Command));
export { GetTrailCommand };
//# sourceMappingURL=GetTrailCommand.js.map
import { __extends } from "tslib";
import { GetViolationDetailsRequest, GetViolationDetailsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetViolationDetailsCommand, serializeAws_json1_1GetViolationDetailsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves violations for a resource based on the specified AWS Firewall Manager policy and AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetViolationDetailsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetViolationDetailsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetViolationDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetViolationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetViolationDetailsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetViolationDetailsCommand = /** @class */ (function (_super) {
    __extends(GetViolationDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetViolationDetailsCommand(input) {
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
    GetViolationDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "GetViolationDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetViolationDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetViolationDetailsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetViolationDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetViolationDetailsCommand(input, context);
    };
    GetViolationDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetViolationDetailsCommand(output, context);
    };
    return GetViolationDetailsCommand;
}($Command));
export { GetViolationDetailsCommand };
//# sourceMappingURL=GetViolationDetailsCommand.js.map
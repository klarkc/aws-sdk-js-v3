import { __extends } from "tslib";
import { GetModelVersionRequest, GetModelVersionResult } from "../models/models_0";
import { deserializeAws_json1_1GetModelVersionCommand, serializeAws_json1_1GetModelVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the details of the specified model version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetModelVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetModelVersionCommandInput} for command's `input` shape.
 * @see {@link GetModelVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetModelVersionCommand = /** @class */ (function (_super) {
    __extends(GetModelVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetModelVersionCommand(input) {
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
    GetModelVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetModelVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetModelVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetModelVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetModelVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetModelVersionCommand(input, context);
    };
    GetModelVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetModelVersionCommand(output, context);
    };
    return GetModelVersionCommand;
}($Command));
export { GetModelVersionCommand };
//# sourceMappingURL=GetModelVersionCommand.js.map
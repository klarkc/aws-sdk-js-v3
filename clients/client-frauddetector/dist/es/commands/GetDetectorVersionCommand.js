import { __extends } from "tslib";
import { GetDetectorVersionRequest, GetDetectorVersionResult } from "../models/models_0";
import { deserializeAws_json1_1GetDetectorVersionCommand, serializeAws_json1_1GetDetectorVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a particular detector version. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetDetectorVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link GetDetectorVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDetectorVersionCommand = /** @class */ (function (_super) {
    __extends(GetDetectorVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDetectorVersionCommand(input) {
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
    GetDetectorVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetDetectorVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDetectorVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDetectorVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDetectorVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDetectorVersionCommand(input, context);
    };
    GetDetectorVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDetectorVersionCommand(output, context);
    };
    return GetDetectorVersionCommand;
}($Command));
export { GetDetectorVersionCommand };
//# sourceMappingURL=GetDetectorVersionCommand.js.map
import { __extends } from "tslib";
import { CreateDetectorVersionRequest, CreateDetectorVersionResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDetectorVersionCommand, serializeAws_json1_1CreateDetectorVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a detector version. The detector version starts in a <code>DRAFT</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CreateDetectorVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDetectorVersionCommand = /** @class */ (function (_super) {
    __extends(CreateDetectorVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDetectorVersionCommand(input) {
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
    CreateDetectorVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "CreateDetectorVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDetectorVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDetectorVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDetectorVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDetectorVersionCommand(input, context);
    };
    CreateDetectorVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDetectorVersionCommand(output, context);
    };
    return CreateDetectorVersionCommand;
}($Command));
export { CreateDetectorVersionCommand };
//# sourceMappingURL=CreateDetectorVersionCommand.js.map
import { __extends } from "tslib";
import { ImportKeyPairRequest, ImportKeyPairResult } from "../models/models_1";
import { deserializeAws_json1_1ImportKeyPairCommand, serializeAws_json1_1ImportKeyPairCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Imports a public SSH key from a specific key pair.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, ImportKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, ImportKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new ImportKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportKeyPairCommandInput} for command's `input` shape.
 * @see {@link ImportKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportKeyPairCommand = /** @class */ (function (_super) {
    __extends(ImportKeyPairCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportKeyPairCommand(input) {
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
    ImportKeyPairCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "ImportKeyPairCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportKeyPairRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportKeyPairResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportKeyPairCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ImportKeyPairCommand(input, context);
    };
    ImportKeyPairCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ImportKeyPairCommand(output, context);
    };
    return ImportKeyPairCommand;
}($Command));
export { ImportKeyPairCommand };
//# sourceMappingURL=ImportKeyPairCommand.js.map
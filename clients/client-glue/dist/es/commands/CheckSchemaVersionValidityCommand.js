import { __extends } from "tslib";
import { CheckSchemaVersionValidityInput, CheckSchemaVersionValidityResponse } from "../models/models_0";
import { deserializeAws_json1_1CheckSchemaVersionValidityCommand, serializeAws_json1_1CheckSchemaVersionValidityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CheckSchemaVersionValidityCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CheckSchemaVersionValidityCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CheckSchemaVersionValidityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckSchemaVersionValidityCommandInput} for command's `input` shape.
 * @see {@link CheckSchemaVersionValidityCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CheckSchemaVersionValidityCommand = /** @class */ (function (_super) {
    __extends(CheckSchemaVersionValidityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CheckSchemaVersionValidityCommand(input) {
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
    CheckSchemaVersionValidityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CheckSchemaVersionValidityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CheckSchemaVersionValidityInput.filterSensitiveLog,
            outputFilterSensitiveLog: CheckSchemaVersionValidityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CheckSchemaVersionValidityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CheckSchemaVersionValidityCommand(input, context);
    };
    CheckSchemaVersionValidityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CheckSchemaVersionValidityCommand(output, context);
    };
    return CheckSchemaVersionValidityCommand;
}($Command));
export { CheckSchemaVersionValidityCommand };
//# sourceMappingURL=CheckSchemaVersionValidityCommand.js.map
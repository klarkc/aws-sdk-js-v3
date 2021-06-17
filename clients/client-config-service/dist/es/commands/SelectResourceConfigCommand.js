import { __extends } from "tslib";
import { SelectResourceConfigRequest, SelectResourceConfigResponse } from "../models/models_1";
import { deserializeAws_json1_1SelectResourceConfigCommand, serializeAws_json1_1SelectResourceConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p>
 * 		       <p>For more information about query components, see the
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
 *                <b>Query Components</b>
 *             </a> section in the AWS Config Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, SelectResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, SelectResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new SelectResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SelectResourceConfigCommandInput} for command's `input` shape.
 * @see {@link SelectResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SelectResourceConfigCommand = /** @class */ (function (_super) {
    __extends(SelectResourceConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SelectResourceConfigCommand(input) {
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
    SelectResourceConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "SelectResourceConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SelectResourceConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SelectResourceConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SelectResourceConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SelectResourceConfigCommand(input, context);
    };
    SelectResourceConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SelectResourceConfigCommand(output, context);
    };
    return SelectResourceConfigCommand;
}($Command));
export { SelectResourceConfigCommand };
//# sourceMappingURL=SelectResourceConfigCommand.js.map
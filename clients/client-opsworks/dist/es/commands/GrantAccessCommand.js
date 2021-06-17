import { __extends } from "tslib";
import { GrantAccessRequest, GrantAccessResult } from "../models/models_0";
import { deserializeAws_json1_1GrantAccessCommand, serializeAws_json1_1GrantAccessCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This action can be used only with Windows stacks.</p>
 *          </note>
 *          <p>Grants RDP access to a Windows instance for a specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, GrantAccessCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, GrantAccessCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new GrantAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GrantAccessCommandInput} for command's `input` shape.
 * @see {@link GrantAccessCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GrantAccessCommand = /** @class */ (function (_super) {
    __extends(GrantAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GrantAccessCommand(input) {
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
    GrantAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "GrantAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GrantAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GrantAccessResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GrantAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GrantAccessCommand(input, context);
    };
    GrantAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GrantAccessCommand(output, context);
    };
    return GrantAccessCommand;
}($Command));
export { GrantAccessCommand };
//# sourceMappingURL=GrantAccessCommand.js.map
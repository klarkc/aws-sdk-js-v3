import { __extends } from "tslib";
import { UpdateServerEngineAttributesRequest, UpdateServerEngineAttributesResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateServerEngineAttributesCommand, serializeAws_json1_1UpdateServerEngineAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Updates engine-specific attributes on a specified server. The server
 *       enters the <code>MODIFYING</code> state when this operation
 *       is in progress. Only one update can occur at a time.
 *       You can use this command to reset a Chef server's public key (<code>CHEF_PIVOTAL_KEY</code>) or a Puppet server's
 *       admin password (<code>PUPPET_ADMIN_PASSWORD</code>).
 *     </p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, UpdateServerEngineAttributesCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, UpdateServerEngineAttributesCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new UpdateServerEngineAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServerEngineAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateServerEngineAttributesCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateServerEngineAttributesCommand = /** @class */ (function (_super) {
    __extends(UpdateServerEngineAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateServerEngineAttributesCommand(input) {
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
    UpdateServerEngineAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksCMClient";
        var commandName = "UpdateServerEngineAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateServerEngineAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateServerEngineAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateServerEngineAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateServerEngineAttributesCommand(input, context);
    };
    UpdateServerEngineAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateServerEngineAttributesCommand(output, context);
    };
    return UpdateServerEngineAttributesCommand;
}($Command));
export { UpdateServerEngineAttributesCommand };
//# sourceMappingURL=UpdateServerEngineAttributesCommand.js.map
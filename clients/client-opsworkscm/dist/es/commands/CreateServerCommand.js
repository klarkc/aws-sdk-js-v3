import { __extends } from "tslib";
import { CreateServerRequest, CreateServerResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateServerCommand, serializeAws_json1_1CreateServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Creates and immedately starts a new server. The server is ready to use when it is in the <code>HEALTHY</code> state. By default, you can create a maximum of 10 servers.
 *     </p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       A <code>LimitExceededException</code> is thrown when you have created the maximum number of servers (10). A <code>ResourceAlreadyExistsException</code>
 *       is thrown when a server with the same name already exists in the account. A <code>ResourceNotFoundException</code> is thrown when you
 *       specify a backup ID that is not valid or is for a backup that does not exist. A <code>ValidationException</code> is thrown when parameters
 *       of the request are not valid.
 *     </p>
 *          <p>
 *       If you do not specify a security group by adding the <code>SecurityGroupIds</code> parameter, AWS OpsWorks creates a new security group.
 *     </p>
 *          <p>
 *             <i>Chef Automate:</i> The default security group opens the Chef server to the world on TCP port 443. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22.
 *     </p>
 *          <p>
 *             <i>Puppet Enterprise:</i> The default security group opens TCP ports 22, 443, 4433, 8140, 8142, 8143, and 8170. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22.
 *     </p>
 *          <p>By default, your server is accessible from any IP address. We
 *       recommend that you update your security group rules to allow
 *       access from known IP addresses and address ranges only. To edit security group rules, open Security Groups
 *       in the navigation pane of the EC2 management console.
 *     </p>
 *          <p>To specify your own domain for a server, and provide your own self-signed or CA-signed certificate and private key, specify values for <code>CustomDomain</code>,
 *       <code>CustomCertificate</code>, and <code>CustomPrivateKey</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, CreateServerCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, CreateServerCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new CreateServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServerCommandInput} for command's `input` shape.
 * @see {@link CreateServerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateServerCommand = /** @class */ (function (_super) {
    __extends(CreateServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateServerCommand(input) {
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
    CreateServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksCMClient";
        var commandName = "CreateServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateServerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateServerCommand(input, context);
    };
    CreateServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateServerCommand(output, context);
    };
    return CreateServerCommand;
}($Command));
export { CreateServerCommand };
//# sourceMappingURL=CreateServerCommand.js.map
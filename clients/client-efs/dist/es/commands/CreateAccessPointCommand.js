import { __extends } from "tslib";
import { AccessPointDescription, CreateAccessPointRequest } from "../models/models_0";
import { deserializeAws_restJson1CreateAccessPointCommand, serializeAws_restJson1CreateAccessPointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an EFS access point. An access point is an application-specific view into an EFS
 *       file system that applies an operating system user and group, and a file system path, to any
 *       file system request made through the access point. The operating system user and group
 *       override any identity information provided by the NFS client. The file system path is exposed
 *       as the access point's root directory. Applications using the access point can only access data
 *       in its own directory and below. To learn more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a file system using EFS access
 *         points</a>.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateAccessPointCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateAccessPointCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new CreateAccessPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessPointCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPointCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAccessPointCommand = /** @class */ (function (_super) {
    __extends(CreateAccessPointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAccessPointCommand(input) {
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
    CreateAccessPointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "CreateAccessPointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAccessPointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AccessPointDescription.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAccessPointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAccessPointCommand(input, context);
    };
    CreateAccessPointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAccessPointCommand(output, context);
    };
    return CreateAccessPointCommand;
}($Command));
export { CreateAccessPointCommand };
//# sourceMappingURL=CreateAccessPointCommand.js.map
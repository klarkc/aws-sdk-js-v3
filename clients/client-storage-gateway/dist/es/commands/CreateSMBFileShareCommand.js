import { __extends } from "tslib";
import { CreateSMBFileShareInput, CreateSMBFileShareOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateSMBFileShareCommand, serializeAws_json1_1CreateSMBFileShareCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Server Message Block (SMB) file share on an existing file gateway. In Storage
 *          Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage.
 *          Storage Gateway exposes file shares using an SMB interface. This operation is only
 *          supported for file gateways.</p>
 *
 *          <important>
 *             <p>File gateways require AWS Security Token Service (AWS STS) to be activated to enable
 *             you to create a file share. Make sure that AWS STS is activated in the AWS Region you
 *             are creating your file gateway in. If AWS STS is not activated in this AWS Region,
 *             activate it. For information about how to activate AWS STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and
 *                Access Management User Guide</i>.</p>
 *
 *             <p>File gateways don't support creating hard or symbolic links on a file
 *             share.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateSMBFileShareCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateSMBFileShareCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateSMBFileShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSMBFileShareCommandInput} for command's `input` shape.
 * @see {@link CreateSMBFileShareCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSMBFileShareCommand = /** @class */ (function (_super) {
    __extends(CreateSMBFileShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSMBFileShareCommand(input) {
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
    CreateSMBFileShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "CreateSMBFileShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSMBFileShareInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSMBFileShareOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSMBFileShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateSMBFileShareCommand(input, context);
    };
    CreateSMBFileShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateSMBFileShareCommand(output, context);
    };
    return CreateSMBFileShareCommand;
}($Command));
export { CreateSMBFileShareCommand };
//# sourceMappingURL=CreateSMBFileShareCommand.js.map
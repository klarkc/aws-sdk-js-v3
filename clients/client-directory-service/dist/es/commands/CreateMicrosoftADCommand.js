import { __extends } from "tslib";
import { CreateMicrosoftADRequest, CreateMicrosoftADResult } from "../models/models_0";
import { deserializeAws_json1_1CreateMicrosoftADCommand, serializeAws_json1_1CreateMicrosoftADCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Microsoft AD directory in the AWS Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">AWS Managed Microsoft AD</a> in the <i>AWS Directory Service Admin Guide</i>.</p>
 *          <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateMicrosoftADCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateMicrosoftADCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateMicrosoftADCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMicrosoftADCommandInput} for command's `input` shape.
 * @see {@link CreateMicrosoftADCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMicrosoftADCommand = /** @class */ (function (_super) {
    __extends(CreateMicrosoftADCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMicrosoftADCommand(input) {
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
    CreateMicrosoftADCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "CreateMicrosoftADCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMicrosoftADRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMicrosoftADResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMicrosoftADCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateMicrosoftADCommand(input, context);
    };
    CreateMicrosoftADCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateMicrosoftADCommand(output, context);
    };
    return CreateMicrosoftADCommand;
}($Command));
export { CreateMicrosoftADCommand };
//# sourceMappingURL=CreateMicrosoftADCommand.js.map
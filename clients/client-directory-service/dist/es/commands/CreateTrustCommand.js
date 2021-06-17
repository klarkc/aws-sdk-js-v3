import { __extends } from "tslib";
import { CreateTrustRequest, CreateTrustResult } from "../models/models_0";
import { deserializeAws_json1_1CreateTrustCommand, serializeAws_json1_1CreateTrustCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p>
 *          <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateTrustCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrustCommandInput} for command's `input` shape.
 * @see {@link CreateTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTrustCommand = /** @class */ (function (_super) {
    __extends(CreateTrustCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTrustCommand(input) {
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
    CreateTrustCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "CreateTrustCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrustRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTrustResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrustCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTrustCommand(input, context);
    };
    CreateTrustCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTrustCommand(output, context);
    };
    return CreateTrustCommand;
}($Command));
export { CreateTrustCommand };
//# sourceMappingURL=CreateTrustCommand.js.map
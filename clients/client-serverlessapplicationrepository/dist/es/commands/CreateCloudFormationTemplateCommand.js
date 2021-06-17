import { __extends } from "tslib";
import { CreateCloudFormationTemplateRequest, CreateCloudFormationTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCloudFormationTemplateCommand, serializeAws_restJson1CreateCloudFormationTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS CloudFormation template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateCloudFormationTemplateCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, CreateCloudFormationTemplateCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new CreateCloudFormationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCloudFormationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCloudFormationTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateCloudFormationTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCloudFormationTemplateCommand(input) {
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
    CreateCloudFormationTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServerlessApplicationRepositoryClient";
        var commandName = "CreateCloudFormationTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCloudFormationTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCloudFormationTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCloudFormationTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCloudFormationTemplateCommand(input, context);
    };
    CreateCloudFormationTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCloudFormationTemplateCommand(output, context);
    };
    return CreateCloudFormationTemplateCommand;
}($Command));
export { CreateCloudFormationTemplateCommand };
//# sourceMappingURL=CreateCloudFormationTemplateCommand.js.map